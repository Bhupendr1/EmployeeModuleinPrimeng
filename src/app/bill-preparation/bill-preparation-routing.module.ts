import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BulkAllowancesComponent } from './bulk-allowances/bulk-allowances.component';

const routes: Routes = [
  {
    path:'BulkAllowances' ,
    data: {
      breadcrumb: 'Germany'
    },
  
    component:BulkAllowancesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillPreparationRoutingModule { }
