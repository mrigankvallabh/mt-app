import { Component } from '@angular/core';

@Component({
  selector: 'menu-overview',
  template: `
    <button mat-icon-button color="primary" [matMenuTriggerFor]="menu">
      <mat-icon>more_vert</mat-icon>
    </button>
    <mat-menu #menu="matMenu">
      <button mat-menu-item>Item 1</button>
      <button mat-menu-item>Item 2</button>
    </mat-menu>
  `,
  styles: [
  ]
})
export class MenuComponent { }
