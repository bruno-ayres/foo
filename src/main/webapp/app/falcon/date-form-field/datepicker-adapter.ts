import { Injectable } from '@angular/core';
import { NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

/**
 * This Service handles how the date is represented in scripts i.e. ngModel.
 */
@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {
  readonly DELIMITER = '-';

  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      const date = value.split(this.DELIMITER);
      return {
        year: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        day: parseInt(date[2], 10),
      };
    }
    return null;
  }

  toModel(date: NgbDateStruct | null): string | null {
    return date ? String(date.year) + this.DELIMITER + String(date.month) + this.DELIMITER + String(date.day) : null;
  }
}

/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {
  constructor(private translateService: TranslateService) {
    super();
  }

  parse(value: string): NgbDateStruct | null {
    if (value) {
      const date = value.split('/');
      return {
        year: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        day: parseInt(date[2], 10),
      };
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    const currentLang = this.translateService.currentLang;
    if (currentLang === 'pt-br') {
      return date ? `${date.day}/${date.month}/${date.year}` : '';
    }
    return date ? `${date.month}/${date.day}/${date.year}` : '';
  }
}
