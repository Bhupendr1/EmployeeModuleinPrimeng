import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DdoForwardComponent } from './ddo-forward/ddo-forward.component';
import { TreasuryForwardComponent } from './treasury-forward/treasury-forward.component';
import { GroupAllowanceComponent } from './group-allowance/group-allowance.component';
import { GroupDeductionsComponent } from './group-deductions/group-deductions.component';


const routes: Routes = [
  {path:'DdoForward', component:DdoForwardComponent},
  {path:'Treasury-Forward', component:TreasuryForwardComponent}, 
  {path:'GroupAllowance', component:GroupAllowanceComponent},
  {path:'GroupDeductions', component:GroupDeductionsComponent},
  {
    path: '',
    redirectTo: 'BllProcess',
    pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BllProcessRoutingModule { }

