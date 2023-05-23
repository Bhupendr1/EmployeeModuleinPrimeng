import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EssReqComponent } from './ess-req/ess-req.component';
import { BankAccNoComponent } from './bank-acc-no/bank-acc-no.component';
import { EmployeeDateTypeComponent } from './employee-date-type/employee-date-type.component';
import { EmployeeSelfServiceComponent } from './employee-self-service/employee-self-service.component';
import { EmplyeeNomineeUpdateComponent } from './emplyee-nominee-update/emplyee-nominee-update.component';
import { UpdateNumberComponent } from './update-number/update-number.component';
import { FamilyDetailsComponent } from './family-details/family-details.component';
import { ProgressComponent } from './progress/progress.component';
import { DocumentsUploadedComponent } from './documents-uploaded/documents-uploaded.component';

const routes: Routes = [
  

  {path:'Ess-Req',component:EssReqComponent},
  {path:'bank-acc-number',component:BankAccNoComponent},
  {path:'EmployeeDateType',component:EmployeeDateTypeComponent},
  {path:'employee-self-service',component:EmployeeSelfServiceComponent},
  {path:'employee-nominee-update',component:EmplyeeNomineeUpdateComponent},
  {path:'update-number',component:UpdateNumberComponent},
  {path:'family-details',component:FamilyDetailsComponent},
  {path:'DocumentsUploaded',component:DocumentsUploadedComponent},
  {path:'ProgressComponent',component:ProgressComponent},

  {
    path: '**',
    redirectTo: '/Ess-Req',
    pathMatch: 'full'
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ESSRoutingModule { }
