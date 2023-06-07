import { Component } from '@angular/core';

interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'list-overview',
  template: `
    <mat-list>
      <div mat-subheader>Folders</div>
      <mat-list-item *ngFor="let f of folders">
        <mat-icon matListItemIcon>folder</mat-icon>
        <div matListItemTitle> {{f.name }} </div>
        <div matListItemLine> {{f.updated | date }} </div>
      </mat-list-item>
      <mat-divider></mat-divider>
      <mat-list-item *ngFor="let n of notes">
        <mat-icon matListItemIcon>note</mat-icon>
        <div matListItemTitle> {{n.name }} </div>
        <div matListItemLine> {{n.updated | date }} </div>
      </mat-list-item>
    </mat-list>
    <mat-selection-list #shoes>
      <mat-list-option *ngFor="let shoe of typesOfShoes">{{shoe}}</mat-list-option>
    </mat-selection-list>
    <p>Options selected: {{shoes.selectedOptions.selected.length}}</p>
  `,
  styles: [`
    .mat-mdc-list-item-icon {
      color: rgba(0, 0, 0, 0.54);
    }
  `]
})
export class ListComponent {
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];

  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];


}
