import { Component } from '@angular/core';

@Component({
  selector: 'sidenav-overview',
  templateUrl: './sidenav-overview.component.html',
  styles: [`
    .example-container {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: #eee;
    }
    #topmenu {
      position: relative;
      background-color: navy;
      color: white;
    }
    .example-drawer {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  `]
})
export class SidenavOverview { }
