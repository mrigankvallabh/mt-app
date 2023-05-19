import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'bottom-sheet-overview',
  template: `
    <p>You have received a request from Matthew</p>
    <button mat-raised-button (click)="openBottomSheet()">Action</button>
  `,
  styles: [
  ]
})
export class BottomSheetOverview {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet() {
    this._bottomSheet.open(BottomSheetOverviewSheet);
  }
}

@Component({
  selector: 'bottom-sheet-overview-sheet',
  template: `
    <mat-nav-list>
      <a href="https://keep.google.com/" mat-list-item (click)="openLink($event)">
        <span matListItemTitle>Google Keep</span>
        <span matLine>Add to a note</span>
      </a>
      <a href="https://docs.google.com/" mat-list-item (click)="openLink($event)">
        <span matListItemTitle>Google Docs</span>
        <span matLine>Embed in a document</span>
      </a>
      <a href="https://plus.google.com/" mat-list-item (click)="openLink($event)">
        <span matListItemTitle>Google Plus</span>
        <span matLine>Share with your friends</span>
      </a>
      <a href="https://hangouts.google.com/" mat-list-item (click)="openLink($event)">
        <span matListItemTitle>Google Hangouts</span>
        <span matLine>Show to your coworkers</span>
      </a>
    </mat-nav-list>
  `,
})
export class BottomSheetOverviewSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}