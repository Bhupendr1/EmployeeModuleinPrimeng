import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { _ServiceApi } from 'src/app/Services/service.service';
import { Router } from '@angular/router';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
interface Product {
  code?:number;
  ReqID?:string;
  Name?:string;
  FatherName?:string;
  MotherName?:string;
  Gender?:string;
  Dob?:string;
  SocialCategory?:string;
  MobileNo?:string;
  MaritalStatus?:string;
  SpouseName?:string;
  Disable?:string;
}

@Component({
  selector: 'app-employee-self-service',
  templateUrl: './employee-self-service.component.html',
  styleUrls: ['./employee-self-service.component.css']
})
export class EmployeeSelfServiceComponent  implements OnInit {
  abc: MenuItem[] = [{ icon: 'pi pi-home', routerLink: '/login/Authentication/Singin' },{label: 'Dashboard', routerLink: '/Dashboard/Dashboard/NewTheme'},{ label: 'Employee Self Service' }];

  city!: string;
  products: Product[] = [{
    code:1, ReqID: 'RESS00000061', Name: 	'Ajay', FatherName:'Partap',  MotherName: 	'Rakori',  Gender: 'Male',Dob: '13/03/1996', SocialCategory:'General',  MobileNo: 	'9875885855',  MaritalStatus: 'Single',SpouseName:'Neemadevi',Disable:'No'
  }];
  selectedFile: any = null;
  minDate!: Date;
  maxDate!: Date;
  Statedata: any = [];
  BankData: any = [];
  BankBranchData: any = [];
  updateBank !: FormGroup;
  empselfData: any = [];
  updateBankList: any = [];
  rid: any;
  ID: string = '';
  constructor(private formbuilder: FormBuilder, private http: HttpClient,private _Service:_ServiceApi,private primengConfig: PrimeNGConfig) { }
  ngOnInit(): void {
    this.updateBank = this.formbuilder.group({
      ACCOUNT_NO: [''],
      PAYEE_BANK_ID: [''],
      BANK_BRANCH_ID: [''],
      Enter_IFSC: [''],
      new_Account_No: [''],
    });

    //  localStorage.getItem(checker);
  }
  onFileSelected(event:any) {
    this.selectedFile = event.target.files[0] ?? null;
  }
  


}
