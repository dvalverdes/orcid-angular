import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { UserService } from 'src/app/core'
import { RecordService } from 'src/app/core/record/record.service'
import {
  Address,
  Assertion,
  NameForm,
  RequestInfoForm,
  UserInfo,
} from 'src/app/types'
import { UserRecord } from 'src/app/types/record.local'

import { PlatformInfo, PlatformInfoService } from '../../platform-info'
import { ModalCountryComponent } from '../modals/modal-country/modal-country.component'
import { ModalEmailComponent } from '../modals/modal-email/modal-email.component'
import { ModalKeywordComponent } from '../modals/modal-keyword/modal-keyword.component'
import { ModalPersonIdentifiersComponent } from '../modals/modal-person-identifiers/modal-person-identifiers.component'
import { ModalWebsitesComponent } from '../modals/modal-websites/modal-websites.component'

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: [
    './side-bar.component.scss-theme.scss',
    './side-bar.component.scss',
  ],
})
export class SideBarComponent implements OnInit, OnDestroy {
  $destroy: Subject<boolean> = new Subject<boolean>()

  @Input() isPublicRecord: string
  @Input() onlyOrcidId = false
  @Input() hideOrcidId = false

  modalCountryComponent = ModalCountryComponent
  modalEmailComponent = ModalEmailComponent
  modalWebsitesComponent = ModalWebsitesComponent
  modalKeywordComponent = ModalKeywordComponent
  modalPersonalIdentifiers = ModalPersonIdentifiersComponent

  userSession: {
    userInfo: UserInfo
    nameForm: NameForm
    oauthSession: RequestInfoForm
    displayName: string
    orcidUrl: string
    loggedIn: boolean
  }
  userInfo: UserInfo
  userRecord: UserRecord
  platform: PlatformInfo

  websiteOpenState = false
  keywordOpenState = false
  addressOpenState = false
  countriesOpenState = false
  externalIdentifierOpenState = false
  emailsOpenState = false

  constructor(
    _platform: PlatformInfoService,
    private _user: UserService,
    private _record: RecordService
  ) {
    _platform
      .get()
      .pipe(takeUntil(this.$destroy))
      .subscribe((data) => {
        this.platform = data
      })
  }

  ngOnInit(): void {
    this.getRecord()
  }

  private getRecord() {
    this._user
      .getUserSession()
      .pipe(takeUntil(this.$destroy))
      .subscribe((userSession) => {
        this.userSession = userSession
      })

    // Loads the public record if `isPublicRecord` is defined
    // Otherwise loads the current login private record
    this._record
      .getRecord({
        publicRecordId: this.isPublicRecord || undefined,
      })
      .pipe(takeUntil(this.$destroy))
      .subscribe((userRecord) => {
        if (!this.onlyOrcidId && userRecord?.userInfo?.RECORD_WITH_ISSUES) {
          this.onlyOrcidId = true
        }
        this.userRecord = userRecord
        this.userInfo = userRecord?.userInfo
      })
  }

  getWebsite(website: Assertion) {
    return website.urlName !== null && website.urlName !== ''
      ? website.urlName
      : website.url.value
  }

  getKeyword(keyword: Assertion) {
    return keyword.content
  }

  getKeywords(keywords: Assertion[]): string[] {
    return keywords.map((keyword) => {
      return keyword.content
    })
  }

  getAddresses(addresses: Address[]): string[] {
    return addresses.map((address) => {
      return address.countryName
    })
  }

  ngOnDestroy() {
    this.$destroy.next(true)
    this.$destroy.unsubscribe()
  }
}
