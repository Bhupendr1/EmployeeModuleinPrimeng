import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatatableComponent } from './datatable/datatable.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { UsernameComponent } from './username/username.component';

const routes: Routes = [
  {path:'username',component:UsernameComponent},
  {path:'Datatable',component:DatatableComponent},
  {path:'NewTheme',component:NewThemeComponent},
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
