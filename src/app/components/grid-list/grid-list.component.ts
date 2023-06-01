import { Component } from '@angular/core';

interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'grid-list-overview',
  template: `
    <mat-grid-list cols="4" rowHeight="16rem" gutterSize="0.5rem">
      <mat-grid-tile *ngFor="let t of tiles" [colspan]="t.cols" [rowspan]="t.rows" [style.background]="t.color">
        {{ t.text }}
      </mat-grid-tile>
    </mat-grid-list>
  `,
  styles: [
  ]
})
export class GridListComponent {
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}
