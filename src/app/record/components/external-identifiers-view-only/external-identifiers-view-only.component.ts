import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-external-identifiers-view-only',
  templateUrl: './external-identifiers-view-only.component.html',
  styleUrls: ['./external-identifiers-view-only.component.scss'],
})
export class ExternalIdentifiersViewOnlyComponent implements OnInit {
  typeLabel = $localize`:@@record.type:Type:`
  valueLabel = $localize`:@@record.type:Value:`
  urlLabel = $localize`:@@record.type:Url:`
  relationshipLabel = $localize`:@@record.relationship:Relationship:`

  @Output() edit = new EventEmitter<void>()
  @Output() delete = new EventEmitter<void>()

  @Input() workIdentifier: {
    externalIdentifierId: string
    externalIdentifierType: string
    externalIdentifierUrl: string
    externalRelationship: string
  }
  constructor() {}

  ngOnInit(): void {}
}
