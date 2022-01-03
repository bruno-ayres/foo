import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, finalize, switchMap, takeUntil, tap } from 'rxjs/operators';

import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/auth/account.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CfwTextFormField } from 'app/shared/cfw/form/cfw-text-form-field/cfw-text-form-field';
import { CfwFormField } from 'app/shared/cfw/form/cfw-form-field';
import { CfwCheckBoxFormField } from 'app/shared/cfw/form/cfw-check-box-form-field/cfw-check-box-form-field';
import { CfwTextAreaFormField } from 'app/shared/cfw/form/cfw-text-area-form-field/cfw-text-area-form-field';
import { CfwDateFormField } from 'app/shared/cfw/form/cfw-date-form-field/cfw-date-form-field';

@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  account: Account | null = null;
  searchMoviesCtrl = new FormControl();
  filteredMovies: any;
  isLoading = false;
  errorMsg!: string;
  minLengthTerm = 3;
  selectedMovie: any = '';
  cfwFormFieldList!: CfwFormField[];

  private readonly destroy$ = new Subject<void>();

  constructor(private accountService: AccountService, private router: Router, private http: HttpClient, private fb: FormBuilder) {
    this.cfwFormFieldList = [
      new CfwTextFormField('firstName', 'home.subtitle', { validatorOrOpts: [Validators.required] }),
      new CfwCheckBoxFormField('remindMe', 'home.subtitle'),
      new CfwTextAreaFormField('description', 'home.subtitle', { rows: 2 }),
      new CfwDateFormField('startDate', 'home.subtitle', { value: '2021-12-31T03:00:00.000Z', validatorOrOpts: [Validators.required] }),
    ];
  }

  ngOnInit(): void {
    this.accountService
      .getAuthenticationState()
      .pipe(takeUntil(this.destroy$))
      .subscribe(account => (this.account = account));

    this.searchMoviesCtrl.valueChanges
      .pipe(
        filter((res: string) => res.length >= this.minLengthTerm),
        distinctUntilChanged(),
        debounceTime(1000),
        tap(() => {
          this.errorMsg = '';
          this.filteredMovies = [];
          this.isLoading = true;
        }),
        switchMap(value =>
          this.http.get(`http://www.omdbapi.com/?s=${value}&apikey=a3585175`).pipe(
            finalize(() => {
              this.isLoading = false;
            })
          )
        )
      )
      .subscribe((data: any) => {
        if (data['Search'] === undefined) {
          this.errorMsg = data['Error'];
          this.filteredMovies = [];
        } else {
          this.errorMsg = '';
          this.filteredMovies = data['Search'];
        }
        console.warn(this.filteredMovies);
      });
  }

  onSelected(): void {
    console.warn(this.selectedMovie);
    // this.selectedMovie = this.selectedMovie;
  }

  displayWith(value: any): string {
    if (value['Title'] === undefined) {
      return '';
    }
    return value.Title as string;
  }

  clearSelection(): void {
    this.selectedMovie = '';
    this.filteredMovies = [];
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
