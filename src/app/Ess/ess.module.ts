import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ESSRoutingModule } from './ess-routing.module';
import{EssReqComponent} from './ess-req/ess-req.component'
import { MatarialModule } from '../matarial/matarial.module';
import { BankAccNoComponent } from './bank-acc-no/bank-acc-no.component';
import { EmployeeDateTypeComponent } from './employee-date-type/employee-date-type.component';
import { EmployeeSelfServiceComponent } from './employee-self-service/employee-self-service.component';
import { EmplyeeNomineeUpdateComponent } from './emplyee-nominee-update/emplyee-nominee-update.component';
import { UpdateNumberComponent } from './update-number/update-number.component';
import { FamilyDetailsComponent } from './family-details/family-details.component';

@NgModule({
  declarations: [
    EssReqComponent,
    BankAccNoComponent,
    EmployeeSelfServiceComponent,
    EmployeeDateTypeComponent,
    EmplyeeNomineeUpdateComponent,
    UpdateNumberComponent,
    FamilyDetailsComponent
  ],
  imports: [
    CommonModule,
     MatarialModule,
     ESSRoutingModule,
  ],

})
export class ESSModule { }
