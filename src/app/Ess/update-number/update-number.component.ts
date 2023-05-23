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
  Reason?:string;
  Status?:string;
}
@Component({
  selector: 'app-update-number',
  templateUrl: './update-number.component.html',
  styleUrls: ['./update-number.component.css']
})
export class UpdateNumberComponent  implements OnInit {
  abc: MenuItem[] = [{ icon: 'pi pi-home', routerLink: '/Styleguide' },{label: 'Dashboard', routerLink: '/Dashboard/Dashboard/NewTheme'},{label: 'Inbox', routerLink: '/Home/inbox'},{ label: 'Update Number' }];

  products: Product[] = [{
    code:1, ReqID: 'RESS00000061', Name: 	'Ajay Raj', Reason:'Non Plan',  Status: 	'Pending'
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
