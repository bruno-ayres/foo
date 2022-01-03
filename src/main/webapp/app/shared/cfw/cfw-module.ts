import { NgModule } from '@angular/core';
import { CfwFormFieldComponent } from './form/cfw-form-field/cfw-form-field.component';
import { CfwTextFormFieldComponent } from './form/cfw-text-form-field/cfw-text-form-field.component';
import { CfwErrorMessageFormFieldComponent } from './form/cfw-error-message-form-field/cfw-error-message-form-field.component';
import { SharedModule } from '../shared.module';
import { CfwHostViewDirective } from './form/cfw-host-view.directive';
import { CfwFormComponent } from './form/cfw-form/cfw-form.component';
import { CfwCheckBoxFormFieldComponent } from './form/cfw-check-box-form-field/cfw-check-box-form-field.component';
import { CfwDateFormFieldComponent } from './form/cfw-date-form-field/cfw-date-form-field.component';
import { CfwTextAreaFormFieldComponent } from './form/cfw-text-area-form-field/cfw-text-area-form-field.component';

@NgModule({
  declarations: [
    CfwHostViewDirective,
    CfwFormFieldComponent,
    CfwTextFormFieldComponent,
    CfwErrorMessageFormFieldComponent,
    CfwFormComponent,
    CfwCheckBoxFormFieldComponent,
    CfwDateFormFieldComponent,
    CfwTextAreaFormFieldComponent,
  ],
  imports: [SharedModule],
  exports: [
    CfwHostViewDirective,
    CfwFormFieldComponent,
    CfwTextFormFieldComponent,
    CfwErrorMessageFormFieldComponent,
    CfwFormComponent,
    CfwCheckBoxFormFieldComponent,
    CfwDateFormFieldComponent,
    CfwTextAreaFormFieldComponent,
  ],
})
export class CfwModule {}
