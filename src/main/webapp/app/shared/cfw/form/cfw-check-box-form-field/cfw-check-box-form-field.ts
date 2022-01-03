import { CfwFormFielAttribute, CfwFormField } from '../cfw-form-field';
import { CfwCheckBoxFormFieldComponent } from './cfw-check-box-form-field.component';

export class CfwCheckBoxFormField extends CfwFormField {
  constructor(public key: string, public title: string, public options?: CfwFormFielAttribute) {
    super(CfwCheckBoxFormFieldComponent, key, title, options);
    this.value = options?.value ?? false;
  }
}
