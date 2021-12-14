import { Component, OnInit } from '@angular/core';
import { FieldComponent } from '../form-field/form-field.component';

@Component({
  selector: 'jhi-date-form-field',
  templateUrl: './date-form-field.component.html',
  styleUrls: [],
})
export class DateFormFieldComponent extends FieldComponent implements OnInit {
  ngOnInit(): void {
    this.formControl.setValue(this.formControl.value);
  }
}
