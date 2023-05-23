import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { MatarialModule } from '../matarial/matarial.module';
import { SinginComponent } from './singin/singin.component';

@NgModule({
  imports: [
    CommonModule,
    MatarialModule,
    AuthenticationRoutingModule
  ],
  declarations: [SinginComponent]
})
export class AuthenticationModule { }
