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
    <mat-divider></mat-divider>
    <mat-selection-list #shoesMulti>
      <mat-list-option *ngFor="let shoe of typesOfShoes">{{shoe}}</mat-list-option>
    </mat-selection-list>
    <p>Options selected: {{shoesMulti.selectedOptions.selected.length}}</p>
    <mat-divider></mat-divider>
    <mat-selection-list #shoesSingle [multiple]="false">
      <mat-list-option *ngFor="let shoe of typesOfShoes" [value]="shoe">{{shoe}}</mat-list-option>
    </mat-selection-list>
    <p>Option selected: {{shoesSingle.selectedOptions.hasValue() ? shoesSingle.selectedOptions.selected[0].value : 'None'}}</p>
    <mat-divider></mat-divider>
    <h3>Single line lists</h3>
    <mat-list>
      <mat-list-item>
        <span matListItemTitle>This is the title</span>
      </mat-list-item>
      <mat-list-item>Also the title</mat-list-item>
    </mat-list>

    <h3>Two line lists</h3>
    <mat-list>
      <mat-list-item>
        <span matListItemTitle>Title</span>
        <span matListItemLine>Second line</span>
      </mat-list-item>
      <mat-list-item>
        <span matListItemTitle>Title</span>
        <span>Second line</span>
      </mat-list-item>
      <mat-list-item>
        <span matListItemTitle>Title</span>
        Second line
      </mat-list-item>
    </mat-list>

    <h3>Three line lists</h3>
    <mat-list>
      <mat-list-item>
        <span matListItemTitle>Title</span>
        <span matListItemLine>Second line</span>
        <span matListItemLine>Third line</span>
      </mat-list-item>
      <mat-list-item>
        <span matListItemTitle>Title</span>
        <span matListItemLine>Second line. This line will truncate.</span>
        <span>Third line</span>
      </mat-list-item>
      <mat-list-item>
        <span matListItemTitle>Title</span>
        <span matListItemLine>Second line. This line will truncate.</span>
        Third line
      </mat-list-item>
    </mat-list>
    <h3>Three line list with secondary text wrapping</h3>
    <mat-list>
      <mat-list-item lines="3">
        <span matListItemTitle>Title</span>
        <span>
          Secondary line that will wrap because the list lines is explicitly set to 3 lines. Text
          inside of a <code>matListItemTitle</code> or <code>matListItemLine</code> will never wrap.
        </span>
      </mat-list-item>
      <mat-list-item lines="3">
        <span matListItemTitle>Title</span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est
      </mat-list-item>
    </mat-list>
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
