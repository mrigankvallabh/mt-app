import { BooleanInput } from '@angular/cdk/coercion';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'text-form-field',
  template: `
    <mat-form-field appearance="fill">
      <mat-label>{{ label }}</mat-label>
      <input matInput [value]="value" [disabled]="disabled">
    </mat-form-field>
  `,
  styles: [`
    :host {
      display: inline-flex;
      margin-right: 1rem;
    }
  `]
})
export class TextFormFieldComponent {
  @Input() label: string = "Input";
  @Input() value: string = "";
  @Input() disabled: BooleanInput = false;
}
