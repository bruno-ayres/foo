import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'jhi-error-message-form-field',
  templateUrl: './error-message-form-field.component.html',
  styleUrls: [],
})
export class ErrorMessageFormFieldComponent {
  @Input() control!: FormControl;
}
