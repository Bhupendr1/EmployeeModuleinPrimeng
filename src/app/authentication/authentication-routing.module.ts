import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SinginComponent } from './singin/singin.component';
const routes: Routes = [
  {path:'Singin',component:  SinginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthenticationRoutingModule { }


