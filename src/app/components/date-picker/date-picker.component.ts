import { Component, Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { DateRange, MAT_DATE_RANGE_SELECTION_STRATEGY, MatDateRangeSelectionStrategy } from '@angular/material/datepicker';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Injectable()
export class SevenDayRangeSelectionStrategy<D> implements MatDateRangeSelectionStrategy<D> {
  constructor(private _dateAdapter: DateAdapter<D>) {}

  selectionFinished(date: D | null, _currentRange: DateRange<D>, _event: Event): DateRange<D> {
    return this._create7DayRange(date);
  }
  createPreview(activeDate: D | null, _currentRange: DateRange<D>, _event: Event): DateRange<D> {
    return this._create7DayRange(activeDate);
  }
  createDrag?(_dragOrigin: D, _originalRange: DateRange<D>, _newDate: D, _event: Event): DateRange<D> | null {
    return null;
  }

  private _create7DayRange(date: D | null): DateRange<D> {
    if (date) {
      const start = this._dateAdapter.addCalendarDays(date, -2);
      const end = this._dateAdapter.addCalendarDays(date, 4);
      return new DateRange<D>(start, end);
    }
    return new DateRange<D>(null, null);
  }
}

@Component({
  selector: 'date-picker-comparison',
  template: `
    <mat-form-field class="example-form-field" color="accent">
      <mat-label>First campaign</mat-label>
      <mat-date-range-input
          [formGroup]="campaign1"
          [rangePicker]="campaign1Picker"
          [comparisonStart]="campaign2.value.start"
          [comparisonEnd]="campaign2.value.end">
        <input matStartDate placeholder="Start date" formControlName="start">
        <input matEndDate placeholder="End date" formControlName="end">
      </mat-date-range-input>
      <mat-hint>MM/DD/YYYY &mdash; MM/DD/YYYY</mat-hint>
      <mat-datepicker-toggle matIconSuffix [for]="campaign1Picker"></mat-datepicker-toggle>
      <mat-date-range-picker #campaign1Picker></mat-date-range-picker>
    </mat-form-field>

    <mat-form-field class="example-form-field">
      <mat-label>Second campaign</mat-label>
      <mat-date-range-input
        [formGroup]="campaign2"
        [rangePicker]="campaign2Picker"
        [comparisonStart]="campaign1.value.start"
        [comparisonEnd]="campaign1.value.end">
        <input matStartDate placeholder="Start date" formControlName="start">
        <input matEndDate placeholder="End date" formControlName="end">
      </mat-date-range-input>
      <mat-datepicker-toggle matIconSuffix [for]="campaign2Picker"></mat-datepicker-toggle>
      <mat-hint>MM/DD/YYYY &mdash; MM/DD/YYYY</mat-hint>
      <mat-date-range-picker #campaign2Picker></mat-date-range-picker>
    </mat-form-field>

    <p>{{campaign1.value | json}}</p>
  `,
  styles: [ `.example-form-field { margin: 0 8px 16px 0; }` ],
  providers: [{provide: MAT_DATE_RANGE_SELECTION_STRATEGY, useClass: SevenDayRangeSelectionStrategy}]
})
export class DateRangePickerComparison {
  campaign1 = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 20)),
  });
  campaign2 = new FormGroup({
    start: new FormControl(new Date(year, month, 18)),
    end: new FormControl(new Date(year, month, 27)),
  });

}
