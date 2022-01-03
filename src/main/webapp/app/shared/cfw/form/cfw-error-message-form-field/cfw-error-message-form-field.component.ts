import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cfw-error-message-form-field',
  templateUrl: './cfw-error-message-form-field.component.html',
  styleUrls: ['./cfw-error-message-form-field.component.scss'],
})
export class CfwErrorMessageFormFieldComponent {
  @Input() control!: FormControl;
}
