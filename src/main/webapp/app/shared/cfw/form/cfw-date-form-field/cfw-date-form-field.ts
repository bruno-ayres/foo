import { CfwFormFielAttribute, CfwFormField } from '../cfw-form-field';
import { CfwDateFormFieldComponent } from './cfw-date-form-field.component';

/* export interface TextFormAttribute extends FormFielAttribute {
}*/

export class CfwDateFormField extends CfwFormField {
  constructor(public key: string, public title: string, public options?: CfwFormFielAttribute) {
    super(CfwDateFormFieldComponent, key, title, options);
  }
}
