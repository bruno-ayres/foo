import { FormFielAttribute, FormField } from '../form-field';
import { DateFormFieldComponent } from './date-form-field.component';

/* export interface TextFormAttribute extends FormFielAttribute {
}*/

export class DateFormField extends FormField {
  constructor(public key: string, public title: string, public options?: FormFielAttribute) {
    super(DateFormFieldComponent, key, title, options);
  }
}
