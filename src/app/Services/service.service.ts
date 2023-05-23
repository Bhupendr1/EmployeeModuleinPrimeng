import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Customer } from '../customer';
import { ClsSession } from '../shared/cls-session.model';
import { Product } from '../product';
import { Observable, throwError } from 'rxjs';

import { map, catchError } from 'rxjs/operators';
import {
  MenuItem
} from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { User } from '../auth/user';
import { Router } from '@angular/router';
import { ErrorService } from './error.service';
//import { ClsResponse } from './shared/cls-response.model';

// import { data } from 'jquery';

// import { map } from 'rxjs';
// const httpOptions = environment.httpOptions;

@Injectable({
  providedIn: 'root'
})

export class _ServiceApi {
  productNames: string[] = [
    "Bamboo Watch", 
    "Black Watch", 
    "Blue Band", 
    "Blue T-Shirt", 
    "Bracelet", 
    "Brown Purse", 
    "Chakra Bracelet",
    "Galaxy Earrings",
    "Game Controller",
    "Gaming Set",
    "Gold Phone Case",
    "Green Earbuds",
    "Green T-Shirt",
    "Grey T-Shirt",
    "Headphones",
    "Light Green T-Shirt",
    "Lime Band",
    "Mini Speakers",
    "Painted Phone Case",
    "Pink Band",
    "Pink Purse",
    "Purple Band",
    "Purple Gemstone Necklace",
    "Purple T-Shirt",
    "Shoes",
    "Sneakers",
    "Teal T-Shirt",
    "Yellow Earbuds",
    "Yoga Mat",
    "Yoga Set",
];

getProductsSmall() {
  return this.http.get<any>('assets/products-small.json')
  .toPromise()
  .then(res => <Product[]>res.data)
  .then(data => { return data; });
}

  private loggedIn = new BehaviorSubject<boolean>(false);//{1}
  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }
  login(user: User){
    if (user.userName !== '' && user.password !== '' ) { // {3}
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }
  }

  logout() {                            // {4}
    this.loggedIn.next(false);
    this.router.navigate(['/Singin']);
  }


  [x: string]: any;
  getEntitlementDetails() {
    throw new Error('Method not implemented.');
  }
  BaseUrl: any;
  ListPageSize: any;
  Genderdata: any = []
  // getServiceCategory() {
  //   throw new Error("Method not implemented.");
  // }

  
  subscribe(arg0: (res: any) => void) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient,private router: Router,private _errService:ErrorService) { 
   
this.GetGender();
  }

  // baseUrl = "http://localhost:3000/";
  //baseUrl = "http://172.22.32.36:8080/mdm/v1.0/";
  // baseUrl = environment.baseUrl;
  //const HttpHeaders = environment.headers;
  baseUrl01 = environment.baseUrl01;
  baseUrl02 = environment.baseUrl02;
  baseUrl03 = environment.baseUrl03;
  baseUrl04 = environment.baseUrl04;
  baseUrl05 = environment.baseUrl05;
  baseUrl8080 = environment.baseUrl8080;
  baseUrl8081 = environment.baseUrl8081;
  baseUrl8083 = environment.baseUrl8083;
  baseUrlLoan = environment.baseUrlLoan;
  baseUrlpersonal = "http://172.22.32.123:8080/pension/";
  baseUrlBank = "http://172.22.32.48:8080/bankDetails/";
  baseUrlDoc="http://172.22.32.26:8080/pension/"

  

  getCustomersLarge() {
    return this.http.get<any>('assets/customers-large.json')
        .toPromise()
        .then(res => <Customer[]>res.data)
        .then(data => { return data; });
}

// **********************************************************************
// const baseUrl01 = "http://172.22.32.100:5000/employeeess/v1.0/";
postRequestUrl01(data: any, ACTION: string)
{
  ACTION = `${this.baseUrl01}` + ACTION;
  return this.http.post<any>(ACTION, data);
} 

// **********************************************************************
// const baseUrl02 = "http://172.22.32.100:5001/";
postRequestUrl02(data: any, ACTION: string)
{
  ACTION = `${this.baseUrl02}` + ACTION;
  return this.http.post<any>(ACTION, data);
}

// **********************************************************************
// const baseUrl03 = "http://172.22.32.100:5002/employeemst/v1.0/";
postRequestUrl03(data: any, ACTION: string)
{
  ACTION = `${this.baseUrl03}` + ACTION;
  return this.http.post<any>(ACTION, data);
}

// **********************************************************************
// const baseUrl04 = "http://172.22.32.100:5003/employeemdm/v1.0/";
postRequestUrl04(data: any, ACTION: string)
{
  ACTION = `${this.baseUrl04}` + ACTION;
  return this.http.post<any>(ACTION, data);
}

// **********************************************************************
// const baseUrl05 = "http://172.22.32.100:5005/employeemdm/v1.0/";
postRequestUrl05(data: any, ACTION: string)
{
  ACTION = `${this.baseUrl05}` + ACTION;
  return this.http.post<any>(ACTION, data);
}


postRequestPension(data: any, ACTION: string)
 {
  ACTION = `${this.baseUrl8080}` + ACTION;
  return this.http.post<any>(ACTION, data).pipe(
    catchError(this._errService.handleError)
  )
 }
postRequestPensionSave(data: any, ACTION: string)
 {
  ACTION = `${this.baseUrl8081}` + ACTION;
  return this.http.post<any>(ACTION, data);
 }
postRequestPensionLoan(data: any, ACTION: string)
 {
  ACTION = `${this.baseUrlLoan}` + ACTION;
  return this.http.post<any>(ACTION, data);
 }
 postRequestPension_personal(data: any, ACTION: string)
 {
  ACTION = `${this.baseUrlpersonal}` + ACTION;
  return this.http.post<any>(ACTION, data);
 }
 postRequest_Bank(data: any, ACTION: string)
 {
  ACTION = `${this.baseUrlBank}` + ACTION;
  return this.http.post<any>(ACTION, data);
 }
 postRequest_Doc(data: any, ACTION: string)
 {
  ACTION = `${this.baseUrlDoc}` + ACTION;
  return this.http.post<any>(ACTION, data);
 }

GetCreatedBy(): any {
  return sessionStorage.getItem('createdBy'); 
}
GetofficeId(): any {
  return sessionStorage.getItem('officeId'); 
}
GetEmpId(): any {
  return sessionStorage.getItem('employeeId'); 
}
Getremarks(): any {
  return sessionStorage.getItem('remarks');
}
GetrequestTypeId(): any { 
  return sessionStorage.getItem('requestTypeId'); 
}
GetapproverId(): any {
  return sessionStorage.getItem('approverId'); 
}
GetreasonType(): any {
  return sessionStorage.getItem('reasonType'); 
}
GetddoId(): any {
  return sessionStorage.getItem('ddoId');
}
GetroleId(): any { 
  return sessionStorage.getItem('roleId'); 
}

getDetails():ClsSession  {
  return JSON.parse(sessionStorage.getItem('info')!); 
}

GetGender():void{ 
  this.postRequestUrl04(null, "getGender").subscribe(res => {
    if (res.data.status = 200) {    
      let data ={
        "createdBy": 1,
        "officeId": 2,
        "employeeId": 3,
        "remarks": "try",
        "requestTypeId": 1,
        "approverId": 1,
        "reasonType":1,
        "ddoId":1,
        "roleId":1
      }
      sessionStorage.setItem("info",(JSON.stringify(data)));    
      this.Genderdata = res.data[2];
      sessionStorage.setItem('list',res.data[2].GEN_ID); 
      sessionStorage.setItem('createdBy',"1"); 
      sessionStorage.setItem('officeId', "2"); 
      sessionStorage.setItem('employeeId', '3'); 
      sessionStorage.setItem('remarks', "success"); 
      sessionStorage.setItem('requestTypeId', "1"); 
      sessionStorage.setItem('approverId', "1"); 
      sessionStorage.setItem('reasonType', "1"); 
      sessionStorage.setItem('ddoId', "1"); 
      sessionStorage.setItem('roleId', "1"); 
    }
  });

};
getLoadDashboard(token:any){
  return this.http.post<any>("http://ifmstest.rajasthan.gov.in/employeelanding/getLoadDashboard", {"token":token} ); 
}
}