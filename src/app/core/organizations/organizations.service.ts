import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { AffiliationsDetails, OrgDisambiguated } from 'src/app/types'
import { environment } from '../../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { retry, catchError, tap } from 'rxjs/operators'
import { ErrorHandlerService } from '../error-handler/error-handler.service'

@Injectable({
  providedIn: 'root',
})
export class OrganizationsService {
  constructor(
    private _http: HttpClient,
    private _errorHandler: ErrorHandlerService
  ) {}

  getOrgDisambiguated(type, value): Observable<OrgDisambiguated> {
    if (type && value) {
      return this._http
        .get<OrgDisambiguated>(
          environment.API_WEB +
            `orgs/disambiguated/${type}?value=${encodeURIComponent(value)}`
        )
        .pipe(
          retry(3),
          catchError(this._errorHandler.handleError)
        )
    } else {
      return of(null)
    }
  }
}
