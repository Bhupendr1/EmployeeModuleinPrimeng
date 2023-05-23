import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonalDetailsVerifyComponent } from './personal-details-verify/personal-details-verify.component';
import { EmpBankVerifyComponent } from './emp-bank-verify/emp-bank-verify.component';

const routes: Routes = [
  {path:'PersonalDetailsVerify', component:PersonalDetailsVerifyComponent},
  {path:'EmpBankVerify', component:EmpBankVerifyComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EMPMasterRoutingModule { }
