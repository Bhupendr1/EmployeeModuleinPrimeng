import { Component } from '@angular/core';
import { _ServiceApi } from 'src/app/Services/service.service';
import {
  MenuItem, ConfirmationService,
  MessageService, PrimeNGConfig, Message
} from 'primeng/api';
import { LazyLoadEvent } from 'primeng/api';
import { Customer } from 'src/app/customer';
interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-bulk-allowances',
  templateUrl: './bulk-allowances.component.html',
  styleUrls: ['./bulk-allowances.component.css'],
  providers: [MessageService]
})
export class BulkAllowancesComponent {
  cities: City[];
  //checkkbox
  selectedCity: string[] = [];
  //dialog box
  msgs: Message[] = [];
  //tab menu 
  item: MenuItem[] = [];

  constructor(private _Service:_ServiceApi,private primengConfig: PrimeNGConfig){ 
    this.cities = [
      { name: "Ram", code: "NY" },
      { name: "Hanuman", code: "RM" },
      { name: "Laxman", code: "LDN" },
      { name: "Bhart", code: "IST" },
      { name: "Jatau", code: "PRS" },
      { name: "Rawan", code: "NY" },
      { name: "inderjeet", code: "RM" },
      { name: "Megnath", code: "LDN" },
      { name: "Bhart", code: "IST" },
      { name: "bali", code: "PRS" },
    ];
  }
  //choose File
  disabled:boolean=true;
  loading: boolean=true;
  //table
  datasource: Customer[] = [];
  customers!: Customer[];
  totalRecords!: number;
  cols: any[] = [];
  breadcum: MenuItem[] = [ { label: ' Dashboard' ,icon: 'pi pi-home' ,routerLink:'/#'},
  { label: 'BulkAllowances' },];
  activityValues: number[] = [0, 100];
  first = 0;
  rows = 5;
    city!: string;
    Genderdata:any=[]
    emp_id:any;
    data:any;
    ngOnInit(): void {
      debugger
      // this.emp_id=this._Service.getfyyear();
    this.loading = true;
    this.primengConfig.ripple = true;
    this.GetGender();
debugger
   
    }
    loadCustomers(event: LazyLoadEvent) {  
      this.loading = true;
      setTimeout(() => {      
          if (this.datasource) {
              this.customers = this.datasource;
              this.loading = false;
          }
      }, 200);
  }
  
  GetGender():void{ 
  
    this._Service.postRequestUrl04(null, "getGender").subscribe(res => {
      if (res.data.status = 200) {
        this.Genderdata = res.data;
        
        // debugger
        // sessionStorage.setItem('data', res.data[2].GEN_NAME_EN);
       
      }
    });

  };
 
}
