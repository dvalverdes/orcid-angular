import { Component, Inject, OnInit } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { EMAIL_REGEXP } from 'src/app/constants'
import { SocialAccount } from 'src/app/types/account-alternate-sign-in.endpoint'

@Component({
  selector: 'app-dialog-security-alternate-account-delete',
  templateUrl: './dialog-security-alternate-account-delete.component.html',
  styleUrls: ['./dialog-security-alternate-account-delete.component.scss'],
})
export class DialogSecurityAlternateAccountDeleteComponent implements OnInit {
  data: SocialAccount
  constructor(
    private matRef: MatDialogRef<DialogSecurityAlternateAccountDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) data: SocialAccount
  ) {
    this.data = data
  }

  ngOnInit(): void {}

  ok() {
    this.matRef.close(true)
  }
  cancel() {
    this.matRef.close(false)
  }
  getDisplayEmail(account: SocialAccount): string {
    if (account.email) {
      return account.email
    } else if (account.id?.userid && EMAIL_REGEXP.test(account.id?.userid)) {
      return account.id?.userid
    } else {
      return account.displayname
    }
  }
}
