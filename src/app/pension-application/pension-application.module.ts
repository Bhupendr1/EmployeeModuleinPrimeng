import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PensionApplicationRoutingModule } from './pension-application-routing.module';
import { DRMasterComponent } from './dr-master/dr-master.component';
import { ProfileComponent } from './profile/profile.component';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { LoanAdvanceComponent } from './loan-advance/loan-advance.component';
import { FamilyNomineeComponent } from './family-nominee/family-nominee.component';
import { DatePipe } from '@angular/common';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { DocumentsUploadedComponent } from './documents-uploaded/documents-uploaded.component';
import { ProgressComponent } from './progress/progress.component';
import { MatarialModule } from '../matarial/matarial.module';
@NgModule({
  declarations: [
    DRMasterComponent,
    ProfileComponent,
    StepOneComponent,
    StepTwoComponent,
    LoanAdvanceComponent,
    FamilyNomineeComponent,
    BankDetailsComponent,
    DocumentsUploadedComponent,
    ProgressComponent
  ],
  imports: [
    CommonModule,
    PensionApplicationRoutingModule,
    MatarialModule
  ],
  providers: [DatePipe],
})
export class PensionApplicationModule { }
