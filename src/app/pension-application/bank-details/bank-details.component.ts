import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { _ServiceApi } from 'src/app/Services/service.service';
import { HttpClient } from '@angular/common/http';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {
  displayedColumns: string[] = ['Sr. No.', 'Pay Commission', 'Entitlement Status', 'DR Rate', 'Order No', 'Order Date', 'w.e.f DR date', 'Status', 'Action'];
  dataSource!: MatTableDataSource<any>;
  Bank_details!: FormGroup
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  Banklist: any = [];
  value: string='';
  constructor(public dialog: MatDialog, private _Service: _ServiceApi, private http: HttpClient,private formbuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.Bank_details = this.formbuilder.group({
      Treasury_Name: ['', Validators.required],
      Sub_Treasury: new FormControl('', Validators.required),
      Bank_Name: new FormControl('', [Validators.required]),
      Branch_Name: new FormControl('', [Validators.required]),
      Account_Holder: new FormControl('', Validators.required),
      Account_Number: new FormControl('', Validators.required),
      IFSC_Code: new FormControl('', [Validators.required,Validators.pattern('^[A-Za-z]{4}0[A-Z0-9a-z]{6}$')]),
      Pin_code: new FormControl('', Validators.required),

    });
    this.Bank_Detail();

    this.value = 'PUNB'
const regExp = new RegExp('^[A-Za-z]{4}0[A-Z0-9a-z]{6}$', 'g')
console.log( "hello",this.value.match(regExp))
  }

 Bank_Detail() {
  let data={
    "employeeCode": "CODE001"
  }
    this._Service.postRequest_Bank(data, "getBankDetailsByEmpCode").subscribe({
      next: (res) => {
        debugger
        if (res.status = 200) {
          this.Banklist = res.data[0];

        }
      },
      error: (err) => {
        let errorObj = {
          message: err.message,
          err: err,
          response: err
        }

      }
    })
  }

  get f() { return this.Bank_details.controls; }
  submitted = false;
  onSubmit() {
    console.log("hello", this.Bank_details)
    this.submitted = true;
    if (this.Bank_details.invalid) {
      return;
    }
    else {
      let data ={         
          "payCmmsn":"GovTest",    
          "salMin":10000,    
          "salMax":50000, 
          "minAmt":5000,   
          "drRate":3000,     
          "drRateFix":4000,     
          "isDp":1000,    
          "drFlag":"S",    
          "isPension":"Y",     
          "isGpo":"Y",     
          "isActive":1,     
          "createdBy":1,       
          "modifiedBy":1 
           }
      
      this._Service.postRequestPensionSave(data, "saveDrRateService").subscribe({
        next: (res) => {
          if (res.status = 200) {
            alert( res.data.message) 
          }
        },
        error: (err) => {
          let errorObj = {
            message: err.message,
            err: err,
            response: err
          }
        }

      })
    }
  }
}



