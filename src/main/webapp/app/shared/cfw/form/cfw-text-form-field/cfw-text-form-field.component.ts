import { Component } from '@angular/core';
import { CfwFieldComponent } from '../cfw-form-field/cfw-form-field.component';

@Component({
  selector: 'cfw-text-form-field',
  templateUrl: './cfw-text-form-field.component.html',
  styleUrls: ['./cfw-text-form-field.component.scss'],
})
export class CfwTextFormFieldComponent extends CfwFieldComponent {}
