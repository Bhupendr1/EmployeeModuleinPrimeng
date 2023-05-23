import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { _ServiceApi } from 'src/app/Services/service.service';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router'; 
import { DatePipe, Location } from '@angular/common'; 
@Component({
  selector: 'app-ess-bank-account-change-request',
  templateUrl: './ess-bank-account-change-request.component.html',
  styleUrls: ['./ess-bank-account-change-request.component.css']
})
export class EssBankAccountChangeRequestComponent implements OnInit {
  abc: MenuItem[] = [{ icon: 'pi pi-home', routerLink: '/login/Authentication/Singin' },{label: 'Inbox', routerLink: '/Home/inbox'},{ label: 'Bank Account Change Request' }];
  EmpBankAccChangeReqForm !: FormGroup;  
  MaritalStatusData: any = [];
  empdataAPI:any=[];
  empdata: any = {};
  empselfData: any = [];
  rid: any;
  show_is: boolean=false ;
  show_is_remark: boolean=false ;
  isShowApprove:boolean=false
  isShowForward:boolean=true
  requestId:any;
  Name1: any;   
  Status:any
  BtnName: any;
  Name:any;
  Account_No:any;
  State_name:any;
  District_name:any;
  Bank_name:any;
  Branch_name:any;
  n_ifsc_code:any;
  n_Account_No:any;
  ReStatus:any;
  Remark:any;
  constructor(private formbuilder: FormBuilder, private  _Service: _ServiceApi, private http: HttpClient, private router: Router
    , private location: Location)  {
    this.requestId=this.router.getCurrentNavigation()?.extras.state
    this.Status = [
      { name: 'Approve', id:1 },
      { name: 'Forward',id:2  },        
    ];
   }

  ngOnInit(): void {
    if(this.BtnName==4){
      this.isShowForward=false;
      this.isShowApprove=true;
    }else{
      this.isShowApprove=false;
      this.isShowForward=true;
    }
    this.BtnName=sessionStorage.getItem('btn');
    this.Name1="private formbuilder: FormBuilder" 
    this.EmpBankAccChangeReqForm = this.formbuilder.group({
      Name:['private formbuilder: FormBuilder',Validators.required],
      Account_No:[''],
      State_name:[''],
      District_name:[''],
      Bank_name:[''],
      Branch_name:[''],
      n_ifsc_code:[''],
      n_Account_No:[''],
      ReStatus:['',Validators.required],
      Remark:['']
    });
   this.getempData();
  }
 
  onchangestatus(event: any) {
    if (event.target.value == 2) {
      this.show_is_remark = true;
    }
    else {
      this.show_is_remark = false;
    }
  }
  getempData():void{      
    let Data = {
      "officeId":2 ,
      "requestId":42,
    }     
    this._Service.postRequestUrl01(Data,'getEmployeeBankChangeUpdate').subscribe({
  
      next: (res) => {          
        if (res.status = 200) {              
          debugger      
          this.empdata = res.data.REQUESTED_JSON            
          //alert(res.data.REQUESTED_JSON.fatherName)
         // this.EmpSelfDetailForm.setValue(res.data.REQUESTED_JSON);  
              this.empdata = res.data.REQUESTED_JSON ;
              this.Account_No=res.data.REQUESTED_JSON.beltNo,
              this.State_name= res.data.REQUESTED_JSON.state,
              this.District_name= res.data.REQUESTED_JSON.district,
              this.Bank_name= res.data.REQUESTED_JSON.employeeName,
              this.Branch_name= res.data.REQUESTED_JSON.branch,
              this.n_ifsc_code= res.data.REQUESTED_JSON.ifsc,
              this.n_Account_No= res.data.REQUESTED_JSON.accountNumber
                      
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

  
    submitted = false;
    onSubmit() {
      debugger
      this.submitted = true;
      // alert(this.EmpSelfDetailForm.valid)
      if (this.EmpBankAccChangeReqForm.invalid) {
        debugger
      let rdata=  {        
        "Type": this.EmpBankAccChangeReqForm.controls["Type"].value,
        "Date": this.EmpBankAccChangeReqForm.controls["Date"].value,
        "remarks": this.EmpBankAccChangeReqForm.controls["remark"].value,
        "ReStatus": this.EmpBankAccChangeReqForm.controls["ReStatus"].value,
        "createdBy": 1,
        "officeId": 2,
        "requesterId": 3,
        "essSubRequestTypeId": 1,        
        "requestTypeId": 1,
        "approverId": 1,
        "reasonType":1
        
    }
    debugger
      // console.log(data);
      this._Service.postRequestUrl01(rdata,'submitEntitySave').subscribe({
        next: (res) => {
          if (res.status = 200) {
            // alert("Save As Draft Successfully");
  
            this.empselfData = res.data
            this.rid=res.data.requestId
            alert( res.data.message+' for Request Id '+this.rid)
            // this.EmpSelfDetailForm
            // .reset();
          }
        },
        error: (err) => {
          let errorObj = {
            message: err.message,
            err: err,
            response: err
          }
          // alert(errorObj.message)
        }
  
      })
      }
      else {
        alert("form is invalid");
      }
    }
  goBack() {
    // window.history.back();
    this.location.back();
    console.log('goBack()...');
  }
}

