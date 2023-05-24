import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'chips-overview',
  template: `
    <p>
      chips works!
    </p>
  `,
  styles: [
  ]
})
export class ChipsComponent {}

interface ChipColor {
  name: string;
  color: ThemePalette;
  default?: boolean;
}

@Component({
  selector: 'chips-basic',
  template: `
    <!-- <mat-chip-listbox class="mat-mdc-chip-set-stacked">  add class to get stacked-->
    <mat-chip-listbox>
      <mat-chip-option *ngFor="let clr of availableColors" [color]="clr.color" [selected]="clr.default">{{ clr.name }}</mat-chip-option>
    </mat-chip-listbox>
  `,
  styles: [`
    .mat-mdc-chip-set-stacked.mat-mdc-chip-set {
      max-width: 4rem;
    }
  `]
})
export class ChipsBasic {
  availableColors: ChipColor[] = [
    {name: 'none', color: undefined, default: true},
    {name: 'Primary', color: 'primary'},
    {name: 'Accent', color: 'accent'},
    {name: 'Warn', color: 'warn'},
  ];
}

@Component({
  selector: 'chips-form-control',
  template: `
    <div class="example-button-container">
      <button mat-raised-button (click)="formControl.disable()">Disable form control</button>
      <button mat-raised-button (click)="formControl.enable()">Enable form control</button>
    </div>
    <p>
      <i>Enter video keywords</i>
    </p>
    <mat-form-field class="example-form-field">
      <mat-label>Video keywords</mat-label>
      <mat-chip-grid #chipGrid aria-label="Enter keywords" [formControl]="formControl" cdkDropList cdkDropListOrientation="horizontal" (cdkDropListDropped)="drop($event)">
        <mat-chip-row *ngFor="let keyword of keywords" (removed)="removeKeyword(keyword)" cdkDrag>
          {{keyword}}
          <button matChipRemove aria-label="'remove ' + keyword">
            <mat-icon>cancel</mat-icon>
          </button>
        </mat-chip-row>
      </mat-chip-grid>
      <input placeholder="New keyword..."
              [matChipInputFor]="chipGrid"
              (matChipInputTokenEnd)="add($event)"/>
    </mat-form-field>

    <p>
      <b>The following keywords are entered:</b> {{formControl.value}}
    </p>
  `,
  styles: [`
    .example-form-field {
      width: 100%;
    }

    .example-button-container > button {
      margin: 0 12px;
    }
  `]
})
export class ChipsFormControl {
  readonly keywords: string[] = ["Amy", "Erin", "Dior", "Ru"];
  formControl = new FormControl<string[]>([]);

  removeKeyword(k: string) {
    const ix = this.keywords.indexOf(k);
    if (ix >= 0) {
      this.keywords.splice(ix, 1);
    }
  }

  add(event: MatChipInputEvent) {
    const v = (event.value || "").trim();
    if (v) {
      this.keywords.push(v);
    }
    event.chipInput!.clear();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.keywords, event.previousIndex, event.currentIndex);
  }
}

@Component({
  selector: 'chips-drag-drop',
  template: `
    <p>
      chips works!
    </p>
  `,
  styles: [
  ]
})
export class ChipsDragDrop {}
