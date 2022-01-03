import { CfwFormFielAttribute, CfwFormField } from '../cfw-form-field';
import { CfwTextFormFieldComponent } from './cfw-text-form-field.component';

export class CfwTextFormField extends CfwFormField {
  constructor(public key: string, public title: string, public options?: CfwFormFielAttribute) {
    super(CfwTextFormFieldComponent, key, title, options);
  }
}
