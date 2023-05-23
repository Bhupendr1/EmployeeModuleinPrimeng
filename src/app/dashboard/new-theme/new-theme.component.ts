import { Component, OnInit} from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { _ServiceApi } from 'src/app/Services/service.service';
interface Product {
  code?:number;
  ReqID?:string;
  ServiceDateType?:string;
  ServiceDate?:string;
}
@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css']
})
export class NewThemeComponent implements OnInit {
  products: Product[] = [{
    code:1, ReqID: 'RESS00000061', ServiceDateType: 	'Date of Birth', ServiceDate: '05/12/2022'
  }];
  token: any;
  TileData: any = [];
  is_showESS: boolean = true
  is_showMaster: boolean = true
  is_showBill: boolean = true
  is_showSanction: boolean = true

  ESSData:any=[];
  empName:any;
  empCode:any;
  empDept:any;
  empDesg:any;
  empDOJ:any;
  empGPF:any;
  essNotificationsData:any=[];
  essDocs:any=[];

  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute, private _Service: _ServiceApi,private scroller: ViewportScroller) { }

  ngOnInit(): void {
    this.employeeDetails();
    this.essNotifications();
    this.essDocuments();

    this.activatedRoute.queryParams.subscribe(params => {
      this.token = params['token']
      this.token = this.token.replace(/ /g, "+");
      console.log(this.token);

      this._Service.getLoadDashboard(this.token).subscribe({

        next: (res) => {
          ;
          // var BloodGroupJson = JSON.parse(res.data);
          if (res.status = 200) {
            this.TileData = res.data;
            // debugger
            this.is_showESS = false
            this.is_showMaster = false
            this.is_showBill = false
            this.is_showSanction = false
            for (let index = 0; index < res.data.length; index++) {
              var TILEID = res.data[index].TILEID;
              if (TILEID == 1) {
                this.is_showESS = true
                // this.is_showMaster=false
                // this.is_showBill=false
                // this.is_showSanction=false

              }
              else if (TILEID == 2) {
                // this.is_showESS=false
                this.is_showMaster = true
                // this.is_showBill=false
                // this.is_showSanction=false

              }
              else if (TILEID == 3) {
                // this.is_showESS=false
                // this.is_showMaster=false
                this.is_showBill = true
                // this.is_showSanction=false

              }
              else if (TILEID == 4) {
                // this.is_showESS=false
                // this.is_showMaster=false
                // this.is_showBill=false
                this.is_showSanction = true

              }
              else {
                this.is_showESS = false
                this.is_showMaster = false
                this.is_showBill = false
                this.is_showSanction = false
              }
            }
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
      	
      
      localStorage.setItem('token', this.token);
})

  }

  employeeDetails():void{
    
 let data={
   employeeId : "1641366"
 }

    this._Service.postRequestUrl01(data,'getEssEmployeeDetails').subscribe({
      next:(res) =>{
        if(res.status = 200){
          console.log(this.ESSData = res.data[0]);
          this.ESSData = res.data[0];
          this.empName = res.data[0].EMPLOYEE_NAME;
          this.empCode = res.data[0].EMPLOYEE_CODE;
          this.empDept = res.data[0].DEPT_NAME_EN;
          this.empDesg = res.data[0].DESG_DESC_EN;
          this.empDOJ = res.data[0].DOJ;
          this.empGPF = res.data[0].GPF_NO;
        }
      }
    })

    // alert("Test Console");
  }

  essNotifications():void{
    this._Service.postRequestUrl01(null,'getEssNotification').subscribe({
      next:(res)=> {
        if(res.status = 200){
          this.essNotificationsData = res.data;
        }
      },

      error:(err)=>{
        let errobj = {
          message: err.message,
          err: err,
          response: err
        }
      }
    })
  }

  essDocuments():void{
    this._Service.postRequestUrl01(null,'getEssImportantDocuments').subscribe({
      next:(res)=>{
        if(res.status=200){
          this.essDocs = res.data;
        }
      }
    })
  }


tobottom() {
  this.scroller.scrollToAnchor("targetRed");
}
notify() {
  this.scroller.scrollToAnchor("Notifications")
}
document() {
  this.scroller.scrollToAnchor("Documents");
}


}
