import { Component, OnInit } from '@angular/core';
import { _ServiceApi } from 'src/app/Services/service.service';
import { Router,ActivatedRoute } from '@angular/router';
import { ClsSession } from 'src/app/shared/cls-session.model';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit  {
  abc: MenuItem[] = [{ icon: 'pi pi-home', routerLink: '/Styleguide' },{label: 'landing-page', routerLink: '/login/Authentication/Singin'},{label: 'Inbox'}];
  empInfo!: ClsSession;
  getInboxdatadata:any = [];
  rows = 50
  id:any;
  request_id:any;
  Name:any;
  constructor(private router: Router,private _Service:_ServiceApi,private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.empInfo=this._Service.getDetails();
   
    // this.id = this.activatedRoute.snapshot.paramMap.get('id'); 
    // this.request_id = this.id.toString().slice(-3); 

    let requestedData = {
     "officeId":this.empInfo.officeId,
     "userId":this.empInfo.roleId
   }
  
   this._Service.postRequestUrl01(requestedData,"getInboxdata").subscribe(res => {
     if (res.data.status = 200) {
       this.getInboxdatadata = res.data
     }
   })

  }

  onsubmit(id:any,URl:any): void {
    debugger
    this.router.navigate(['/Home/EssRequestForward'+URl, {id: id}]);
  };

}
