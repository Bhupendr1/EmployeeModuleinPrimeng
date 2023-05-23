import {NgModule} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {PanelMenuModule} from 'primeng/panelmenu';
// material moduel
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// ngprime module
import {CommonModule} from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {FieldsetModule} from 'primeng/fieldset';
import {CardModule} from 'primeng/card';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {InputTextModule} from 'primeng/inputtext';
import {SidebarModule} from 'primeng/sidebar';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule } from 'primeng/calendar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CheckboxModule} from 'primeng/checkbox';
import {AccordionModule } from 'primeng/accordion';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { ToastModule } from "primeng/toast";
import {TabMenuModule} from 'primeng/tabmenu';
import { SlideMenuModule } from 'primeng/slidemenu';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ProgressBarModule} from 'primeng/progressbar';
import {TableModule} from 'primeng/table';
import {PanelModule} from 'primeng/panel'
import {ConfirmationService, MessageService } from "primeng/api";
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {TabViewModule} from 'primeng/tabview';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {SliderModule} from 'primeng/slider';
import {DialogModule} from 'primeng/dialog';
import {MessageModule} from 'primeng/message';
import{ DividerModule } from 'primeng/divider';
import {MatTableModule} from '@angular/material/table';
import {DataViewModule} from 'primeng/dataview';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MenubarModule} from 'primeng/menubar';
import {AvatarModule} from 'primeng/avatar';
import { MatListModule } from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import{MatMenuModule} from '@angular/material/menu'
import {MatStepperModule} from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ScrollTopModule} from 'primeng/scrolltop';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { from } from 'rxjs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatTooltipModule,
    MatSidenavModule,
    ScrollTopModule,
    MatProgressBarModule,
    MatFormFieldModule,
    AvatarModule,
    MenubarModule,
    FormsModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatStepperModule,
    DataViewModule,
    MatNativeDateModule,
    PanelMenuModule,
    HttpClientModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatButtonToggleModule,MatAutocompleteModule,MatExpansionModule,MatDialogModule,MatDatepickerModule,MatSortModule,MatPaginatorModule,MatSelectModule,
    // matarial module
MatButtonModule,
MatTabsModule,
//ng prime moduel
   ButtonModule,
    FieldsetModule,
    CardModule,
    BreadcrumbModule,
    InputTextModule,
    SidebarModule,
    MultiSelectModule,
    DropdownModule,
    DialogModule,
    CalendarModule,
    MatIconModule,
    RadioButtonModule,
    CheckboxModule,
    AccordionModule,
    ConfirmDialogModule,
    SliderModule,
    ConfirmPopupModule,
    ToastModule,
    TabMenuModule,
    SlideMenuModule,
    ContextMenuModule,
    DividerModule,
    ProgressBarModule,
    TableModule,
    PanelModule,
    TabViewModule,
    MessageModule,
    InputTextareaModule,
    MatTableModule,
    MatSnackBarModule
//material module



    ],
    providers: [ConfirmationService, MessageService]
})
export class MatarialModule { }
