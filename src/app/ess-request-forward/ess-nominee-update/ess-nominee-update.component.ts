

  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
  import { HttpClient } from "@angular/common/http";
  import { _ServiceApi } from 'src/app/Services/service.service';
  import { Router } from '@angular/router'; 
  import { DatePipe, Location } from '@angular/common';
  import { MenuItem, ConfirmationService, MessageService, PrimeNGConfig, Message } from 'primeng/api';
  @Component({
    selector: 'app-ess-nominee-update',
    templateUrl: './ess-nominee-update.component.html',
    styleUrls: ['./ess-nominee-update.component.css']
  })
  export class EssNomineeUpdateComponent {
    abc: MenuItem[] = [{ icon: 'pi pi-home', routerLink: '/login/Authentication/Singin' },{label: 'Inbox', routerLink: '/Home/inbox'},{ label: 'Employee Nominee' }];
    EmpNomineeUpdateForm !: FormGroup;  
    BloodGroupdata: any = [];
    Genderdata: any = [];
    CasteCategoryData: any = [];
    DisabilityTypeData: any = [];
    MaritalStatusData: any = [];
    empdataAPI:any=[];
    empdata: any = {};
    empselfData: any = [];
    rid: any;   
    Status: any[];
    BtnName: any;   
    show_is_remark: boolean=false ;
    isShowApprove:boolean=false;
    isShowForward:boolean=true;
    Scheme_Name:any;
    Nomination_Name:any;
    Relation_Name:any;
    Percentage_Share:any;     
    ReStatus:any;
    Remark:any;

    constructor(private formbuilder: FormBuilder, private _Service: _ServiceApi, private http: HttpClient, private router: Router
      , private location: Location) {
        this.Status = [
          { name: 'Approve', id:1 },
          { name: 'Forward',id:2  },        
        ];
       }
  
    ngOnInit(): void {
      this.BtnName=sessionStorage.getItem('btn');
      this.EmpNomineeUpdateForm = this.formbuilder.group({
        Scheme_Name:[''],
        Nomination_Name:[''],
        Relation_Name:[''],
        Percentage_Share:[''],       
        ReStatus:['',Validators.required],
        Remark:['']
      });
    this.getempData();
    if(this.BtnName==4){
      this.isShowApprove=true;
      this.isShowForward=false;
    }else{
      this.isShowApprove=false;
      this.isShowForward=true
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
      this._Service.postRequestUrl01(Data,'getEmployeeDateType').subscribe({  
        next: (res) => {          
          if (res.status = 200) {            
            this.empdata = res.data.REQUESTED_JSON 
            //alert(res.data.REQUESTED_JSON.fatherName)
           // this.EmpSelfDetailForm.setValue(res.data.REQUESTED_JSON);          
           
                this.Scheme_Name= res.data.REQUESTED_JSON.accountNumber,
                this.Nomination_Name= res.data.REQUESTED_JSON.bank,                
                this.Relation_Name= res.data.REQUESTED_JSON.bank,
                this.Percentage_Share= res.data.REQUESTED_JSON.bank               
           
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
        if (this.EmpNomineeUpdateForm.invalid) {
          debugger
        let rdata=  {        
          "Type": this.EmpNomineeUpdateForm.controls["Type"].value,
          "Date": this.EmpNomineeUpdateForm.controls["Date"].value,
          "remarks": this.EmpNomineeUpdateForm.controls["remark"].value,
          "ReStatus": this.EmpNomineeUpdateForm.controls["ReStatus"].value,
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
  