import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FalconFormComponent } from './falcon-form/falcon-form.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { TextFormFieldComponent } from './text-form-field/text-form-field.component';
import { HostViewDirective } from './host-view.directive';

@NgModule({
  declarations: [FalconFormComponent, FormFieldComponent, TextFormFieldComponent, HostViewDirective],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FalconFormComponent, FormFieldComponent, TextFormFieldComponent],
})
export class FalconModule {}
