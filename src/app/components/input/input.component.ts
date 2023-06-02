import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'input-overview',
  template: `
    <form>
      <mat-form-field class="example-form-field">
        <mat-label>Email</mat-label>
        <input matInput type="email" [formControl]="emailFormControl" [errorStateMatcher]="matcher" placeholder="e.g. john.decker@bleeker-street.com">
        <button *ngIf="emailFormControl.value" matSuffix mat-icon-button (click)="emailFormControl.setValue('')"><mat-icon>close</mat-icon></button>
        <mat-error *ngIf="emailFormControl.hasError('email') && !emailFormControl.hasError('required')">
          Please enter a valid email address
        </mat-error>
        <mat-error *ngIf="emailFormControl.hasError('required')">
          Email is <strong>required</strong>
        </mat-error>
      </mat-form-field>
    </form>
  `,
  styles: [
  ]
})
export class InputComponent {
  // value = "Clear me";
  emailFormControl = new FormControl("", [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
}

class MyErrorStateMatcher implements ErrorStateMatcher {
  constructor() {}
  isErrorState(control: FormControl<string | null> | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}