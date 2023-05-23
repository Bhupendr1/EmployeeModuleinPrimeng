import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import {_ServiceApi} from 'src/app/Services/service.service';
import { Router } from '@angular/router';
import {
  MenuItem
} from 'primeng/api';
import { TabPanel } from 'primeng/tabview';
declare const $:any;
@Component({
  selector: 'app-ess-req',
  templateUrl: './ess-req.component.html',
  styleUrls: ['./ess-req.component.css']
})
export class EssReqComponent implements OnInit {
  abc: MenuItem[] = [{ icon: 'pi pi-home', routerLink: '/login/Authentication/Singin' },{label: 'Dashboard', routerLink: '/Dashboard/Dashboard/NewTheme'},{ label: 'Employee Self Servie Request' }];
  @ViewChildren(TabPanel)
  tabPanels!: QueryList<TabPanel>;
  essreq !: FormGroup;
  ESSRequestData: any = [];
  SubReqdata:any=[];
  ESSurl:any=[];
  subreq:any;
  subreqID:any=[];
  activeTab=0;
  constructor(private formbuilder: FormBuilder,private _Service:_ServiceApi, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    // this.getESSRequestType();
    this.essreq = this.formbuilder.group({
      subreqID:[''],
      
    });
    this.getESSSubRequestType(0);
  }
  //get Request Type
  getESSSubRequestType(e:any):void{ 
    debugger
    this.subreq = e+1; 
    let data = {
      "inEssRqstTypeId": this.subreq.toString(),
      } 
    this._Service.postRequestUrl01(data, "getESSSubRequestType").subscribe(res => {
      if (res.data.status = 200) {
        this.SubReqdata = res.data
      }
    });
  };


loadComponent(): void {
 let ESSurl = $('#subreqID').val();

}

onSubmit() {
    debugger
    // var id =(<HTMLInputElement>document.getElementById("subreqID")).value
    var id =this.essreq.value.subreqID
  this.router.navigateByUrl('/Home/Ess'+id)
  }
}
function setHelpKey(helpKey: any) {
  throw new Error('Function not implemented.');
}

