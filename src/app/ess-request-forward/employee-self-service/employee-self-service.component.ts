import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
  import { HttpClient } from "@angular/common/http";
  import { _ServiceApi } from 'src/app/Services/service.service';
  import { Router } from '@angular/router';
  import { DatePipe, Location } from '@angular/common';
  import {MenuItem} from 'primeng/api';
  import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
  @Component({
    selector: 'app-employee-self-service',
    templateUrl: './employee-self-service.component.html',
    styleUrls: ['./employee-self-service.component.css']
  })
  export class EmployeeSelfServiceComponent {
    id=`<button mat-button matStepperNext>Next</button>`
    isOptional:boolean = false;
    firstFormGroup !: FormGroup;
    secondFormGroup !: FormGroup;
    thirdFormGroup !: FormGroup;
    forthFormGroup !: FormGroup;
    fifthFormGroup !: FormGroup;
    sisxthFormGroup !: FormGroup;
    Personal_details !: FormGroup;
    fourthFormGroup !: FormGroup;
    sevenFormGroup !: FormGroup;
    eitherFormGroup !: FormGroup;
    abc: MenuItem[] = [{ icon: 'pi pi-home', routerLink: '/login/Authentication/Singin'},{label: 'Inbox', routerLink: '/Home/inbox'},{ label: 'Employee Detail Verification' }];
    EmpSelfDetailForm !: FormGroup;  
    BloodGroupdata: any = [];
    Genderdata: any = [];
    CasteCategoryData: any = [];
    DisabilityTypeData: any = [];
    MaritalStatusData: any = [];
    empdataAPI:any=[];
    empdata: any = {};
    empselfData: any = [];
    rid: any;   
    Name1: any;   
    BtnName: any;   
    show_is: boolean=false ;
    show_is_remark: boolean=false ;
    Status: any[];
    disabled: boolean = true;
    value5: string = 'disabled';
    isShowApprove=false;
    isShowForward=true;
    fatherName:any;
    Name: any;
    Disability_Type:any;
    Gender_Data: any;
    mobileNumber:any;
    Social_Category:any;
    emailID:any;
    percentageDisability: any;
    Blood_Group:any;
    height:any;
    identificationMark: any;
    panNo:any;
    motherName: any;
    dob:any;
    disable:any;
    spouseName:any;
    Marital_Status: any;
    stepperOrientation: Observable<StepperOrientation>;

    constructor(private formbuilder: FormBuilder, private _Service: _ServiceApi, private http: HttpClient, private router: Router,private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver
      , private location: Location) {
        this.Status = [
          { name: 'Approve', id:1 },
          { name: 'Forward',id:2  },        
        ];
        this.stepperOrientation = breakpointObserver
        .observe('(min-width: 800px)')
        .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
       }
    ngOnInit(): void {
 
      this.firstFormGroup = this.formbuilder.group({
        // firstCtrl: ['', Validators.required],
      });
      this.secondFormGroup = this.formbuilder.group({
        // secondCtrl: ['', Validators.required],
      });
      this.thirdFormGroup = this.formbuilder.group({
        // thirdCtrl: ['', Validators.required],
      });
      this.fourthFormGroup = this.formbuilder.group({
        // fourthCtrl: ['', Validators.required],
      });
   
         this.fifthFormGroup = this.formbuilder.group({
        // fifthCtrl: ['', Validators.required],
      });

      this.sisxthFormGroup = this.formbuilder.group({
        // fifthCtrl: ['', Validators.required],
      });
      this.sevenFormGroup = this.formbuilder.group({
        // fifthCtrl: ['', Validators.required],
      });
      this.eitherFormGroup = this.formbuilder.group({
        // fifthCtrl: ['', Validators.required],
      });
      this.BtnName=sessionStorage.getItem('btn');
      this.Name1="private formbuilder: FormBuilder" 
      this.EmpSelfDetailForm = this.formbuilder.group({
        Name:['private formbuilder: FormBuilder',Validators.required],
        fatherName:['',Validators.required],
        motherName:['',Validators.required],
        dob:['',Validators.required],
        mobileNumber:['',Validators.required],
        spouseName:['',Validators.required],
        percentageDisability:['',Validators.required],
        height:['',Validators.required],
        identificationMark:['',Validators.required],
        Gender_Data: ['', Validators.required],
        Blood_Group:['', Validators.required],
        Social_Category:['', Validators.required],
        Marital_Status:['', Validators.required],
        Disability_Type:['', Validators.required],
        panNo:['',Validators.required],
        emailID:['',Validators.required],
        disable:['',Validators.required],
        ReStatus:['',Validators.required]
      });
      this.getBloodGroup();
      this.getGender();
      this.getCasteCategory();
      this.getDisabilityType();
      this.getMaritalStatus();      
      this.getempData();
      debugger
      if(this.BtnName==4)
      {
        this.isShowApprove=true;
        this.isShowForward=false;
      }
      else
      {
        this.isShowApprove=false;
        this.isShowForward=true;
      }
    }
    step = 0;

    setStep(index: number) {
      this.step = index;
    }
  
    nextStep() {
      this.step++;
    }
  
    prevStep() {
      this.step--;
    }
  
    //get Blood Group
    getBloodGroup(): void {  
      this._Service.postRequestUrl04(null,'getBloodGroup').subscribe({  
        next: (res) => {
          // var BloodGroupJson = JSON.parse(res.data);
          // var statusJson = JSON.parse(res.status);
          if (res.status = 200) {
            this.BloodGroupdata = res.data
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
    getGender(): void {
  
      this._Service.postRequestUrl04(null,'getGender').subscribe({
  
        next: (res) => {
          // var BloodGroupJson = JSON.parse(res.data);
          // var statusJson = JSON.parse(res.status);
          if (res.status = 200) {
            this.Genderdata = res.data
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
  
    getCasteCategory(): void {
  
      this._Service.postRequestUrl04(null,'getCasteCategory').subscribe({
  
        next: (res) => {
          // var BloodGroupJson = JSON.parse(res.data);
          // var statusJson = JSON.parse(res.status);
          if (res.status = 200) {
            this.CasteCategoryData = res.data
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
  
    getDisabilityType(): void {
  
      this._Service.postRequestUrl04(null,'getDisabilityType').subscribe({
  
        next: (res) => {
          // var BloodGroupJson = JSON.parse(res.data);
          // var statusJson = JSON.parse(res.status);
          if (res.status = 200) {
            this.DisabilityTypeData = res.data
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
  
    getMaritalStatus(): void {
  
      this._Service.postRequestUrl04(null,'getMaritalStatus').subscribe({
  
        next: (res) => {
          // var BloodGroupJson = JSON.parse(res.data);
          // var statusJson = JSON.parse(res.status);
          if (res.status = 200) {
            
            this.MaritalStatusData = res.data
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

    // getempData():void{
    //   debugger
    //   var Empid = $('#Empid').val();
    //   var Empid1 = 123;
     
    //   let urlData = {

    //     "iessSubRqstTypeId": Empid,
    //     "iessRqstTypeId": Empid1
    //   }   
    //   debugger
    //   this.empdata=urlData
    // }

    getempData():void{      
      let Data = {
        "officeId":2 ,
        "requestId":1
      }     
      
      this._Service.postRequestUrl01(Data,'getPersonalDetailSelect').subscribe({
        next: (res) => {          
          if (res.status = 200) {                    
            this.empdata = res.data.REQUESTED_JSON            
            //alert(res.data.REQUESTED_JSON.fatherName)
           // this.EmpSelfDetailForm.setValue(res.data.REQUESTED_JSON);                       
                this.fatherName= res.data.REQUESTED_JSON.fatherName,
                this.Name= res.data.REQUESTED_JSON.name,
                this.Disability_Type= res.data.REQUESTED_JSON.disabilityType,
                this.Gender_Data= res.data.REQUESTED_JSON.gender,
                this.mobileNumber=res.data.REQUESTED_JSON.mobileNumber,
                this.Social_Category= res.data.REQUESTED_JSON.socialCategory,
                this.emailID=res.data.REQUESTED_JSON.emailId,
                this.percentageDisability= res.data.REQUESTED_JSON.percentageDisability,
                this.Blood_Group= res.data.REQUESTED_JSON.bloodGroup,
                this.height= res.data.REQUESTED_JSON.height,
                this.identificationMark= res.data.REQUESTED_JSON.identificationMark,
                this.panNo= res.data.REQUESTED_JSON.panNo,
                this.motherName= res.data.REQUESTED_JSON.motherName,
                this.dob= res.data.REQUESTED_JSON.dob,
                this.disable= res.data.REQUESTED_JSON.disable,
                this.spouseName= res.data.REQUESTED_JSON.spouseName,
                this.Marital_Status= res.data.REQUESTED_JSON.maritalStatus
                        
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
    onchangestatus(event: any) {
      if (event.target.value == 2) {
        this.show_is_remark = true;
      }
      else {
        this.show_is_remark = false;
      }
    }
    submitted = false;
    onSubmit() {
      debugger
      this.submitted = true;
      // alert(this.EmpSelfDetailForm.valid)
      if (this.EmpSelfDetailForm.invalid) {
        debugger
      let rdata=  {        
        "name": this.EmpSelfDetailForm.controls["Name"].value,
        "fatherName": this.EmpSelfDetailForm.controls["fatherName"].value,
        "motherName": this.EmpSelfDetailForm.controls["motherName"].value,
        "gender": this.EmpSelfDetailForm.controls["Gender_Data"].value,
        "dob": this.EmpSelfDetailForm.controls["dob"].value,
        "socialCategory": this.EmpSelfDetailForm.controls["Social_Category"].value,
        "mobileNumber": this.EmpSelfDetailForm.controls["mobileNumber"].value,
        "maritalStatus": this.EmpSelfDetailForm.controls["Marital_Status"].value,
        "spouseName": this.EmpSelfDetailForm.controls["spouseName"].value,
        "disable": "0",
        "disabilityType":this.EmpSelfDetailForm.controls["Disability_Type"].value,
        "percentageDisability": this.EmpSelfDetailForm.controls["percentageDisability"].value,
        "height": this.EmpSelfDetailForm.controls["height"].value,
        "bloodGroup": this.EmpSelfDetailForm.controls["Blood_Group"].value,
        "identificationMark": this.EmpSelfDetailForm.controls["identificationMark"].value,
        "panNo": this.EmpSelfDetailForm.controls["panNo"].value,
        "emailId": this.EmpSelfDetailForm.controls["emailID"].value,
        "createdBy": 1,
        "officeId": 2,
        "requesterId": 3,
        "essSubRequestTypeId": 1,
        "remarks": "try",
        "requestTypeId": 1,
        "approverId": 1,
        "reasonType":1
        
    }
    debugger
      // console.log(data);
      this._Service.postRequestUrl01(null,'submitEntitySave').subscribe({
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
  
