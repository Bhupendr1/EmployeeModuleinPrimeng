import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentsUploadedComponent } from './documents-uploaded/documents-uploaded.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { DRMasterComponent } from './dr-master/dr-master.component';
import { FamilyNomineeComponent } from './family-nominee/family-nominee.component';
import { LoanAdvanceComponent } from './loan-advance/loan-advance.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:'DRMaster',
    component:DRMasterComponent
  },
  {
    path:'Profile',
    component:ProfileComponent
  },
  {
    path:'LoanAndAdvance',
    component:LoanAdvanceComponent
  },
  {
    path:'FamilyNominee',
    component:FamilyNomineeComponent
  },
  {
    path:'BankDetails',
    component:BankDetailsComponent
  },
  {
    path:'DocumentsUploaded',
    component:DocumentsUploadedComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PensionApplicationRoutingModule { }
