import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'button-toggle-appearance',
  template: `
    <p>
      Default appearance:
      <mat-button-toggle-group name="fontStyle" aria-label="Font Style">
        <mat-button-toggle value="bold">Bold</mat-button-toggle>
        <mat-button-toggle value="italic">Italic</mat-button-toggle>
        <mat-button-toggle value="underline">Underline</mat-button-toggle>
      </mat-button-toggle-group>
    </p>

    <p>
      Legacy appearance:
      <mat-button-toggle-group appearance="legacy" name="fontStyle" aria-label="Font Style">
        <mat-button-toggle value="bold">Bold</mat-button-toggle>
        <mat-button-toggle value="italic">Italic</mat-button-toggle>
        <mat-button-toggle value="underline">Underline</mat-button-toggle>
      </mat-button-toggle-group>
    </p>

  `,
  styles: [`
    mat-button-toggle-group {
      margin-left: 12px;
    }
  `]
})
export class ButtonToggleAppearance { }

@Component({
  selector: 'button-toggle-exclusive-selection',
  template: `
    <mat-button-toggle-group #group="matButtonToggleGroup">
      <mat-button-toggle value="left" aria-label="Text align left">
        <mat-icon>format_align_left</mat-icon>
      </mat-button-toggle>
      <mat-button-toggle value="center" aria-label="Text align center">
        <mat-icon>format_align_center</mat-icon>
      </mat-button-toggle>
      <mat-button-toggle value="right" aria-label="Text align right">
        <mat-icon>format_align_right</mat-icon>
      </mat-button-toggle>
      <mat-button-toggle value="justify" aria-label="Text align justify">
        <mat-icon>format_align_justify</mat-icon>
      </mat-button-toggle>
    </mat-button-toggle-group>
    <div class="example-selected-value">Selected value: {{group.value}}</div>

  `,
  styles: [`
    .example-selected-value {
      margin: 16px 0;
    }
  `]
})
export class ButtonToggleExclusiveSelection { }

@Component({
  selector: 'button-toggle-form-selection',
  template: `
    <section>
      <h4>Button Toggle inside of a Template-driven form (Single Selection)</h4>
      <mat-button-toggle-group [(ngModel)]="fontStyle" aria-label="Font Style">
        <mat-button-toggle value="bold">Bold</mat-button-toggle>
        <mat-button-toggle value="italic">Italic</mat-button-toggle>
        <mat-button-toggle value="underline">Underline</mat-button-toggle>
      </mat-button-toggle-group>
      <p>Chosen value is {{fontStyle | json}}</p>
    </section>
    <section>
      <h4>Button Toggle inside of a Reactive form (Multiple Selection)</h4>
      <mat-button-toggle-group [formControl]="fontStyleControl" aria-label="Font Style" multiple>
        <mat-button-toggle value="bold">Bold</mat-button-toggle>
        <mat-button-toggle value="italic">Italic</mat-button-toggle>
        <mat-button-toggle value="underline">Underline</mat-button-toggle>
      </mat-button-toggle-group>
      <p>Chosen value is {{fontStyleControl.value | json}}</p>
    </section>
  `,
  styles: []
})
export class ButtonToggleFormSelection {
  fontStyleControl = new FormControl<string[]>([]);
  fontStyle?: string[];
}