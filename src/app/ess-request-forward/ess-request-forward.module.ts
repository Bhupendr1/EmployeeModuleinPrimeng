import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatarialModule } from '../matarial/matarial.module';
import { EssRequestForwardRoutingModule } from './ess-request-forward-routing.module';
import { EmployeeSelfServiceComponent } from './employee-self-service/employee-self-service.component';
import { EssOtherNumberUpdateComponent } from './ess-other-number-update/ess-other-number-update.component';
import { EssNomineeUpdateComponent } from './ess-nominee-update/ess-nominee-update.component';
import { EssEmpDateTypeComponent } from './ess-emp-date-type/ess-emp-date-type.component';
import { EssBankAccountChangeRequestComponent } from './ess-bank-account-change-request/ess-bank-account-change-request.component';


@NgModule({
  declarations: [
    EmployeeSelfServiceComponent,
    EssOtherNumberUpdateComponent,
    EssNomineeUpdateComponent,
    EssEmpDateTypeComponent,
    EssBankAccountChangeRequestComponent
  ],
  imports: [
    CommonModule,
    EssRequestForwardRoutingModule,
    MatarialModule
  ]
})
export class EssRequestForwardModule { }
