// import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MenuItem, Message, MessageService, PrimeNGConfig, SelectItem } from 'primeng/api';
import {_ServiceApi} from 'src/app/Services/service.service';

interface City {
  name: string,
  code: string
}


@Component({
  selector: 'app-ddo-forward',
  templateUrl: './ddo-forward.component.html',
  styleUrls: ['./ddo-forward.component.css'],
  providers:[MessageService]
})

export class DdoForwardComponent implements OnInit {

  ddoFrwrdForm!:FormGroup

  empBillData:any;
  abc: MenuItem[] = [];
  home!: MenuItem;
  first = 0;
  rows = 5;
  rid: any;

  isShowTbl=false;
  showHideTxt=false;

  constructor(private formbuilder: FormBuilder,private MessageService:MessageService,private apiservice:_ServiceApi){
  }

  ngOnInit() {
    this.ddoFrwrdForm = this.formbuilder.group({
      ddlMonth:['',Validators.required],
      ddlYear:['',Validators.required],
      ddlBillType:['',Validators.required],
      ddlBillName:['',Validators.required],
      ddlBillNo:['',Validators.required],
      chckBx:[''],
    });
    this.abc = [
      { label: 'Computer' },
      { label: 'Notebook' },
      { label: 'Bill Status' }
    ];
    this.home = { icon: 'pi pi-home' };
  }
   
  months: any = [
    { name: 'January' },
    { name: 'February' },
    { name: 'March' },
    { name: 'April' },
    { name: 'May' },
  ];

  years: any = [
    { name: '2022' },
    { name: '2021' },
    { name: '2020' },
    { name: '2019' },
    { name: '2018' },
  ];

  billType: any = [
    { name: 'Salary-1' },
    { name: 'Salary-2' },
    { name: 'Salary-3' },
    { name: 'Salary-4' },
    { name: 'Salary-5' },
  ];

  billName: any = [
    { name: 'Bill-1' },
    { name: 'Bill-2' },
    { name: 'Bill-3' },
    { name: 'Bill-4' },
    { name: 'Bill-5' },
  ];

  billNo: any = [
    { name: 'Bill-No-1' },
    { name: 'Bill-No-2' },
    { name: 'Bill-No-3' },
    { name: 'Bill-No-4' },
    { name: 'Bill-No-5' },
  ];

 
  getDetail(){
    this.isShowTbl=true;
  }

  showHide(){
    if(this.ddoFrwrdForm.controls["chckBx"].value==true){
      this.showHideTxt=true;
    }else{
      this.showHideTxt=false;
    }
  }

  onSubmit() {
    if (this.ddoFrwrdForm.valid){
    let data=  {
      "month": this.ddoFrwrdForm.controls["ddlMonth"].value,
      "year": this.ddoFrwrdForm.controls["ddlYear"].value,
      "billType": this.ddoFrwrdForm.controls["ddlBillType"].value,
      "billName": this.ddoFrwrdForm.controls["ddlBillName"].value,
      "billNo": this.ddoFrwrdForm.controls["ddlBillNo"].value,
  }
  this.isShowTbl=true;
  console.log("FormValue",data);
    // this.apiservice.getEmpBillDetail().subscribe({
    //   next: (res) => {
    //     if (res.status = 200) {
    //       this.empBillData = res.data
    //       this.rid=res.data.requestId
    //       alert( res.data.message+' for Request Id '+this.rid)
    //       this.ddoFrwrdForm.reset();
    //     }
    //   },
    //   error: (err) => {
    //     let errorObj = {
    //       message: err.message,
    //       err: err,
    //       response: err
    //     }
    //   }
    // })
    }
    else {
      alert("Please Enter Reqquired Field");
    }
  }
  

  products:any= [
    {
      "billNo": "100",
      "billDate": "10-12-2022",
      "budgetDetail": "SF/Voted-12/23-980",
      "netAmount": "25000.00",
      "grossAmount": "50000.00",
      "sf": "SF",
      "ca": "CA",
      "na": "NA"
    },    
  ]

  // isLastPage(): boolean {
  //   return this.products ? this.first === (this.products.length - this.rows): true;
  // }
  
  // isFirstPage(): boolean {
  //   return this.products ? this.first === 0 : true;
  // }
}


