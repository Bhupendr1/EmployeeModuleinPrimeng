import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { _ServiceApi } from 'src/app/Services/service.service';
import { Router } from '@angular/router';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
interface Product {
  code?:number;
  ReqID?:string;
  Scheme?:string;
  Nominee?:string;
  Relation?:string;
  Percent?:string;

}

@Component({
  selector: 'app-emplyee-nominee-update',
  templateUrl: './emplyee-nominee-update.component.html',
  styleUrls: ['./emplyee-nominee-update.component.css'],
})
export class EmplyeeNomineeUpdateComponent  implements OnInit {
  abc: MenuItem[] = [{ icon: 'pi pi-home', routerLink: '/login/Authentication/Singin' },{label: 'Dashboard', routerLink: '/Dashboard/Dashboard/NewTheme'},{ label: 'Employee Nominee Update' }];

  products: Product[] = [{
    code:1, ReqID: 'RESS00000061', Scheme: 	'General Provident Fu', Nominee:'Garima Devi',  Relation: 	'Father',  Percent: '25%'
  }];
  selectedFile: any;
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
  FamilyRelation: any = [];
  GetSchemeData: any = [];
  file!: File;
  updateNominee !: FormGroup;
  ESSDataLoadNominee: any = [];
  schemeName:string=''
  nominationName:string=''
  relationName:string=''
  id:string=''
  Relationlist: any = [];
  constructor(private formbuilder: FormBuilder, private http: HttpClient,private _Service:_ServiceApi,private primengConfig: PrimeNGConfig) { }
  ngOnInit(): void {
    this.updateNominee = this.formbuilder.group({
      schemeName:['-1',[Validators.required,Validators.pattern(/^\d+$/)]],
      nominationName: ['-1',[Validators.required,Validators.pattern(/^\d+$/)]],
      relationName: ['-1',[Validators.required,Validators.pattern(/^\d+$/)]],
      percentShare:['',[Validators.required]],
      file: [''],
      schemeID: [''],
      nominationID: [''],
      relationID: [''],
    });
    this.getSchemeType();
    this.getFamilyRelation();
    this.getempData();
    this.getempDatalist();
    this.getEmpNomFamilyDetail();
  }

  onFileSelected(event:any) {
    this.selectedFile = event.target.files[0];
  }
  getSchemeType(): void {
    this._Service.postRequestUrl02(null,'getSchemeType').subscribe({
      next: (res) => {
        // var BloodGroupJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.GetSchemeData = res.data
         
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
  //get Family Relation
  getFamilyRelation(): void {
    this._Service.postRequestUrl04(null,'getFamilyRelation').subscribe({
      next: (res) => {
        // var BloodGroupJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.FamilyRelation = res.data
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
  getEmpNomFamilyDetail(): void {
    let rdata=  {
      "employeeId": 3
    }

    this._Service.postRequestUrl02(rdata,'getEmpNomFamilyDetail').subscribe({
      next: (res) => {
        // var BloodGroupJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.Relationlist = res.data
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
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }
  getschemeName1(event:any){  
    this.schemeName =event;
  }
  getschemeName(event:any){
    let getschemeName = event.target['options']
    [event.target['options'].selectedIndex].text; 
    this.schemeName=getschemeName;   
  }
  getnominationName(event:any){
    let getnominationName = event.target['options']
    [event.target['options'].selectedIndex].text; 
    this.nominationName=getnominationName;   
  }
  getnominationName1(event:any){
    
    this.nominationName=event;   
  }
  getrelationName(event:any){
    let getrelationName = event.target['options']
    [event.target['options'].selectedIndex].text; 
    this.relationName =getrelationName;  
  }
  getrelationName1(event:any){
   
    this.relationName =event;  
  }
  onreset(){
    this.updateNominee.reset();
    this.getempData();
  }
  submitted = false;
  onSubmit() {
   this.submitted = true;  
   debugger 
   if (this.updateNominee.invalid) {
    return;
    }
    else {        
    let rdata=  {
      "schemeName": this.schemeName,      
      "schemeID": this.updateNominee.controls["schemeName"].value,      
      "nominationID": this.updateNominee.controls["nominationName"].value,
      "nominationName": this.nominationName,
      "relationID": this.updateNominee.controls["relationName"].value,
      "relationName": this.relationName,
      "percentShare": this.updateNominee.controls["percentShare"].value,
      "createdBy": 1,
      "officeId": 2,
      "employeeId": 3,
      "remarks": "try",
      "requestTypeId": 3,
      "approverId": 1,
      "reasonType":1,
      "ddoId":1,
      "roleId":1      
    }
    this._Service.postRequestUrl01(rdata,'essEmployeeNomineeUpdate').subscribe({
      next: (res) => {
        if (res.status = 200) {
          this.empselfData = res.data
          this.rid=res.data.requestId
          alert( res.data.message+' for Request Id '+this.rid);        
          this.getempDatalist();
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

  getempData():void{            
    let Data = {       
        "employeeId":3    
    }       
    this._Service.postRequestUrl01(Data,'getESSDataLoadNominee').subscribe({  
      next: (res) => {          
        if (res.status = 200) {               
          this.updateNominee.patchValue(
            {
              schemeName: res.data.SCHEME_ID,
              nominationName: res.data.FAMILY_MEM_ID,
              relationName: res.data.RELATION_ID,                
              percentShare: res.data.PRCNT_SHARE,             
            }); 
            this.getschemeName1(res.data.SCHEME_NAME_EN);
            this.getnominationName1(res.data.NAME_EN);
            this.getrelationName1(res.data.RELATION_NAME_EN);
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
   getempDatalist():void{            
    let Data = {       
      "employeeId":3,
      "requestTypeID":3
    }       
    this._Service.postRequestUrl01(Data,'getESSRequestLoad').subscribe({  
      next: (res) => {          
        if (res.status = 200) {  
          debugger             
          this.ESSDataLoadNominee = res.data         
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

    keypress(event: any) {
      var id = String.fromCharCode(event.keyCode);      
      if (/^\d+$/.test(id)) {
        return true;       
      }
      else {
        event.preventDefault();
        return false
      }
    }
   
}
