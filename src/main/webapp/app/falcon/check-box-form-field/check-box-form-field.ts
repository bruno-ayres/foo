import { FormFielAttribute, FormField } from '../form-field';
import { CheckBoxFormFieldComponent } from './check-box-form-field.component';

export class CheckBoxFormField extends FormField {
  constructor(public key: string, public title: string, public options?: FormFielAttribute) {
    super(CheckBoxFormFieldComponent, key, title, options);
    this.value = options?.value ?? false;
  }
}
