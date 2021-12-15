import { Component } from '@angular/core';
import { NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { FieldComponent } from '../form-field/form-field.component';
import { CustomAdapter, CustomDateParserFormatter } from './datepicker-adapter';

@Component({
  selector: 'jhi-date-form-field',
  templateUrl: './date-form-field.component.html',
  styleUrls: [],
  providers: [
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
  ],
})
export class DateFormFieldComponent extends FieldComponent {
  // implements OnInit {
  /*ngOnInit(): void {
    this.formControl.setValue(this.formControl.value);
  }*/
}
