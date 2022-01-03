import { Component } from '@angular/core';
import { CfwFieldComponent } from '../cfw-form-field/cfw-form-field.component';
import { CfwTextAreaFormField } from './cfw-text-area-form-field';

@Component({
  selector: 'cfw-text-area-form-field',
  templateUrl: './cfw-text-area-form-field.component.html',
  styleUrls: [],
})
export class CfwTextAreaFormFieldComponent extends CfwFieldComponent {
  get textAreaFormField(): CfwTextAreaFormField {
    return this.formField as CfwTextAreaFormField;
  }
}
