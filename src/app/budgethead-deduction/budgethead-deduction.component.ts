import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Customer, Representative } from 'src/app/customer';
import {_ServiceApi} from 'src/app/Services/service.service';
@Component({
  selector: 'app-budgethead-deduction',
  templateUrl: './budgethead-deduction.component.html',
  styleUrls: ['./budgethead-deduction.component.css']
})
export class BudgetheadDeductionComponent {

  constructor(private ApiService:_ServiceApi,private primengConfig: PrimeNGConfig){ }
  //choose File
  disabled:boolean=true;
  //table
  selectedValue: string = 'val1';
    customers: Customer[] = [];
    representatives: Representative[] = [];
    statuses: any[] = [];
  loading: boolean = true;
  activityValues: number[] = [0, 100];
  first = 0;
  rows = 5;
    city!: string;
    Genderdata:any=[]
    ngOnInit(): void {
   this.getGender();
   this.ApiService.getCustomersLarge().then(customers => {
    this.customers = customers;
    this.loading = false;
  
  
  });
  
  this.representatives = [
    { name: "Amy Elsner", image: "amyelsner.png" },
    { name: "Anna Fali", image: "annafali.png" },
    { name: "Asiya Javayant", image: "asiyajavayant.png" },
    { name: "Bernardo Dominic", image: "bernardodominic.png" },
    { name: "Elwin Sharvill", image: "elwinsharvill.png" },
    { name: "Ioni Bowcher", image: "ionibowcher.png" },
    { name: "Ivan Magalhaes", image: "ivanmagalhaes.png" },
    { name: "Onyama Limba", image: "onyamalimba.png" },
    { name: "Stephen Shaw", image: "stephenshaw.png" },
    { name: "XuXue Feng", image: "xuxuefeng.png" }
  ];
  
  this.statuses = [
    { label: "Unqualified", value: "unqualified" },
    { label: "Qualified", value: "qualified" },
    { label: "New", value: "new" },
    { label: "Negotiation", value: "negotiation" },
    { label: "Renewal", value: "renewal" },
    { label: "Proposal", value: "proposal" }
  ];
    }
  
  
  getGender(): void {
    this.ApiService.getGender().subscribe({
  
      next: (x) => {
        if (x.status = 200) {
          this.Genderdata = x.data
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
