import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }
  handleError(err:HttpErrorResponse) {
console.log(err)
let errMsg='';
if(err.statusText =="Not Found"){  
  errMsg='Something Went Wrong.Please try Again'
}else{
  if(err.statusText=="Unknown Error"){
    errMsg='There is some Unknown Error. Please try Again'
  }
}
return throwError(errMsg)
  }
}
