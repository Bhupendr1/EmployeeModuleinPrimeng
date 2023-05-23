import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatarialModule } from '../matarial/matarial.module';
import { BillPreparationRoutingModule } from './bill-preparation-routing.module';
import { BreadcumComponent } from './breadcum/breadcum.component';
import { BulkAllowancesComponent } from './bulk-allowances/bulk-allowances.component';


@NgModule({
  declarations: [
    BreadcumComponent,
    BulkAllowancesComponent
  ],
  imports: [
    CommonModule,
    BillPreparationRoutingModule,
    MatarialModule
  ]
})
export class BillPreparationModule { }
