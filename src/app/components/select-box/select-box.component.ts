import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'select-box-overview',
  template: `
    <mat-form-field>
      <mat-label>Toppings</mat-label>
      <mat-select [formControl]="toppings" multiple>
        <mat-select-trigger>
          {{toppings.value?.[0] || ''}}
          <span *ngIf="(toppings.value?.length || 0) > 1" class="example-additional-selection">
            (+{{(toppings.value?.length || 0) - 1}} {{toppings.value?.length === 2 ? 'other' : 'others'}})
          </span>
        </mat-select-trigger>
        <mat-option *ngFor="let topping of toppingList" [value]="topping">{{topping}}</mat-option>
      </mat-select>
    </mat-form-field>
    <mat-divider></mat-divider>
    <p><mat-checkbox [formControl]="disableSelect">Disable select</mat-checkbox></p>
    <h4>mat-select</h4>
    <mat-form-field>
      <mat-label>Choose an option</mat-label>
      <mat-select [disabled]="disableSelect.value">
        <mat-option value="option1">Option 1</mat-option>
        <mat-option value="option2" disabled>Option 2 (disabled)</mat-option>
        <mat-option value="option3">Option 3</mat-option>
      </mat-select>
    </mat-form-field>

    <h4>native html select</h4>
    <mat-form-field>
      <mat-label>Choose an option</mat-label>
      <select matNativeControl [disabled]="disableSelect.value">
        <option value="" selected></option>
        <option value="volvo">Volvo</option>
        <option value="saab" disabled>Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </mat-form-field>
  `,
  styles: [`
    .example-additional-selection {
      opacity: 0.75;
      font-size: 0.75em;
    }
  `]
})
export class SelectBoxComponent {
  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  disableSelect = new FormControl(false);
}
