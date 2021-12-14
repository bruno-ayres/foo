import { FormFielAttribute, FormField } from '../form-field';
import { TextFormFieldComponent } from './text-form-field.component';

/* export interface TextFormAttribute extends FormFielAttribute {
}*/

export class TextFormField extends FormField {
  constructor(public key: string, public title: string, public options?: FormFielAttribute) {
    super(TextFormFieldComponent, key, title, options);
  }
}
