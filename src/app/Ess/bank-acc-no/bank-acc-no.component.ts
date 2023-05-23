import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { _ServiceApi } from 'src/app/Services/service.service';
import { Router } from '@angular/router';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
interface Product {
  code?:number;
  ReqID?:number;
  AccountNumber?:number;
  IFSCCode?:string;
  Status?:string;
}

@Component({
  selector: 'app-bank-acc-no',
  templateUrl: './bank-acc-no.component.html',
  styleUrls: ['./bank-acc-no.component.css']
})
export class BankAccNoComponent implements OnInit {
  abc: MenuItem[] = [{ icon: 'pi pi-home', routerLink: '/login/Authentication/Singin' },{label: 'Dashboard', routerLink: '/Dashboard/Dashboard/NewTheme'},{ label: 'Bank Account Change Request' }];

  products: Product[] = [{
    code:1, ReqID: 17, AccountNumber: 20121212650, IFSCCode: 'ICICI211511', Status:'Success'
  }];
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



}
