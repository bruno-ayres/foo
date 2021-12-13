import { AbstractControlOptions, ValidatorFn } from '@angular/forms';
import { FormField } from '../form-field';
import { TextFormFieldComponent } from './text-form-field.component';

export class TextFormField extends FormField {
  constructor(
    public key: string,
    public options?: {
      value?: string;
      validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null;
    }
  ) {
    super(TextFormFieldComponent, key, options);
  }
}
