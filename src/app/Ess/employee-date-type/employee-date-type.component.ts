import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { _ServiceApi } from 'src/app/Services/service.service';
import { Router } from '@angular/router';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
interface Product {
  code?:number;
  ReqID?:string;
  ServiceDateType?:string;
  ServiceDate?:string;

}

@Component({
  selector: 'app-employee-date-type',
  templateUrl: './employee-date-type.component.html',
  styleUrls: ['./employee-date-type.component.css'],
})
export class EmployeeDateTypeComponent implements OnInit {
  abc: MenuItem[] = [{ icon: 'pi pi-home', routerLink: '/login/Authentication/Singin' },{label: 'Dashboard', routerLink: '/Dashboard/Dashboard/NewTheme'},{ label: 'Employee Date Type' }];

  products: Product[] = [{
    code:1, ReqID: 'RESS00000061', ServiceDateType: 	'Date of Birth', ServiceDate: '05/12/2022'
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

  }
  onFileSelected(event:any) {
    this.selectedFile = event.target.files[0] ?? null;
  }
  


}
