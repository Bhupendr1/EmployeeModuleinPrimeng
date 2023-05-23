import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StyleguideComponent } from './styleguide/styleguide.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout.component';
import { DashboardLayoutComponent } from './layouts/Dashboard-layout.component';
import { InboxComponent } from './inbox/inbox.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { DataTableComponent } from './data-table/data-table.component';
const routes: Routes = [
  {
    path: 'Home',
    component: HomeLayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'DataTable',
        component: DataTableComponent,
      },
      {
        path: 'Styleguide',
        component: StyleguideComponent,
      },
      {
        path: 'FileUploadComponent',
        component: FileUploadComponent,
      },
      {
        path: 'inbox',
        component: InboxComponent,
      },
      {
        path: 'BillPreparation',
        loadChildren: () => import('./bill-preparation/bill-preparation.module').then(m => m.BillPreparationModule),
     
      },
      {
        path: 'pension',
        loadChildren: () => import('./pension-application/pension-application.module').then(m => m.PensionApplicationModule),
      },
      {
        path: 'Bill-process',
        loadChildren: () => import('./bll-process/bll-process.module').then(m => m.BllProcessModule),
    
      },
      {
        path: 'EMPMaster',
        loadChildren: () => import('./emp-master/emp-master.module').then(m => m.EMPMasterModule),
    
      },
      {
        path: 'Ess',
        loadChildren: () => import('./Ess/ess-routing.module').then(m => m.ESSRoutingModule),
      },
      {
        path: 'EssRequestForward',
        loadChildren: () => import('./ess-request-forward/ess-request-forward.module').then(m => m.EssRequestForwardModule)
      },
    ]
    
  },
  {
    path: 'login',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'Authentication',
        loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule),
     
    }
    ]
  },
  {
    path: 'Dashboard',
    component: DashboardLayoutComponent,
    children: [
      {
        path:'D',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/Dashboard/D/NewTheme',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

