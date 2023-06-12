import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'paginator-overview',
  template: `
    <div class="demo-options">
      <mat-form-field>
        <mat-label>Length</mat-label>
        <input matInput placeholder="Length" type="number" [(ngModel)]="length">
      </mat-form-field>

      <mat-form-field>
        <mat-label>Page Size</mat-label>
        <input matInput placeholder="Page Size" type="number" [(ngModel)]="pageSize">
      </mat-form-field>

      <mat-form-field>
        <mat-label>Page Index</mat-label>
        <input matInput placeholder="Page Index" type="number" [(ngModel)]="pageIndex">
      </mat-form-field>

      <mat-form-field>
        <mat-label>Page Size Options</mat-label>
        <input matInput [ngModel]="pageSizeOptions" (ngModelChange)="setPageSizeOptions($event)"
               [ngModelOptions]="{updateOn: 'blur'}" placeholder="Ex. 10,25,50">
      </mat-form-field>

      <div class="demo-toggles">
        <mat-slide-toggle [(ngModel)]="hidePageSize">Hide page size</mat-slide-toggle>
        <mat-slide-toggle [(ngModel)]="showPageSizeOptions">Show multiple page size options</mat-slide-toggle>
        <mat-slide-toggle [(ngModel)]="showFirstLastButtons">Show first/last buttons</mat-slide-toggle>
        <mat-slide-toggle [(ngModel)]="disabled">Disabled</mat-slide-toggle>
      </div>
    </div>

    <mat-paginator #paginator
                   class="demo-paginator"
                   (page)="handlePageEvent($event)"
                   [length]="length"
                   [pageSize]="pageSize"
                   [disabled]="disabled"
                   [showFirstLastButtons]="showFirstLastButtons"
                   [pageSizeOptions]="showPageSizeOptions ? pageSizeOptions : []"
                   [hidePageSize]="hidePageSize"
                   [pageIndex]="pageIndex"
                   aria-label="Select page">
    </mat-paginator>

    <div class="demo-data">
      <div> Output event: {{(pageEvent | json) || 'No events dispatched yet'}} </div>
      <div> getNumberOfPages: {{paginator.getNumberOfPages()}} </div>
    </div>

  `,
  styles: [`
    .demo-toggles {
      display: flex;
      /* flex-direction: column; */
    }

    .demo-toggles * {
      margin-bottom: 1rem;
    }

    .demo-options {
      display: flex;
      flex-direction: column;
      width: 40rem;
    }

    .demo-data * {
      margin: 1rem 0;
    }

    .demo-paginator {
      width: 40rem;
    }
  `]
})
export class PaginatorComponent {
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 15];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent!: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(",").map(s => +s);
    }
  }


}
