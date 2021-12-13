import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/auth/account.model';
import { FormField } from 'app/falcon/form-field';
import { TextFormField } from 'app/falcon/text-form-field/text-form-field';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  account: Account | null = null;
  formFieldList: FormField[];
  field1!: TextFormField;
  field2!: TextFormField;

  private readonly destroy$ = new Subject<void>();

  constructor(private accountService: AccountService, private router: Router) {
    this.field1 = new TextFormField('firstName', { value: 'aaa', validatorOrOpts: Validators.required });
    this.field2 = new TextFormField('lastName', { value: 'galo', validatorOrOpts: Validators.required });

    this.formFieldList = [this.field1, this.field2];
  }

  ngOnInit(): void {
    this.accountService
      .getAuthenticationState()
      .pipe(takeUntil(this.destroy$))
      .subscribe(account => (this.account = account));
  }

  login(): void {
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  showForm(form: FormGroup): void {
    console.warn(form.value);
    form.controls['firstName'].setValue('super teste');
  }
}
