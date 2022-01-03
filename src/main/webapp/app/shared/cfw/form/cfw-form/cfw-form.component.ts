import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CfwFormField } from '../cfw-form-field';

@Component({
  selector: 'cfw-form',
  templateUrl: './cfw-form.component.html',
  styleUrls: ['./cfw-form.component.scss'],
})
export class CfwFormComponent implements OnInit {
  @Input() formFieldList!: CfwFormField[];
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  formField(key: string): CfwFormField | undefined {
    const field = this.formFieldList.find((f: CfwFormField) => f.key === key);
    return field;
  }

  formControl(formField: CfwFormField): FormControl {
    return this.form.controls[formField.key] as FormControl;
  }

  ngOnInit(): void {
    const obj: { [key: string]: any } = {};
    this.formFieldList.forEach((formField: CfwFormField) => {
      obj[formField.key] = [formField.value, formField.validatorOrOpts];
    });
    this.form = this.fb.group(obj);
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      console.warn(this.form.value);
    }
  }
}
