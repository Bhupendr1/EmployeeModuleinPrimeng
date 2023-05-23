import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatarialModule } from '../matarial/matarial.module';
import { EMPMasterRoutingModule } from './emp-master-routing.module';
import { PersonalDetailsVerifyComponent } from './personal-details-verify/personal-details-verify.component';
import { EmpBankVerifyComponent } from './emp-bank-verify/emp-bank-verify.component';


@NgModule({
  declarations: [
    PersonalDetailsVerifyComponent,
    EmpBankVerifyComponent
  ],
  imports: [
    CommonModule,
    EMPMasterRoutingModule,
    CommonModule,
    MatarialModule
  ]
})
export class EMPMasterModule { }
