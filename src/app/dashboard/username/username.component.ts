import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { _ServiceApi } from 'src/app/Services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  ESSEmployeeDetail:any=[];
  employeeName:any;
  employeeID:any;
  empDOJ:any;
  empDesig:any;
  empDpt:any;
  empGPFNo:any;
  ESSnotification:any=[];
  ESSimpdata:any=[];
  today:any;
  constructor(private formbuilder: FormBuilder, private _Service: _ServiceApi, private http: HttpClient, private router: Router,) { }

  ngOnInit(): void {
    this.getEssEmployeeDetails();
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var hh = today.getHours();
    var mmm = today.getMinutes();
    var sss = today.getSeconds();
    // this.today = dd + '/' + mm + '/' + yyyy + '  ' + hh + ':' + mmm + ':' + sss;
    this.today = dd + '/' + mm + '/' + yyyy;
  }

  //get ESS Employee Detail
  getEssEmployeeDetails(): void {
    let data={
      employeeId : "1641366"
    }
   
    this._Service.postRequestUrl01(data,'getEssEmployeeDetails').subscribe({
      next: (res) => {
        if (res.status = 200) {
          this.ESSEmployeeDetail = res.data[0]
          this.employeeName=res.data[0].EMPLOYEE_NAME
          this.employeeID=res.data[0].EMPLOYEE_CODE
          this.empDOJ=res.data[0].DOJ
          this.empDesig=res.data[0].DESG_DESC_EN
          this.empDpt=res.data[0].DEPT_NAME_EN
          this.empGPFNo=res.data[0].GPF_NO
        }
      },
      error: (err) => {
        let errorObj = {
          message: err.message,
          err: err,
          response: err
        }
        // alert("error while fatching data from get BloodGroup ");
        // console.log("error from get BloodGroup api is ", errorObj);
        // console.log("error from get BloodGroup api is ", err);
        // alert(err.error.message)
      }
    })
  }
}