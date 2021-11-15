import { Inject, Injectable, LOCALE_ID } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  RouterStateSnapshot,
} from '@angular/router'
import { CookieService } from 'ngx-cookie-service'
import { NEVER, Observable, of } from 'rxjs'
import { catchError, switchMap, tap } from 'rxjs/operators'
import { environment } from 'src/environments/environment'

import { WINDOW } from '../cdk/window'
import { UserService } from '../core'
import { ErrorHandlerService } from '../core/error-handler/error-handler.service'
import { LanguageService } from '../core/language/language.service'
import { LanguageContext } from '../types/language.locale'
const GUARD_COOKIE_CHECK = 'lang_refresh'
@Injectable({
  providedIn: 'root',
})
export class LanguageGuard implements CanActivateChild {
  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private _cookies: CookieService,
    private _user: UserService,
    @Inject(WINDOW) private window: Window,
    private _errorHandler: ErrorHandlerService,
    private _languageService: LanguageService
  ) {}
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    let langContext: LanguageContext

    // Wait the user session so the language cookie is declared from the backend
    return this._user.getUserSession().pipe(
      tap(() => {
        // get language context
        langContext = this.getLanguageContext(next.queryParams)

        if (environment.debugger) {
          console.debug('language context', langContext)
        }
      }),
      /// HANDLE LANGUAGE CHANGE BY QUERY PARAMETERS, like `https://orcid.org/signin?lang=pt`
      switchMap(() => {
        if (this.currentAppLanguageMatchTheParamLanguage(langContext)) {
          this._cookies.delete(GUARD_COOKIE_CHECK)
          return of(true)
        } else {
          // the browser needs to be reloaded to set the right cookie.
          return this._languageService
            .changeLanguage(langContext.param)
            .pipe(
              switchMap(() =>
                of(this.window.location.reload()).pipe(switchMap(() => NEVER))
              )
            )
        }
      }),
      /// HANDLE LANGUAGE COOKIE UPDATES, like when a user login into a `spanish` user from a `english` signin page.  
      switchMap(() => {
        if (this.currentAppLanguageMatchCookieLanguage(langContext)) {
          this._cookies.delete(GUARD_COOKIE_CHECK)
          return of(true)
        } else {
          if (
            !this._cookies.check(GUARD_COOKIE_CHECK) ||
            this._cookies.get(GUARD_COOKIE_CHECK) !== langContext.cookie
          ) {
            // the browser needs to be reloaded to set the right cookie.
            this._cookies.set(GUARD_COOKIE_CHECK, langContext.cookie)
            return of(this.window.location.reload()).pipe(
              switchMap(() => NEVER)
            )
          } else {
            // Weird event where `GUARD_COOKIE_CHECK` was already set, the app was already reloaded
            // But the current app language do not match the cookie language
            return this._errorHandler.handleError(
              new Error('cacheIssueDetected/')
            )
          }
        }
      }),
      catchError(() => of(true)) // Allow to continue if the language change fails
    )
  }

  getLanguageContext(queryParams): LanguageContext {
    return {
      param: this.normalizeLanguageCode(
        queryParams['lang'] || queryParams['LANG']
      ),
      app: this.normalizeLanguageCode(this.locale),
      cookie: this.normalizeLanguageCode(this._cookies.get('locale_v3')),
    }
  }

  /**
   *
   * @param languageCode Any Language code set by the Orcid Source backend
   *
   * Transform backend codes to ISO 639-1 Code to be compatible with Angular codes
   */
  normalizeLanguageCode(languageCode: string): string {
    if (languageCode) {
      return languageCode.toLocaleLowerCase().replace('_', '-')
    }
    return languageCode
  }

  currentAppLanguageMatchTheParamLanguage(
    langContext: LanguageContext
  ): boolean {
    if (
      langContext.param &&
      langContext.app &&
      langContext.app.indexOf(langContext.param) === -1
    ) {
      return false
    }
    return true
  }

  currentAppLanguageMatchCookieLanguage(langContext: LanguageContext): boolean {
    if (
      langContext.app &&
      langContext.app.indexOf(langContext.cookie || 'en') === -1
    ) {
      return false
    }
    return true
  }
}
