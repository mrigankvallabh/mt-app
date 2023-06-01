import { BooleanInput } from '@angular/cdk/coercion';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

const countriesNotRequiringPostalCodes = ["HK"];

@Component({
  selector: 'form-field-overview',
  template: `
    <form [formGroup]="addressForm" (ngSubmit)="onSubmit()">
      <div class="row">
        <div class="col">
          <mat-form-field class="full-width">
            <mat-label>Address1</mat-label>
            <input type="text" matInput required formControlName="address1" #address1 [maxlength]="50">
            <mat-hint align="end">{{ address1.value.length }} / 50</mat-hint>
            <mat-error *ngIf="addressForm.controls['address1'].hasError('required')">
              Address1 is required!
            </mat-error>
          </mat-form-field>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <mat-form-field class="full-width">
            <mat-label>Address2</mat-label>
            <input type="text" matInput formControlName="address2" #address2 [maxlength]="50">
            <mat-hint align="end">{{ address2.value.length }} / 50</mat-hint>
          </mat-form-field>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <mat-form-field class="full-width">
            <mat-label>Address3</mat-label>
            <input type="text" matInput formControlName="address3" #address3 [maxlength]="50">
            <mat-hint align="end">{{ address3.value.length }} / 50</mat-hint>
          </mat-form-field>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <mat-form-field class="full-width">
            <mat-label>Address4</mat-label>
            <input type="text" matInput formControlName="address4" #address4 [maxlength]="50">
            <mat-hint align="end">{{ address4.value.length }} / 50</mat-hint>
          </mat-form-field>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <mat-form-field class="full-width">
            <mat-label>Country</mat-label>
            <mat-select formControlName="countryCode" required (selectionChange)="onSelectCountry()">
              <mat-option *ngFor="let country of countries" [value]="country.countryCode">
                [{{ country.countryCode }}] {{ country.countryName }}
              </mat-option>
            </mat-select>
            <mat-hint align="end">Select Country first before state</mat-hint>
            <mat-error *ngIf="addressForm.controls['countryCode'].hasError('required')">
              Country is required!
            </mat-error>
          </mat-form-field>
        </div>
        <div class="col">
          <mat-form-field class="full-width">
            <mat-label>State</mat-label>
            <mat-select formControlName="stateCode" [required]="isStateRequired">
              <mat-option *ngFor="let state of getCountryStates()" [value]="state.stateCode">
                [{{ state.stateCode }}] {{ state.stateName }}
              </mat-option>
            </mat-select>
            <mat-error *ngIf="addressForm.controls['stateCode'].hasError('required')">
              State is required!
            </mat-error>
          </mat-form-field>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <mat-form-field class="full-width">
            <mat-label>City</mat-label>
            <input type="text" matInput formControlName="city" [maxlength]="35" #city required>
            <mat-hint align="end">{{ city.value.length }} / 35</mat-hint>
            <mat-error *ngIf="addressForm.controls['city'].hasError('required')">
              City is required!
            </mat-error>
            <mat-error *ngIf="addressForm.controls['city'].hasError('maxlength')">
              Length Exceeded!
            </mat-error>
          </mat-form-field>
        </div>
        <div class="col">
          <mat-form-field class="full-width">
            <mat-label>Postal Code</mat-label>
            <input type="text" matInput formControlName="postalCode" [maxlength]="15" #postalCode [required]="isPostalCodeRequired">
            <mat-hint align="end">{{postalCode.value.length}} / 15</mat-hint>
            <mat-error *ngIf="addressForm.controls['postalCode'].hasError('required')">
                Postal Code is required!
            </mat-error>
          </mat-form-field>
        </div>
      </div>
      <button mat-raised-button color="primary" type="submit">Submit</button>
    </form>
  `,
  styles: [`
    form { margin: 0 auto; }

    .full-width { width: 100%; }

    .row {
      display: flex;
      flex-direction: row;
      margin-bottom: 1rem;
    }

    .col {
      flex: 1;
      margin-right: 1.25rem;
    }

    .col:last-child {
      margin-right: 0;
    }
  `]
})
export class FormFieldOverview {
  constructor(private _fb: FormBuilder) {}

  addressForm = this._fb.group({
    address1: [
      null,
      Validators.compose([
        Validators.required,
        Validators.maxLength(50)
      ])
    ],
    address2: [null, Validators.maxLength(50)],
    address3: [null, Validators.maxLength(50)],
    address4: [null, Validators.maxLength(50)],
    city: [
      null,
      Validators.compose([
        Validators.required,
        Validators.maxLength(35)
      ])
    ],
    stateCode: new FormControl({value: null, disabled: false }),
    postalCode: new FormControl({value: null, disabled: false }),
    countryCode: [
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(2)
      ])
    ],
  });

  countries = [
    { countryCode: "CN", countryName: "China" },
    { countryCode: "HK", countryName: "Hong Kong" },
    { countryCode: "ID", countryName: "Indonesia" },
    { countryCode: "IN", countryName: "India" },
    { countryCode: "VN", countryName: "Vietnam" },
  ];

  states = [
    { stateCode: "34", stateName: "Anhui", countryCode: "CN" },
    { stateCode: "11", stateName: "Beijing", countryCode: "CN" },
    { stateCode: "50", stateName: "Chongqing", countryCode: "CN" },
    { stateCode: "AC", stateName: "Aceh", countryCode: "ID" },
    { stateCode: "BA", stateName: "Bali", countryCode: "ID" },
    { stateCode: "AP", stateName: "Andhra Pradesh", countryCode: "IN" },
    { stateCode: "BR", stateName: "Bihar", countryCode: "IN" },
    { stateCode: "CT", stateName: "Chhattisgarh", countryCode: "IN" },
    { stateCode: "DL", stateName: "Delhi", countryCode: "IN" },
    { stateCode: "44", stateName: "An Giang", countryCode: "VN" },
    { stateCode: "43", stateName: "Ba Ria - Vung Tau", countryCode: "VN" },
  ];

  isStateRequired: boolean = this.addressForm.get('stateCode')?.enabled || true;
  isPostalCodeRequired: boolean = false;

  getCountryStates() {
    return this.states.filter(s => s.countryCode === this.addressForm.controls.countryCode.value);
  }

  onSelectCountry() {
    const stateCodeFormControl = this.addressForm.get('stateCode');
    const postalCodeFormControl = this.addressForm.get('postalCode');
    if (this.getCountryStates().length > 0) {
      stateCodeFormControl?.enable();
    } else {
      stateCodeFormControl?.disable();
    }
    this.isStateRequired = !!stateCodeFormControl?.enabled;
    if (this.isStateRequired) {
      stateCodeFormControl?.setValidators([Validators.required]);
    }
    const ix = countriesNotRequiringPostalCodes.indexOf(this.addressForm.controls.countryCode.value || "");
    if(ix === -1) {
      postalCodeFormControl?.enable();
    } else {
      postalCodeFormControl?.disable();
    }
    this.isPostalCodeRequired = !!postalCodeFormControl?.enabled;
    if (this.isPostalCodeRequired) {
      postalCodeFormControl?.setValidators([Validators.required]);
    }
  }

  onSubmit() {
    console.log(this.addressForm.value);
  }
}
