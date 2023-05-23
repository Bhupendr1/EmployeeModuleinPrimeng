import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatarialModule } from '../matarial/matarial.module';
import { BllProcessRoutingModule } from './bll-process-routing.module';
import { DdoForwardComponent } from './ddo-forward/ddo-forward.component';
import { BreadcumComponent } from './breadcum/breadcum.component';
import { TreasuryForwardComponent } from './treasury-forward/treasury-forward.component';
import { GroupAllowanceComponent } from './group-allowance/group-allowance.component';
import { GroupDeductionsComponent } from './group-deductions/group-deductions.component';


@NgModule({
  declarations: [
    DdoForwardComponent,
    BreadcumComponent,
    TreasuryForwardComponent,
    GroupAllowanceComponent,
    GroupDeductionsComponent
  ],
  imports: [
    CommonModule,
    BllProcessRoutingModule,
    MatarialModule
  ]
})
export class BllProcessModule { }
