import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeSelfServiceComponent } from './employee-self-service/employee-self-service.component';
import { EssOtherNumberUpdateComponent } from './ess-other-number-update/ess-other-number-update.component';
import { EssNomineeUpdateComponent } from './ess-nominee-update/ess-nominee-update.component';
import { EssEmpDateTypeComponent } from './ess-emp-date-type/ess-emp-date-type.component';
import { EssBankAccountChangeRequestComponent } from './ess-bank-account-change-request/ess-bank-account-change-request.component';
const routes: Routes = [
  {
    path:'Ess-Personal',
    component:EmployeeSelfServiceComponent
  },
  {
    path:'Ess-Other-Number-Update',
    component:EssOtherNumberUpdateComponent
  },
  {
    path:'Ess-Nominee-Update',
    component:EssNomineeUpdateComponent
  },
  {
    path:'Ess-Emp-Date-Type',
    component:EssEmpDateTypeComponent
  }, {
    path:'Ess-BankAccount-ChangeRequest',
    component:EssBankAccountChangeRequestComponent
  },
  {
    path: '**',
    redirectTo: '/Ess-Personal',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EssRequestForwardRoutingModule { }
