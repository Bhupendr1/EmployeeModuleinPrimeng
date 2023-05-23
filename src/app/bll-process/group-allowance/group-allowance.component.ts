import { Component, OnInit } from '@angular/core';
import { _ServiceApi } from 'src/app/Services/service.service';
import { MenuItem, ConfirmationService, MessageService, PrimeNGConfig, Message} from 'primeng/api';
// import { ClsSession } from 'src/app/shared/cls-session.model';
import { Customer, Representative } from 'src/app/customer'
@Component({
  selector: 'app-group-allowance',
  templateUrl: './group-allowance.component.html',
  styleUrls: ['./group-allowance.component.css'],
  providers: [MessageService]
})

export class GroupAllowanceComponent implements OnInit {
  // empInfo!: ClsSession;
  
    constructor(private _Service: _ServiceApi, private primengConfig: PrimeNGConfig) { }

  abc: MenuItem[] = [{ icon: 'pi pi-desktop', label: ' DashBoard', routerLink: '/Styleguide' },
  { label: 'Group Allowance' },];
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
  Genderdata: any = [];
  Allowanceslist: any = [];
  data: any;

  ngOnInit(): void {
    this.GetAllowances();
    this._Service.getCustomersLarge().then(customers => {
      this.customers = customers;
      this.loading = false;
      // this.empInfo=this._Service.getDetails();  
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

    this._Service.postRequestUrl04(null, "getGender").subscribe(res => {
      if (res.data.status = 200) {
        this.Genderdata = res.data;

        // debugger
        // sessionStorage.setItem('data', res.data[2].GEN_NAME_EN);

      }
    });
  }

  GetAllowances(): void {

    this._Service.postRequestUrl05(null, "getGroupAllowance").subscribe(res => {
      if (res.data.status = 200) {
        this.Allowanceslist = res.data;
      }
    });

  };

}
