import { Component } from '@angular/core';

@Component({
  selector: 'radio-button-overview',
  template: `
    <label id="example-radio-group-label">Pick your favorite season</label>
    <mat-radio-group
      aria-labelledby="example-radio-group-label"
      class="example-radio-group"
      [(ngModel)]="favoriteSeason">
      <mat-radio-button labelPosition="after" class="example-radio-button" *ngFor="let season of seasons" [value]="season">
        {{season}}
      </mat-radio-button>
    </mat-radio-group>
    <div>Your favorite season is: {{favoriteSeason}}</div>
  `,
  styles: [
  ]
})
export class RadioButtonComponent {
  favoriteSeason!: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
}
