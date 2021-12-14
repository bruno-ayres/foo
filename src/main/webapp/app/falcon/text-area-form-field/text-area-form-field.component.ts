import { Component } from '@angular/core';
import { FieldComponent } from '../form-field/form-field.component';
import { TextAreaFormField } from './text-area-form-field';

@Component({
  selector: 'jhi-text-area-form-field',
  templateUrl: './text-area-form-field.component.html',
  styleUrls: [],
})
export class TextAreaFormFieldComponent extends FieldComponent {
  get textAreaFormField(): TextAreaFormField {
    return this.formField as TextAreaFormField;
  }
}
