import { Type } from '@angular/core';
import { AbstractControlOptions, AsyncValidatorFn, ValidatorFn } from '@angular/forms';

export class FormField {
  public value: string;
  public validatorOrOpts: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null;
  constructor(
    public component: Type<any>,
    public key: string,
    public options?: {
      value?: string;
      validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null;
    }
  ) {
    this.value = options?.value ?? '';
    this.validatorOrOpts = options?.validatorOrOpts ?? null;
  }
}
