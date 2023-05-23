import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'checkbox-overview',
  template: `
    <mat-card>
      <mat-card-content>
        <h2 class="example-h2">Checkbox configuration</h2>
        <section class="example-section">
          <mat-checkbox class="example-margin" [(ngModel)]="checked">Checked</mat-checkbox>
          <mat-checkbox class="example-margin" [(ngModel)]="indeterminate">Indeterminate</mat-checkbox>
        </section>
        <section class="example-section">
          <label class="example-margin">Align:</label>
          <mat-radio-group [(ngModel)]="labelPosition">
            <mat-radio-button class="example-margin" value="after">After</mat-radio-button>
            <mat-radio-button class="example-margin" value="before">Before</mat-radio-button>
          </mat-radio-group>
        </section>
        <section class="example-section">
          <mat-checkbox class="example-margin" [(ngModel)]="disabled">Disabled</mat-checkbox>
        </section>
      </mat-card-content>
    </mat-card>
    <mat-card class="result">
      <mat-card-content>
        <h2 class="example-h2">Result</h2>
        <section class="example-section">
          <mat-checkbox
              class="example-margin"
              [(ngModel)]="checked"
              [(indeterminate)]="indeterminate"
              [labelPosition]="labelPosition"
              [disabled]="disabled">
            I'm a checkbox
          </mat-checkbox>
        </section>
      </mat-card-content>
    </mat-card>
    <mat-divider></mat-divider>
    <h2 class="example-h2">Checkbox with Reactive Forms</h2>
    <section [formGroup]="toppings">
      <h4>Select your toppings:</h4>
      <p><mat-checkbox formControlName="pepperoni">Pepperoni</mat-checkbox></p>
      <p><mat-checkbox formControlName="extracheese">Extra Cheese</mat-checkbox></p>
      <p><mat-checkbox formControlName="mushroom">Mushroom</mat-checkbox></p>
    </section>

    <section [formGroup]="toppings">
      <h4>You chose:</h4>
      {{toppings.value | json}}
    </section>

  `,
  styles: [`
    .example-h2 {
      margin: 10px;
    }

    .example-section {
      display: flex;
      align-content: center;
      align-items: center;
      height: 60px;
    }

    .example-margin {
      margin: 0 10px;
    }
  `]
})
export class CheckboxOverview {
  checked = false;
  indeterminate = false;
  labelPosition: "before" | "after" = "after";
  disabled = false;

  constructor(private _fb: FormBuilder) { }
  toppings = this._fb.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  })
}
