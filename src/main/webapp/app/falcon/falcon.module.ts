import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FalconFormComponent } from './falcon-form/falcon-form.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { TextFormFieldComponent } from './text-form-field/text-form-field.component';
import { HostViewDirective } from './host-view.directive';
import { SharedModule } from 'app/shared/shared.module';
import { CheckBoxFormFieldComponent } from './check-box-form-field/check-box-form-field.component';
import { TextAreaFormFieldComponent } from './text-area-form-field/text-area-form-field.component';
import { ErrorMessageFormFieldComponent } from './error-message-form-field/error-message-form-field.component';
import { DateFormFieldComponent } from './date-form-field/date-form-field.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    FalconFormComponent,
    FormFieldComponent,
    TextFormFieldComponent,
    HostViewDirective,
    CheckBoxFormFieldComponent,
    TextAreaFormFieldComponent,
    ErrorMessageFormFieldComponent,
    DateFormFieldComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, SharedModule, NgbModule, FontAwesomeModule],
  exports: [FalconFormComponent, FormFieldComponent, TextFormFieldComponent, CheckBoxFormFieldComponent, DateFormFieldComponent],
})
export class FalconModule {}
