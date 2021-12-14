import { FormFielAttribute, FormField } from '../form-field';
import { TextAreaFormFieldComponent } from './text-area-form-field.component';

export interface TextAreaFormAttribute extends FormFielAttribute {
  rows?: number;
}

export class TextAreaFormField extends FormField {
  public rows: number;
  constructor(public key: string, public title: string, public options?: TextAreaFormAttribute) {
    super(TextAreaFormFieldComponent, key, title, options);

    this.rows = options?.rows === undefined ? 5 : options.rows;
  }
}
