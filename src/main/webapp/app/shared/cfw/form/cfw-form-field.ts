import { Type } from '@angular/core';
import { AbstractControlOptions, ValidatorFn } from '@angular/forms';

export interface CfwFormFielAttribute {
  value?: any;
  validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null;
}

export class CfwFormField {
  public value: any;
  public validatorOrOpts: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null;
  constructor(public component: Type<any>, public key: string, public title: string, public options?: CfwFormFielAttribute) {
    this.value = options?.value ?? '';
    this.validatorOrOpts = options?.validatorOrOpts ?? null;
  }
}
