import { Component } from '@angular/core';

@Component({
  selector: 'card-overview',
  template: `
    <mat-card class="example-card">
      <mat-card-header>
        <mat-card-title-group>
          <img mat-card-avatar class="example-header-image" />
          <mat-card-title>Shiba Inu</mat-card-title>
          <mat-card-subtitle>Dog Breed</mat-card-subtitle>
        </mat-card-title-group>
      </mat-card-header>
      <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
      <mat-card-content>
        <p>
          The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
          A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
          bred for hunting.
        </p>
      </mat-card-content>
      <mat-card-actions align="end">
        <button mat-button>LIKE</button>
        <button mat-button>SHARE</button>
      </mat-card-actions>
      <mat-card-footer>
        <mat-progress-bar mode="indeterminate"></mat-progress-bar>
      </mat-card-footer>
    </mat-card>
  `,
  styles: [`
    .example-card {
      max-width: 400px;
    }
    .example-header-image {
      background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
      background-size: cover;
    }
  `]
})
export class CardOverview { }
