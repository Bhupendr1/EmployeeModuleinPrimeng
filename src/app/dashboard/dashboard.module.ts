import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatarialModule } from '../matarial/matarial.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DatatableComponent } from './datatable/datatable.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { UsernameComponent } from './username/username.component';
@NgModule({
  declarations: [DatatableComponent,NewThemeComponent,UsernameComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatarialModule
  ]
})
export class DashboardModule { }
