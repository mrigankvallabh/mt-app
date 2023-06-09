import { Component } from '@angular/core';

@Component({
  selector: 'divider-overview',
  template: `
    <mat-list>
      <mat-list-item>Item 1</mat-list-item>
      <mat-divider></mat-divider>
      <mat-list-item>Item 2</mat-list-item>
      <mat-divider></mat-divider>
      <mat-list-item>Item 3</mat-list-item>
    </mat-list>
  `,
  styles: []
})
export class DividerOverview { }
