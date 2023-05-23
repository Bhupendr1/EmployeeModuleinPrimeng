import { Component } from '@angular/core';
import { _ServiceApi } from 'src/app/Services/service.service';
import {
  MenuItem, ConfirmationService,
  MessageService, PrimeNGConfig, Message
} from 'primeng/api';
import { Customer, Representative } from 'src/app/customer'
@Component({
  selector: 'app-group-deductions',
  templateUrl: './group-deductions.component.html',
  styleUrls: ['./group-deductions.component.css'],
  providers: [MessageService]
})
export class GroupDeductionsComponent {
  constructor(private _Service: _ServiceApi, private primengConfig: PrimeNGConfig) { }
  abc: MenuItem[] = [{ icon: 'pi pi-home', label: ' DashBoard', routerLink: '/Styleguide' },
  { label: 'Group Deductions' }];
  //choose File
  disabled: boolean = true;
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
  Genderdata: any = []
  emp_id: any;
  emp_id1: any;
  ngOnInit(): void {
    this.GetDeduction();
    this._Service.getCustomersLarge().then(customers => {
      this.customers = customers;
      this.loading = false;
      debugger
      this.emp_id = this._Service.GetCreatedBy();
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


  GetDeduction(): void {

    this._Service.postRequestUrl05(null, "getEmployeeGroupDeduction").subscribe(res => {
      if (res.data.status = 200) {
        this.Genderdata = res.data;
      }
    });

  };
}
