import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of, ReplaySubject } from 'rxjs'
import { retry, catchError, tap } from 'rxjs/operators'
import {
  SideBarPublicUserRecord,
  UserRecord,
  UserRecordOptions,
} from 'src/app/types/record.local'
import { environment } from 'src/environments/environment'
import { ErrorHandlerService } from '../error-handler/error-handler.service'

@Injectable({
  providedIn: 'root',
})
export class RecordPublicSideBarService {
  private $SideBarPublicUserRecordSubject: ReplaySubject<SideBarPublicUserRecord>

  constructor(
    private _http: HttpClient,
    private _errorHandler: ErrorHandlerService
  ) {}

  headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  })

  getPublicRecordSideBar(
    options: UserRecordOptions
  ): Observable<SideBarPublicUserRecord> {
    if (options.publicRecordId) {
      if (!this.$SideBarPublicUserRecordSubject || options.forceReload) {
        this.$SideBarPublicUserRecordSubject = new ReplaySubject<SideBarPublicUserRecord>(
          1
        )
      } else {
        return this.$SideBarPublicUserRecordSubject.asObservable()
      }

      return of(({
        title:
          'July31 [test] (0000-0002-2386-9396) - ORCID | Connecting Research and Researchers',
        displayName: 'July31 [test]',
        names: {
          visibility: {
            errors: [],
            required: true,
            getRequiredMessage: null,
            visibility: 'PUBLIC',
          },
          errors: [],
          givenNames: {
            errors: [],
            value: 'July31',
            required: true,
            getRequiredMessage: null,
          },
          familyName: {
            errors: [],
            value: '[test]',
            required: true,
            getRequiredMessage: null,
          },
          creditName: null,
        },
        biography: null,
        otherNames: {
          errors: [],
          otherNames: [
            {
              visibility: {
                errors: [],
                required: true,
                getRequiredMessage: null,
                visibility: 'PUBLIC',
              },
              errors: [],
              content: 'Другое имя',
              putCode: '4647',
              displayIndex: 0,
              createdDate: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              lastModified: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              source: 'APP-AJPEHIAZIRSSY5UO',
              sourceName: 'Manual Testing Client',
              assertionOriginOrcid: null,
              assertionOriginClientId: null,
              assertionOriginName: "my assetion entity",
            },
            {
              visibility: {
                errors: [],
                required: true,
                getRequiredMessage: null,
                visibility: 'PUBLIC',
              },
              errors: [],
              content: '其他名字',
              putCode: '4648',
              displayIndex: 0,
              createdDate: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              lastModified: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              source: 'APP-AJPEHIAZIRSSY5UO',
              sourceName: 'Manual Testing Client',
              assertionOriginOrcid: null,
              assertionOriginClientId: null,
              assertionOriginName: "my assetion entity",
            },
            {
              visibility: {
                errors: [],
                required: true,
                getRequiredMessage: null,
                visibility: 'PUBLIC',
              },
              errors: [],
              content: 'other names',
              putCode: '4649',
              displayIndex: 0,
              createdDate: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              lastModified: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              source: 'APP-AJPEHIAZIRSSY5UO',
              sourceName: 'Manual Testing Client',
              assertionOriginOrcid: null,
              assertionOriginClientId: null,
              assertionOriginName: "my assetion entity",
            },
            {
              visibility: {
                errors: [],
                required: true,
                getRequiredMessage: null,
                visibility: 'PUBLIC',
              },
              errors: [],
              content: 'other names',
              putCode: '4649',
              displayIndex: 0,
              createdDate: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              lastModified: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              source: 'APP-AJPEHIAZIRSSY5UO',
              sourceName: 'Manual Testing Client',
              assertionOriginOrcid: null,
              assertionOriginClientId: null,
              assertionOriginName: "my assetion entity",
            },
            {
              visibility: {
                errors: [],
                required: true,
                getRequiredMessage: null,
                visibility: 'PUBLIC',
              },
              errors: [],
              content: 'other names',
              putCode: '4649',
              displayIndex: 0,
              createdDate: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              lastModified: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              source: 'APP-AJPEHIAZIRSSY5UO',
              sourceName: 'Manual Testing Client',
              assertionOriginOrcid: null,
              assertionOriginClientId: null,
              assertionOriginName: "my assetion entity",
            },
            {
              visibility: {
                errors: [],
                required: true,
                getRequiredMessage: null,
                visibility: 'PUBLIC',
              },
              errors: [],
              content: 'other names',
              putCode: '4649',
              displayIndex: 0,
              createdDate: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              lastModified: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              source: 'APP-AJPEHIAZIRSSY5UO',
              sourceName: 'Manual Testing Client',
              assertionOriginOrcid: null,
              assertionOriginClientId: null,
              assertionOriginName: "my assetion entity",
            },
          ],
          visibility: null,
        },
        countries: {
          errors: [],
          addresses: [
            {
              visibility: {
                errors: [],
                required: true,
                getRequiredMessage: null,
                visibility: 'PUBLIC',
              },
              errors: [],
              iso2Country: {
                errors: [],
                required: true,
                getRequiredMessage: null,
                value: 'CA',
              },
              countryName: 'Canada',
              putCode: '2382',
              displayIndex: 0,
              createdDate: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              lastModified: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              source: 'APP-AJPEHIAZIRSSY5UO',
              sourceName: 'Manual Testing Client',
              assertionOriginOrcid: null,
              assertionOriginClientId: null,
              assertionOriginName: "my assetion entity",
            },
            {
              visibility: {
                errors: [],
                required: true,
                getRequiredMessage: null,
                visibility: 'PUBLIC',
              },
              errors: [],
              iso2Country: {
                errors: [],
                required: true,
                getRequiredMessage: null,
                value: 'CR',
              },
              countryName: 'Costa Rica',
              putCode: '2383',
              displayIndex: 0,
              createdDate: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              lastModified: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              source: 'APP-AJPEHIAZIRSSY5UO',
              sourceName: 'Manual Testing Client',
              assertionOriginOrcid: null,
              assertionOriginClientId: null,
              assertionOriginName: "my assetion entity",
            },
            {
              visibility: {
                errors: [],
                required: true,
                getRequiredMessage: null,
                visibility: 'PUBLIC',
              },
              errors: [],
              iso2Country: {
                errors: [],
                required: true,
                getRequiredMessage: null,
                value: 'NZ',
              },
              countryName: 'New Zealand',
              putCode: '2384',
              displayIndex: 0,
              createdDate: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              lastModified: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              source: 'APP-AJPEHIAZIRSSY5UO',
              sourceName: 'Manual Testing Client',
              assertionOriginOrcid: null,
              assertionOriginClientId: null,
              assertionOriginName: "my assetion entity",
            },
          ],
          visibility: null,
        },
        keyword: {
          errors: [],
          keywords: [
            {
              visibility: {
                errors: [],
                required: true,
                getRequiredMessage: null,
                visibility: 'PUBLIC',
              },
              errors: [],
              putCode: '3784',
              content: 'keyword API added',
              displayIndex: 0,
              createdDate: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              lastModified: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              source: 'APP-AJPEHIAZIRSSY5UO',
              sourceName: 'Manual Testing Client',
              assertionOriginOrcid: null,
              assertionOriginClientId: null,
              assertionOriginName: "my assetion entity",
            },
            {
              visibility: {
                errors: [],
                required: true,
                getRequiredMessage: null,
                visibility: 'PUBLIC',
              },
              errors: [],
              putCode: '3785',
              content: 'oranges',
              displayIndex: 0,
              createdDate: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              lastModified: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              source: 'APP-AJPEHIAZIRSSY5UO',
              sourceName: 'Manual Testing Client',
              assertionOriginOrcid: null,
              assertionOriginClientId: null,
              assertionOriginName: "my assetion entity",
            },
            {
              visibility: {
                errors: [],
                required: true,
                getRequiredMessage: null,
                visibility: 'PUBLIC',
              },
              errors: [],
              putCode: '3786',
              content: 'grapes',
              displayIndex: 0,
              createdDate: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              lastModified: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              source: 'APP-AJPEHIAZIRSSY5UO',
              sourceName: 'Manual Testing Client',
              assertionOriginOrcid: null,
              assertionOriginClientId: null,
              assertionOriginName: "my assetion entity",
            },
            {
              visibility: {
                errors: [],
                required: true,
                getRequiredMessage: null,
                visibility: 'PUBLIC',
              },
              errors: [],
              putCode: '3787',
              content: 'peaches',
              displayIndex: 0,
              createdDate: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              lastModified: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              source: 'APP-AJPEHIAZIRSSY5UO',
              sourceName: 'Manual Testing Client',
              assertionOriginOrcid: null,
              assertionOriginClientId: null,
              assertionOriginName: "my assetion entity",
            },
          ],
          visibility: null,
        },
        emails: { emails: null, errors: [] },
        externalIdentifier: {
          errors: [],
          externalIdentifiers: [
            {
              visibility: {
                errors: [],
                required: true,
                getRequiredMessage: null,
                visibility: 'PUBLIC',
              },
              errors: [],
              commonName: 'API added',
              reference: '5',
              url: 'www.myid.com/5',
              source: 'APP-AJPEHIAZIRSSY5UO',
              sourceName: 'Manual Testing Client',
              displayIndex: 0,
              putCode: '2663',
              createdDate: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              lastModified: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              assertionOriginOrcid: null,
              assertionOriginClientId: null,
              assertionOriginName: "my assetion entity",
            },
            {
              visibility: {
                errors: [],
                required: true,
                getRequiredMessage: null,
                visibility: 'PUBLIC',
              },
              errors: [],
              commonName: 'Personal External Identifier',
              reference: '42',
              url: 'http://qa.orcid.org/42',
              source: 'APP-AJPEHIAZIRSSY5UO',
              sourceName: 'Manual Testing Client',
              displayIndex: 0,
              putCode: '2664',
              createdDate: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              lastModified: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              assertionOriginOrcid: null,
              assertionOriginClientId: null,
              assertionOriginName: "my assetion entity",
            },
            {
              visibility: {
                errors: [],
                required: true,
                getRequiredMessage: null,
                visibility: 'PUBLIC',
              },
              errors: [],
              commonName: '2.1 Personal External Identifier',
              reference: '43',
              url: 'http://qa.orcid.org/43',
              source: 'APP-AJPEHIAZIRSSY5UO',
              sourceName: 'Manual Testing Client',
              displayIndex: 0,
              putCode: '2665',
              createdDate: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              lastModified: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              assertionOriginOrcid: null,
              assertionOriginClientId: null,
              assertionOriginName: "my assetion entity",
            },
            {
              visibility: {
                errors: [],
                required: true,
                getRequiredMessage: null,
                visibility: 'PUBLIC',
              },
              errors: [],
              commonName: '3.0 Personal External Identifier',
              reference: '44',
              url: 'http://qa.orcid.org/44',
              source: 'APP-AJPEHIAZIRSSY5UO',
              sourceName: 'Manual Testing Client',
              displayIndex: 0,
              putCode: '2666',
              createdDate: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              lastModified: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              assertionOriginOrcid: null,
              assertionOriginClientId: null,
              assertionOriginName: "my assetion entity",
            },
          ],
          visibility: null,
        },
        website: {
          errors: [],
          websites: [
            {
              visibility: {
                errors: [],
                required: true,
                getRequiredMessage: null,
                visibility: 'PUBLIC',
              },
              errors: [],
              url: {
                errors: [],
                value: 'http://google.com/1',
                required: true,
                getRequiredMessage: null,
              },
              urlName: 'API added',
              putCode: '9117',
              displayIndex: 0,
              createdDate: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              lastModified: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              source: 'APP-AJPEHIAZIRSSY5UO',
              sourceName: 'Manual Testing Client',
              assertionOriginOrcid: null,
              assertionOriginClientId: null,
              assertionOriginName: "my assetion entity",
            },
            {
              visibility: {
                errors: [],
                required: true,
                getRequiredMessage: null,
                visibility: 'PUBLIC',
              },
              errors: [],
              url: {
                errors: [],
                value: 'https://site1.com/',
                required: true,
                getRequiredMessage: null,
              },
              urlName: 'Site # 1',
              putCode: '9118',
              displayIndex: 0,
              createdDate: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              lastModified: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              source: 'APP-AJPEHIAZIRSSY5UO',
              sourceName: 'Manual Testing Client',
              assertionOriginOrcid: null,
              assertionOriginClientId: null,
              assertionOriginName: "my assetion entity",
            },
            {
              visibility: {
                errors: [],
                required: true,
                getRequiredMessage: null,
                visibility: 'PUBLIC',
              },
              errors: [],
              url: {
                errors: [],
                value: 'http://site2.com/',
                required: true,
                getRequiredMessage: null,
              },
              urlName: 'Site # 2',
              putCode: '9119',
              displayIndex: 0,
              createdDate: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              lastModified: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              source: 'APP-AJPEHIAZIRSSY5UO',
              sourceName: 'Manual Testing Client',
              assertionOriginOrcid: null,
              assertionOriginClientId: null,
              assertionOriginName: "my assetion entity",
            },
            {
              visibility: {
                errors: [],
                required: true,
                getRequiredMessage: null,
                visibility: 'PUBLIC',
              },
              errors: [],
              url: {
                errors: [],
                value: 'http://site3.com/',
                required: true,
                getRequiredMessage: null,
              },
              urlName: 'Site # 3',
              putCode: '9120',
              displayIndex: 0,
              createdDate: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              lastModified: {
                errors: [],
                month: '7',
                day: '31',
                year: '2018',
                required: true,
                getRequiredMessage: null,
              },
              source: 'APP-AJPEHIAZIRSSY5UO',
              sourceName: 'Manual Testing Client',
              assertionOriginOrcid: null,
              assertionOriginClientId: null,
              assertionOriginName: "my assetion entity",
            },
          ],
          visibility: null,
        },
        lastModifiedTime: 1612277711901,
      } as unknown) as SideBarPublicUserRecord).pipe(
        retry(3),
        catchError((error) => this._errorHandler.handleError(error)),
        catchError((error) => of({} as SideBarPublicUserRecord)),
        tap((value) => this.$SideBarPublicUserRecordSubject.next(value))
      )
    } else {
      of({})
    }
  }
}
