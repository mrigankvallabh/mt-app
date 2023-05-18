import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { NgAddressFormComponent } from './ng-address-form/ng-address-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { NgNavigationComponent } from './ng-navigation/ng-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgTableComponent } from './ng-table/ng-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NgDashboardComponent } from './ng-dashboard/ng-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { NgTreeComponent } from './ng-tree/ng-tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { NgDragDropComponent } from './ng-drag-drop/ng-drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ExampleTelInput, TelFormFieldComponent } from './components/tel-form-field/tel-form-field.component';
import { TextFormFieldComponent } from './components/text-form-field/text-form-field.component';
import { AutocompleteAutoActiveFirstOption, AutocompleteDisplay, AutocompleteFilter, AutocompleteOptgroup } from './components/autocomplete/autocomplete.component';

@NgModule({
  declarations: [
    AppComponent,
    NgAddressFormComponent,
    NgNavigationComponent,
    NgTableComponent,
    NgDashboardComponent,
    NgTreeComponent,
    NgDragDropComponent,
    TelFormFieldComponent,
    ExampleTelInput,
    TextFormFieldComponent,
    AutocompleteAutoActiveFirstOption,
    AutocompleteDisplay,
    AutocompleteFilter,
    AutocompleteOptgroup
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    MatTreeModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
