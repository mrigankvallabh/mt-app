import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'autocomplete-auto-active-first-option',
  template: `
    <form class="example-form">
      <mat-form-field class="example-full-width">
        <mat-label>Number</mat-label>
        <input type="text" placeholder="Pick One" matInput [formControl]="myControl" [matAutocomplete]="auto">
        <mat-autocomplete autoActiveFirstOption #auto="matAutocomplete">
          <mat-option *ngFor="let optn of filteredOptions | async" [value]="optn">{{ optn }}</mat-option>
        </mat-autocomplete>
      </mat-form-field>
    </form>
  `,
  styles: [`
    .example-form {
      min-width: 150px;
      max-width: 500px;
      width: 100%;
    }

    .example-full-width {
      width: 100%;
    }
  `]
})
export class AutocompleteAutoActiveFirstOption implements OnInit {
  myControl = new FormControl("");
  options: string[] = ["One", "Two", "Three"];
  filteredOptions!: Observable<string[]>;

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map(v => this._filter(v || "")),
    );
  }

  private _filter(v: string): string[] {
    const filterValue = v.toLowerCase();
    return this.options.filter(optn => optn.toLowerCase().includes(filterValue));
  }
}

export interface User { name: string; }

@Component({
  selector: 'autocomplete-display',
  template: `
    <form class="example-form">
      <mat-form-field class="example-full-width">
        <mat-label>Assignee</mat-label>
        <input type="text" matInput [formControl]="myControl" [matAutocomplete]="auto">
        <mat-autocomplete #auto="matAutocomplete" [displayWith]="displayFn">
          <mat-option *ngFor="let optn of filteredOptions | async" [value]="optn">{{ optn.name }}</mat-option>
        </mat-autocomplete>
      </mat-form-field>
    </form>
  `,
  styles: [`
    .example-form {
      min-width: 150px;
      max-width: 500px;
      width: 100%;
    }

    .example-full-width {
      width: 100%;
    }
  `]
})
export class AutocompleteDisplay implements OnInit {
  myControl = new FormControl<string | User>("");
  options: User[] = [{name: "Mrigank"}, {name: "Vallabh"}, {name: "Singh"}];
  filteredOptions!: Observable<User[]>;

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map(v => {
        const name = typeof v === "string" ? v : v?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  private _filter(u: string): User[] {
    const filterValue = u.toLowerCase();
    return this.options.filter(optn => optn.name.toLowerCase().includes(filterValue));
  }

  displayFn(u: User): string {
    return u && u.name ? u.name : "";
  }
}

@Component({
  selector: 'autocomplete-filter',
  template: `
    <form class="example-form">
      <mat-form-field class="example-full-width">
        <mat-label>Number</mat-label>
        <input type="text" placeholder="Pick One" matInput [formControl]="myControl" [matAutocomplete]="auto">
        <mat-autocomplete #auto="matAutocomplete">
          <mat-option *ngFor="let optn of filteredOptions | async" [value]="optn">{{ optn }}</mat-option>
        </mat-autocomplete>
      </mat-form-field>
    </form>
  `,
  styles: [`
    .example-form {
      min-width: 150px;
      max-width: 500px;
      width: 100%;
    }

    .example-full-width {
      width: 100%;
    }
  `]
})
export class AutocompleteFilter implements OnInit {
  myControl = new FormControl("");
  options: string[] = ["One", "Two", "Three"];
  filteredOptions!: Observable<string[]>;

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map(v => this._filter(v || "")),
    );
  }

  private _filter(v: string): string[] {
    const filterValue = v.toLowerCase();
    return this.options.filter(optn => optn.toLowerCase().includes(filterValue));
  }
}

export interface StateGroup {
  letter: string;
  names: string[];
}

@Component({
  selector: 'autocomplete-optgroup',
  template: `
    <form [formGroup]="stateForm">
      <mat-form-field>
        <mat-label>States Group</mat-label>
        <input type="text" matInput formControlName="stateGroup" required [matAutocomplete]="autoGroup" />
        <mat-autocomplete #autoGroup="matAutocomplete">
          <mat-optgroup *ngFor="let grp of stateGroupOptions | async" [label]="grp.letter">
            <mat-option *ngFor="let nm of grp.names" [value]="nm">{{ nm }}</mat-option>
          </mat-optgroup>
        </mat-autocomplete>
      </mat-form-field>
    </form>
  `,
})
export class AutocompleteOptgroup implements OnInit {
  stateGroups: StateGroup[] = [
    {
      letter: 'A',
      names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas'],
    },
    {
      letter: 'C',
      names: ['California', 'Colorado', 'Connecticut'],
    },
    {
      letter: 'D',
      names: ['Delaware'],
    },
    {
      letter: 'F',
      names: ['Florida'],
    },
    {
      letter: 'G',
      names: ['Georgia'],
    },
    {
      letter: 'H',
      names: ['Hawaii'],
    },
    {
      letter: 'I',
      names: ['Idaho', 'Illinois', 'Indiana', 'Iowa'],
    },
    {
      letter: 'K',
      names: ['Kansas', 'Kentucky'],
    },
    {
      letter: 'L',
      names: ['Louisiana'],
    },
    {
      letter: 'M',
      names: [
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
      ],
    },
    {
      letter: 'N',
      names: [
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
      ],
    },
    {
      letter: 'O',
      names: ['Ohio', 'Oklahoma', 'Oregon'],
    },
    {
      letter: 'P',
      names: ['Pennsylvania'],
    },
    {
      letter: 'R',
      names: ['Rhode Island'],
    },
    {
      letter: 'S',
      names: ['South Carolina', 'South Dakota'],
    },
    {
      letter: 'T',
      names: ['Tennessee', 'Texas'],
    },
    {
      letter: 'U',
      names: ['Utah'],
    },
    {
      letter: 'V',
      names: ['Vermont', 'Virginia'],
    },
    {
      letter: 'W',
      names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
    },
  ];

  constructor(private _formBuilder: FormBuilder) {}
  
  stateForm = this._formBuilder.group({
    stateGroup: ""
  });

  stateGroupOptions!: Observable<StateGroup[]>;

  ngOnInit(): void {
      this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges.pipe(
        startWith(""),
        map(v => this._filterGroup(v || ""))
      );
  }

  private _filterGroup(v: string): StateGroup[] {
    if (v) {
      return this.stateGroups
        .map(g => ({letter: g.letter, names: this._filter(g.names, v)}) as StateGroup)
        .filter(g => g.names.length > 0);
    }
    return this.stateGroups;
  }

  private _filter(names: string[], value: string): string[] {
    const filterValue = value.toLowerCase();
    return names.filter(item => item.toLowerCase().includes(filterValue));
  }
}