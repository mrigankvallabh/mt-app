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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AutocompleteAutoActiveFirstOption, AutocompleteDisplay, AutocompleteFilter, AutocompleteOptgroup, AutocompleteOverview, AutocompletePlainInput } from './components/autocomplete/autocomplete.component';
import { BadgeOverview } from './components/badge/badge.component';
import { BottomSheetOverview, BottomSheetOverviewSheet } from './components/bottom-sheet/bottom-sheet.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonToggleAppearance, ButtonToggleExclusiveSelection, ButtonToggleFormSelection } from './components/button-toggle/button-toggle.component';
import { CardOverview } from './components/card/card.component';
import { CheckboxOverview } from './components/checkbox/checkbox.component';
import { ChipsBasic, ChipsDragDrop, ChipsFormControl } from './components/chips/chips.component';
import { DateRangePickerComparison } from './components/date-picker/date-picker.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { DividerOverview } from './components/divider/divider.component';
import { ExpansionPanelOverview } from './components/expansion-panel/expansion-panel.component';
import { FormFieldOverview } from './components/form-field/form-field.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';
import { MenuComponent } from './components/menu/menu.component';

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
    AutocompleteOptgroup,
    AutocompleteOverview,
    AutocompletePlainInput,
    BadgeOverview,
    BottomSheetOverview,
    BottomSheetOverviewSheet,
    ButtonComponent,
    ButtonToggleAppearance,
    ButtonToggleExclusiveSelection,
    ButtonToggleFormSelection,
    CardOverview,
    CheckboxOverview,
    ChipsBasic,
    ChipsFormControl,
    ChipsDragDrop,
    DateRangePickerComparison,
    DividerOverview,
    ExpansionPanelOverview,
    FormFieldOverview,
    GridListComponent,
    InputComponent,
    ListComponent,
    MenuComponent,
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
    FormsModule,
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
    DialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
