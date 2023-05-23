import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { _ServiceApi } from 'src/app/Services/service.service';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ess-other-number-update',
  templateUrl: './ess-other-number-update.component.html',
  styleUrls: ['./ess-other-number-update.component.css']
})
export class EssOtherNumberUpdateComponent {
  constructor(private formbuilder: FormBuilder,private  _Service: _ServiceApi, private http: HttpClient, private router: Router) {
    this.Status = [
      { name: 'Approve', id:1 },
      { name: 'Forward',id:2  },        
    ];
  }
  abc: MenuItem[] = [{ icon: 'pi pi-home', routerLink: '/login/Authentication/Singin' },{label: 'Inbox', routerLink: '/Home/inbox'},{ label: 'Employee Other Number' }];
  EmpOtherNumberUpdateForm !: FormGroup;  
  empdataAPI:any=[];
  empdata: any = {};
  show_is: boolean=false ;
  Status:any
  show_is_remark: boolean=false ;
  isShowApprove: boolean=false ;
  isShowForward: boolean=true ;
  empselfData: any = [];
  rid: any;
  requestId:any;
  BtnName:any;
  Employee_Name:any
  Belt_No:any
  Sipolicy_No:any
  CPF_No:any
  CPENF_No:any
  Mobile_No:any
  SPran_No:any
  Pil_No:any
  lascpnf_No:any
  ngOnInit(): void {
    this.BtnName=sessionStorage.getItem('btn')
    this.EmpOtherNumberUpdateForm = this.formbuilder.group({
      Employee_Name:[''],
      Belt_No:[''],
      Sipolicy_No:[''],
      CPF_No:[''],
      CPENF_No:[''],
      Mobile_No:[''],
      SPran_No:[''],
      Pil_No:[''],
      lascpnf_No:[''],
      ReStatus:['',Validators.required],
      Remark:['']
    });
this.getempData();
if(this.BtnName==4){
  this.isShowApprove=true;
  this.isShowForward=false;
}else{
  this.isShowApprove=false;
  this.isShowForward=true;
}
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
      "officeId":1,
      "requestId":4,
    } 
    this._Service.postRequestUrl01(Data,'getEmployeeOtherNumberUpdate').subscribe    ({  
      next: (res) => {          
        if (res.status = 200) {    
          debugger        
              this.empdata = res.data.REQUESTED_JSON     
              this.Employee_Name= res.data.REQUESTED_JSON.employeeName,
              this.Belt_No= res.data.REQUESTED_JSON.beltNo,
              this.Sipolicy_No= res.data.REQUESTED_JSON.siPolicyNo,
              this.CPF_No= res.data.REQUESTED_JSON.cpfNo,
              this.CPENF_No= res.data.REQUESTED_JSON.cpenfNo,
              this.Mobile_No= res.data.REQUESTED_JSON.mobileNo,
              this.SPran_No= res.data.REQUESTED_JSON.parnNo,
              this.Pil_No= res.data.REQUESTED_JSON.pilNo,
              this.lascpnf_No= res.data.REQUESTED_JSON.lascpenfNo      
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
      if (this.EmpOtherNumberUpdateForm.invalid) {
        debugger
      let rdata=  {        
        "Type": this.EmpOtherNumberUpdateForm.controls["Type"].value,
        "Date": this.EmpOtherNumberUpdateForm.controls["Date"].value,
        "remarks": this.EmpOtherNumberUpdateForm.controls["remark"].value,
        "ReStatus": this.EmpOtherNumberUpdateForm.controls["ReStatus"].value,
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
      this._Service.postRequestUrl01(null,'SubmitEntitySave').subscribe({
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
}
