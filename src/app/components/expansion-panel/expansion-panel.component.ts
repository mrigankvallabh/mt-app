import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'expansion-panel-overview',
  template: `
    <div class="example-action-buttons">
      <button mat-button (click)="accordion.openAll()">Expand All</button>
      <button mat-button (click)="accordion.closeAll()">Collapse All</button>
    </div>
    <mat-accordion class="example-headers-align" multi>
      <mat-expansion-panel [expanded]="step === 0" (opened)="setStep(0)">
        <mat-expansion-panel-header>
          <mat-panel-title>Personal data</mat-panel-title>
          <mat-panel-description>Type your name &amp; age<mat-icon>account_circle</mat-icon></mat-panel-description>
        </mat-expansion-panel-header>

        <mat-form-field>
          <mat-label>First name</mat-label>
          <input matInput>
        </mat-form-field>

        <mat-form-field>
          <mat-label>Age</mat-label>
          <input matInput type="number" min="1">
        </mat-form-field>
        <mat-action-row>
          <button mat-button color="primary" (click)="nextStep()">Next</button>
        </mat-action-row>
      </mat-expansion-panel>

      <mat-expansion-panel [expanded]="step === 1" (opened)="setStep(1)">
        <mat-expansion-panel-header>
          <mat-panel-title>Destination</mat-panel-title>
          <mat-panel-description>Type the country name<mat-icon>map</mat-icon></mat-panel-description>
        </mat-expansion-panel-header>

        <mat-form-field>
          <mat-label>Country</mat-label>
          <input matInput>
        </mat-form-field>
        <mat-action-row>
          <button mat-button color="accent" (click)="prevStep()">Previous</button>
          <button mat-button color="primary" (click)="nextStep()">Next</button>
        </mat-action-row>
      </mat-expansion-panel>

      <mat-expansion-panel [expanded]="step === 2" (opened)="setStep(2)">
        <mat-expansion-panel-header>
          <mat-panel-title>Day of the trip</mat-panel-title>
          <mat-panel-description>Inform the date you wish to travel<mat-icon>date_range</mat-icon></mat-panel-description>
        </mat-expansion-panel-header>

        <mat-form-field>
          <mat-label>Date</mat-label>
          <input matInput [matDatepicker]="picker" (focus)="picker.open()" readonly>
        </mat-form-field>
        <mat-datepicker #picker></mat-datepicker>
        <mat-action-row>
          <button mat-button color="accent" (click)="prevStep()">Previous</button>
        </mat-action-row>
      </mat-expansion-panel>
    </mat-accordion>
  `,
  styles: [`
    .example-action-buttons { padding-bottom: 20px; }

    .example-headers-align .mat-expansion-panel-header-description {
      justify-content: space-between;
      align-items: center;
    }

    .example-headers-align .mat-mdc-form-field + .mat-mdc-form-field { margin-left: 8px; }
  `]
})
export class ExpansionPanelOverview {
  step = 0;
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  setStep(ix = 0) { this.step = ix; }
  nextStep() { this.step++; }
  prevStep() { this.step--; }

}
