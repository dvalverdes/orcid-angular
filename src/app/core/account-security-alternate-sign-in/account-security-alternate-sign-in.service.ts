import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { catchError, map, retry, switchMap } from 'rxjs/operators'
import {
  SocialAccount,
  SocialAccountDeleteResponse,
  SocialAccountId,
} from 'src/app/types/account-alternate-sign-in.endpoint'
import { Institutional } from 'src/app/types/institutional.endpoint'
import { environment } from 'src/environments/environment'
import { DiscoService } from '../disco/disco.service'

import { ErrorHandlerService } from '../error-handler/error-handler.service'

@Injectable({
  providedIn: 'root',
})
export class AccountSecurityAlternateSignInService {
  headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  })
  constructor(
    private _errorHandler: ErrorHandlerService,
    private _discoFeed: DiscoService,
    private _http: HttpClient
  ) {}

  get(): Observable<SocialAccount[]> {
    return this._http
      .get<SocialAccount[]>(
        environment.API_WEB + `account/socialAccounts.json`,
        {
          headers: this.headers,
        }
      )
      .pipe(
        switchMap((socialAccounts) => {
          return this._discoFeed.getDiscoFeed().pipe(
            map((feed) => {
              this.populateIdPNames({ socialAccounts, feed })
              return socialAccounts
            })
          )
        }),
        retry(3),
        catchError((error) => this._errorHandler.handleError(error))
      )
  }
  delete(deleteId: SocialAccountId): Observable<SocialAccountDeleteResponse> {
    return this._http
      .post<SocialAccountDeleteResponse>(
        environment.API_WEB + `account/revokeSocialAccount.json`,
        deleteId,
        {
          headers: this.headers,
        }
      )
      .pipe(
        retry(3),
        catchError((error) => this._errorHandler.handleError(error))
      )
  }

  populateIdPNames({
    socialAccounts,
    feed,
  }: {
    socialAccounts: SocialAccount[]
    feed: Institutional[]
  }): void {
    socialAccounts.forEach((account) => {
      if (
        account.id.providerid === 'facebook' ||
        account.id.providerid === 'google'
      ) {
        account.idpName =
          account.id.providerid.charAt(0).toUpperCase() +
          account.id.providerid.slice(1)
      } else {
        account.idpName = this._discoFeed.getInstitutionNameBaseOnIdFromObject(
          this._discoFeed.getInstitutionBaseOnIDFromObject(
            feed,
            account.id.providerid
          )
        )
      }
      if (!account.idpName) {
        account.idpName = account.id.providerid
      }
    })
  }
}
