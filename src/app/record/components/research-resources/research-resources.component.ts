import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { UserRecord } from '../../../types/record.local'
import { Subject } from 'rxjs'
import {
  NameForm,
  OrgDisambiguated,
  RequestInfoForm,
  UserInfo,
} from '../../../types'
import { PlatformInfo, PlatformInfoService } from '../../../cdk/platform-info'
import { RecordService } from '../../../core/record/record.service'
import { first, takeUntil } from 'rxjs/operators'
import { OrganizationsService, UserService } from '../../../core'
import {
  Host,
  Item,
  ResearchResource,
  ResearchResources,
  ResearchResourcesGroup,
} from '../../../types/record-research-resources.endpoint'
import { RecordResearchResourceService } from '../../../core/record-research-resource/record-research-resource.service'
import { URL_REGEXP } from '../../../constants'
import { UserSession } from 'src/app/types/session.local'
import { isEmpty } from 'lodash'

@Component({
  selector: 'app-research-resources',
  templateUrl: './research-resources.component.html',
  styleUrls: [
    './research-resources.component.scss',
    './research-resources.component.scss-theme.scss',
  ],
})
export class ResearchResourcesComponent implements OnInit {
  labelSortButton = $localize`:@@shared.sortResearch:Sort Research Resources`
  @Input() isPublicRecord: string
  @Input() expandedContent: boolean
  @Output() total: EventEmitter<any> = new EventEmitter()
  @Output() expanded: EventEmitter<any> = new EventEmitter()

  $destroy: Subject<boolean> = new Subject<boolean>()

  userSession: UserSession
  researchResources: ResearchResources
  platform: PlatformInfo
  detailsResearchResources: {
    putCode: number
    researchResource: ResearchResource
  }[] = []
  detailsOrgDisambiguated: {
    disambiguationSource: string
    orgDisambiguatedId: string
    orgDisambiguated: OrgDisambiguated
  }[] = []

  ngOrcidResearchResources = $localize`:@@researchResources.researchResources:Research resources`

  constructor(
    _platform: PlatformInfoService,
    private _organizationsService: OrganizationsService,
    private _record: RecordService,
    private _recordResearchResourceService: RecordResearchResourceService,
    private _user: UserService
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

    this._record
      .getRecord({
        publicRecordId: this.isPublicRecord || undefined,
      })
      .pipe(takeUntil(this.$destroy))
      .subscribe((userRecord) => {
        if (!isEmpty(userRecord?.researchResources)) {
          this.researchResources = userRecord.researchResources
          this.total.emit(this.researchResources.groups.length)
        }
      })
  }

  getDetails(researchResource: ResearchResource, putCode: number): void {
    if (this.isPublicRecord) {
      this._recordResearchResourceService
        .getPublicResearchResourceById(this.isPublicRecord, putCode)
        .pipe(first())
        .subscribe(
          (data) => {
            this.detailsResearchResources.push({
              putCode: putCode,
              researchResource: data,
            })
            researchResource.showDetails = true
          },
          (error) => {
            console.error('getDetailsError', error)
          }
        )
    } else {
      this._recordResearchResourceService
        .getResearchResourceById(putCode)
        .pipe(first())
        .subscribe(
          (data) => {
            const research: ResearchResource = data
            this.detailsResearchResources.push({
              putCode: putCode,
              researchResource: research,
            })
            researchResource.showDetails = true
            research.hosts.forEach((host) => {
              this.getOrganizationDisambiguatedDetails(
                null,
                host.disambiguationSource,
                host.orgDisambiguatedId
              )
            })
          },
          (error) => {
            console.error('getDetailsError', error)
          }
        )
    }
  }

  getOrganizationDisambiguatedDetails(
    item: Item,
    disambiguationSource,
    orgDisambiguatedId
  ): void {
    this._organizationsService
      .getOrgDisambiguated(disambiguationSource, orgDisambiguatedId)
      .pipe(first())
      .subscribe((organizationDisambiguated) => {
        this.detailsOrgDisambiguated.push({
          disambiguationSource,
          orgDisambiguatedId,
          orgDisambiguated: organizationDisambiguated,
        })
        if (item) {
          item.showDetails = true
        }
      })
  }

  getResearchResource(putCode: number): ResearchResource {
    if (this.detailsResearchResources.length === 0) {
      return null
    }

    return this.detailsResearchResources
      .filter((value) => value.putCode === putCode)
      .map((value) => {
        return value.researchResource
      })[0]
  }

  getOrganizationDisambiguated(host: Host): OrgDisambiguated {
    const disambiguationSource = host.disambiguationSource
    const orgDisambiguatedId = host.orgDisambiguatedId

    return this.detailsOrgDisambiguated
      .filter(
        (value) =>
          value.disambiguationSource === disambiguationSource &&
          value.orgDisambiguatedId === orgDisambiguatedId
      )
      .map((value) => {
        return value.orgDisambiguated
      })[0]
  }

  isPreferred(
    researchResource: ResearchResource,
    group: ResearchResourcesGroup
  ) {
    const response =
      researchResource && group.defaultResearchResource[0]
        ? group[0].defaultResearchResource.putCode.value ===
          researchResource.putCode.value
        : false
    return response
  }

  getLink(type: string, value: string) {
    return this._organizationsService.getLink(type, value)
  }

  isUrl(value: string) {
    return RegExp(URL_REGEXP).test(value)
  }

  collapse(value: ResearchResource | Item) {
    value.showDetails = !value.showDetails
  }

  expandedClicked(expanded: boolean) {
    this.expanded.emit({ type: 'research-resources', expanded })
  }
}
