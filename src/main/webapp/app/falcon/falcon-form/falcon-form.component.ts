import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormField } from '../form-field';
import { TextFormField } from '../text-form-field/text-form-field';

@Component({
  selector: 'jhi-falcon-form',
  templateUrl: './falcon-form.component.html',
  styleUrls: ['./falcon-form.component.scss'],
})
export class FalconFormComponent implements OnInit {
  @Input() formFieldList!: FormField[];
  form!: FormGroup;
  field3!: FormField;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.field3 = new TextFormField('email', { value: 'preencher' });

    const obj: { [key: string]: any } = {};
    this.formFieldList.forEach((formField: FormField) => {
      obj[formField.key] = [formField.value, formField.validatorOrOpts];
    });
    obj['email'] = [this.field3.value, this.field3.validatorOrOpts];
    this.form = this.fb.group(obj);
  }

  onSubmit(): void {
    console.warn(this.form.value);
  }
}
