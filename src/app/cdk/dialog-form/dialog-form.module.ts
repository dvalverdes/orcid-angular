import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogFormComponent } from './dialog-form/dialog-form.component';
import { DialogFormHeaderComponent } from './dialog-form/dialog-form-header/dialog-form-header.component';
import { DialogFormSideBarComponent } from './dialog-form/dialog-form-side-bar/dialog-form-side-bar.component';



@NgModule({
  declarations: [DialogFormComponent, DialogFormHeaderComponent, DialogFormSideBarComponent],
  imports: [
    CommonModule
  ]
})
export class DialogFormModule { }
