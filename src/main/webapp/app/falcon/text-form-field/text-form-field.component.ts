import { Component } from '@angular/core';
import { FieldComponent } from '../form-field/form-field.component';

@Component({
  selector: 'jhi-text-form-field',
  templateUrl: './text-form-field.component.html',
  styleUrls: ['./text-form-field.component.scss'],
})
export class TextFormFieldComponent extends FieldComponent {}
