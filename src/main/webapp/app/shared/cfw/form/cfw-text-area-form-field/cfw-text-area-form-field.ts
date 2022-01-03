import { CfwFormFielAttribute, CfwFormField } from '../cfw-form-field';
import { CfwTextAreaFormFieldComponent } from './cfw-text-area-form-field.component';

export interface CfwTextAreaFormAttribute extends CfwFormFielAttribute {
  rows?: number;
}

export class CfwTextAreaFormField extends CfwFormField {
  public rows: number;
  constructor(public key: string, public title: string, public options?: CfwTextAreaFormAttribute) {
    super(CfwTextAreaFormFieldComponent, key, title, options);

    this.rows = options?.rows === undefined ? 5 : options.rows;
  }
}
