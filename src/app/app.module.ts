import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StyleguideComponent } from './styleguide/styleguide.component';
import { MatarialModule } from './matarial/matarial.module';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { BreadcumComponent } from './breadcum/breadcum.component';
import { BllProcessModule } from './bll-process/bll-process.module';
import { EMPMasterModule } from './emp-master/emp-master.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { EssRequestForwardModule } from './ess-request-forward/ess-request-forward.module';
import { ESSModule } from './Ess/ess.module';
import { HeaderComponent } from './Included/header/header.component';
import { FooterComponent } from './Included/footer/footer.component';
import { AuthGuard } from './auth/auth.guard';
import { _ServiceApi } from 'src/app/Services/service.service';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout.component';
import { DashboardLayoutComponent } from './layouts/Dashboard-layout.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { InboxComponent } from './inbox/inbox.component';
import { RouterModule, ROUTES } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { DataTableComponent } from './data-table/data-table.component';
import { ToggleMenuComponent } from './Included/toggle-menu/toggle-menu.component';
import { SidemenuComponent } from './Included/collapse-sidemenu/sidemenu.component';
import { PensionApplicationModule } from './pension-application/pension-application.module';

@NgModule({
  declarations: [
    AppComponent,
    StyleguideComponent,
    BreadcumComponent,
    HeaderComponent,
    FooterComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    DashboardLayoutComponent,
    InboxComponent,
    FileUploadComponent,
    SidemenuComponent,
    DataTableComponent,
    ToggleMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatarialModule,
    HttpClientModule,
    BllProcessModule,
    EMPMasterModule,
    AuthenticationModule,
    EssRequestForwardModule,
    FormsModule,
    PensionApplicationModule,
    ESSModule,
    DashboardModule,
    ],
    providers:[DatePipe,_ServiceApi, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
