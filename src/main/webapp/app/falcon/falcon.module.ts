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

@NgModule({
  declarations: [
    FalconFormComponent,
    FormFieldComponent,
    TextFormFieldComponent,
    HostViewDirective,
    CheckBoxFormFieldComponent,
    TextAreaFormFieldComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  exports: [FalconFormComponent, FormFieldComponent, TextFormFieldComponent, CheckBoxFormFieldComponent],
})
export class FalconModule {}
