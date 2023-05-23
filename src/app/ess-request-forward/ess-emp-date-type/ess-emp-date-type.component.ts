
  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
  import { HttpClient } from "@angular/common/http";
  import { _ServiceApi } from 'src/app/Services/service.service'; 
  import { Router } from '@angular/router'; 
  import { DatePipe, Location } from '@angular/common'; 
  import {
    MenuItem, ConfirmationService,
    MessageService, PrimeNGConfig, Message
  } from 'primeng/api';
  @Component({
    selector: 'app-ess-emp-date-type',
    templateUrl: './ess-emp-date-type.component.html',
    styleUrls: ['./ess-emp-date-type.component.css']
  })
  export class EssEmpDateTypeComponent implements OnInit {
    abc: MenuItem[] = [{ icon: 'pi pi-home', routerLink: '/login/Authentication/Singin' },{label: 'Inbox', routerLink: '/Home/inbox'},{ label: 'Employee Date' }];
    EmpDateTypeForm !: FormGroup;  
    BloodGroupdata: any = [];
    Genderdata: any = [];
    CasteCategoryData: any = [];
    DisabilityTypeData: any = [];
    MaritalStatusData: any = [];
    empdataAPI:any=[];
    empdata: any = {};
    empselfData: any = [];
    rid: any;  
    show_is: boolean=false ;
    show_is_remark: boolean=false ;
    isShowApprove:boolean=false;
    isShowForward:boolean=true;
    BtnName: any;   
    Status: any[];
    Type:any; 
    Date:any; 

    constructor(private formbuilder: FormBuilder, private  _Service: _ServiceApi, private http: HttpClient, private router: Router
      , private location: Location) {
        this.Status = [
          { name: 'Approve', id:1 },
          { name: 'Forward',id:2  },        
        ];
       }
  
    ngOnInit(): void {

      this.BtnName=sessionStorage.getItem('btn');
      this.EmpDateTypeForm = this.formbuilder.group({
        Type:[''],
        Date:[''],
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

        "officeId":3 ,
        "requestId":132
      }     
      this. _Service.postRequestUrl01(Data,'getEmployeeDateType').subscribe({  
        next: (res) => {          
          if (res.status = 200) {            
            this.empdata = res.data.REQUESTED_JSON 
            //alert(res.data.REQUESTED_JSON.fatherName)
           // this.EmpSelfDetailForm.setValue(res.data.REQUESTED_JSON);          
          
                this.Type= res.data.REQUESTED_JSON.accountNumber,
                this.Date=res.data.REQUESTED_JSON.bank                  

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
        if (this.EmpDateTypeForm.invalid) {
          debugger
        let rdata=  {        
          "Type": this.EmpDateTypeForm.controls["Type"].value,
          "Date": this.EmpDateTypeForm.controls["Date"].value,
          "remarks": this.EmpDateTypeForm.controls["remark"].value,
          "ReStatus": this.EmpDateTypeForm.controls["ReStatus"].value,
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
  