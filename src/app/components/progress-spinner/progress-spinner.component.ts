import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'progress-spinner-overview',
  template: `
    <mat-card class="example-card">
      <mat-card-content>
        <h2 class="example-h2">Progress spinner configuration</h2>

        <section class="example-section">
          <label class="example-margin">Color:</label>
          <mat-radio-group [(ngModel)]="color">
            <mat-radio-button class="example-margin" value="primary">Primary</mat-radio-button>
            <mat-radio-button class="example-margin" value="accent">Accent</mat-radio-button>
            <mat-radio-button class="example-margin" value="warn">Warn</mat-radio-button>
          </mat-radio-group>
        </section>

        <section class="example-section">
          <label class="example-margin">Mode:</label>
          <mat-radio-group [(ngModel)]="mode">
            <mat-radio-button class="example-margin" value="determinate">Determinate</mat-radio-button>
            <mat-radio-button class="example-margin" value="indeterminate">Indeterminate</mat-radio-button>
          </mat-radio-group>
        </section>

        <section class="example-section" *ngIf="mode === 'determinate'">
          <label class="example-margin">Progress:</label>
          <mat-slider class="example-margin"><input type="range" [(ngModel)]="value" matSliderThumb></mat-slider>
        </section>
      </mat-card-content>
    </mat-card>

    <mat-card class="example-card">
      <mat-card-content>
        <h2 class="example-h2">Result ({{ label === '' ? '...' : label }})</h2>

        <div>
          <mat-progress-spinner
              class="example-margin"
              [color]="color"
              [mode]="mode"
              [value]="value">
          </mat-progress-spinner>
          <div *ngIf="value" style="position:relative; top: -60px; left: 50px;">{{label}}</div>
        </div>
      </mat-card-content>
    </mat-card>
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

    .example-card {
      margin-bottom: 10px;
    }
  `]
})
export class ProgressSpinnerComponent {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 72;

  
  public get label() : string {
    return this.mode === "determinate" ? this.value + "%" : "";
  }
  
}
