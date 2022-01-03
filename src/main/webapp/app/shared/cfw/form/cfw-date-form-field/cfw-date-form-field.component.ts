import { Component } from '@angular/core';
import { NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { CfwFieldComponent } from '../cfw-form-field/cfw-form-field.component';
import { CustomAdapter, CustomDateParserFormatter } from './datepicker-adapter';

@Component({
  selector: 'cfw-date-form-field',
  templateUrl: './cfw-date-form-field.component.html',
  styleUrls: [],
  providers: [
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
  ],
})
export class CfwDateFormFieldComponent extends CfwFieldComponent {
  // implements OnInit {
  /* ngOnInit(): void {
    this.formControl.setValue(this.formControl.value);
  }*/
}
