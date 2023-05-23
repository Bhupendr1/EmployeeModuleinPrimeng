import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { _ServiceApi } from 'src/app/Services/service.service';
interface City {
  name: string,
  id: string
}

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit{
  pageerror:string='page Not Found'
  cities: City[] = []; 
  id:any;

  constructor(private fb: FormBuilder, private http: HttpClient,private _Service:_ServiceApi,private router: Router) { 
    this.cities = [
      {name: 'Employee',id: '1'},
      {name: 'Checker', id:'2'},
      {name: 'Maker',  id: '3'},
      {name: 'Approver',id: '4'},
  ];
  }
  signInForm!: FormGroup;
  private formSubmitAttempt: boolean = false;

  ngOnInit() {
    this.signInForm = this.fb.group({
      status: ['1']
    });

   
  }

  onSubmit(){
    debugger
    this.id = (this.signInForm.controls['status'].value).toString();
   if(this.id==1){
this.router.navigateByUrl('/Dashboard/Dashboard/NewTheme')
   }
   else{
    this.router.navigateByUrl('/Home/inbox')
       }
       sessionStorage.setItem("btn",this.id);
  } 
  
}