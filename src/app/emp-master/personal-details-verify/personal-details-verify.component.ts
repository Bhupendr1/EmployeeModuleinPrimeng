


// import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MenuItem, Message, MessageService, PrimeNGConfig, SelectItem } from 'primeng/api';
import { HttpClient } from "@angular/common/http";
import { _ServiceApi } from 'src/app/Services/service.service';


@Component({
  selector: 'app-personal-details-verify',
  templateUrl: './personal-details-verify.component.html',
  styleUrls: ['./personal-details-verify.component.css']
})


export class PersonalDetailsVerifyComponent {
  

  countries: { name: string; }[];
   //calender
   minDate!: Date;
   maxDate!: Date;
   selectedCountry!: string;
   city!: string;
  first: any;
  products: any;
  rows: any;
  PersonalDetails: any;
  submitted!: boolean;
  GetGenderdata:any=[];
  constructor(private primengConfig: PrimeNGConfig, private confirmationService: ConfirmationService,
    private messageService: MessageService, private router: Router,private formbuilder: FormBuilder,private _Service:_ServiceApi) {
    this.countries = [
      { name: 'January',  },
      { name: 'February',  },
      { name: 'March',  },
      { name: 'April',  },
      { name: 'May',  },
      { name: 'June', },
      { name: 'August',  },
      { name: 'September',  },
      { name: 'November',  },
      { name: 'December',  }
    ];



  }


  ngOnInit() {
    this.PersonalDetails = this.formbuilder.group({
      name:['',Validators.required],
      motherName:['',Validators.required],
      fatherName:['',Validators.required],
      spo:['',Validators.required],
      spouse:['',Validators.required],
      dob :['',Validators.required],
      SelectMonth : ['',Validators.required],
      Height : ['',Validators.required],
      Identification : ['',Validators.required],
      MaritalStatus : ['',Validators.required],
      TypeDisability : ['',Validators.required],
      PercentageDisability : ['',Validators.required],
      BloodGroup : ['',Validators.required],
      MobileNumber : ['',Validators.required],
      SocialCategory : ['',Validators.required],
      ServiceCategory : ['',Validators.required],
      SubServiceCategory : ['',Validators.required],
      ParentDepartment : ['',Validators.required],
      CurrentDepartment : ['',Validators.required],
      appointed : ['',Validators.required],
      CurrentDesignation : ['',Validators.required],
      OrderIssuing : ['',Validators.required],
      AppointmentAuthority : ['',Validators.required],
      emailIID : ['',Validators.required],
      EmployeeCategory : ['',Validators.required],


    });

    this.GetGender();
  }


  onSubmit() {
    this.submitted = true;
  alert ('fdhgfdkjghkd')
  }

  next() {
    this.first = this.first + this.rows;
}

prev() {
    this.first = this.first - this.rows;
}

reset() {
    this.first = 0;
}
isLastPage(): boolean {
  return this.products ? this.first === (this.products.length - this.rows): true;
}

isFirstPage(): boolean {
  return this.products ? this.first === 0 : true;
}


  GetGender():void{ 
  
    this._Service.postRequestUrl04(null, "getGender").subscribe(res => {
      if (res.data.status = 200) {
        this.GetGenderdata = res.data
      }
    });
  };



}
