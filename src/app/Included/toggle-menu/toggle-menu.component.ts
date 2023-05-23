import { Component, OnInit,Input, SimpleChange, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-toggle-menu',
  templateUrl: './toggle-menu.component.html',
  styleUrls: ['./toggle-menu.component.css']
})
export class ToggleMenuComponent {
  items: MenuItem[]=[];
  hideMenu:boolean=false;
  isExpanded: boolean = true;

  panelOpenState = false;
  @Input() showSideMenu!:boolean;
  @Output() showSideMenuChange = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
         label:'Dashboard',
         icon:'pi pi-fw pi-home',
         routerLink:'/Dashboard/Dashboard/NewTheme',
      },{
        label:'My Request',
        icon:'pi pi-fw pi-qrcode',
        routerLink:'/Dashboard/Dashboard/NewTheme',
         items:[
            {
               label:'New',
               icon:'pi pi-fw pi-plus',
               items:[
                  {
                     label:'Bookmark',
                     icon:'pi pi-fw pi-bookmark'
                  },
                  {
                     label:'Video',
                     icon:'pi pi-fw pi-video'
                  },

               ]
            },
            {
               label:'Delete',
               icon:'pi pi-fw pi-trash'
            },
            {
               separator:true
            },
            {
               label:'Export',
               icon:'pi pi-fw pi-external-link'
            }
         ]
      },
      {
         label:'Inbox',
         icon:'pi pi-fw pi-inbox',
         routerLink:''
        },
         {
          label:'Employee Master',
          icon:'pi pi-fw pi-discord',
          routerLink:'',
          items:[
            {
               label:'Left',
               icon:'pi pi-fw pi-align-left'
            },
            {
               label:'Right',
               icon:'pi pi-fw pi-align-right'
            },
          ]
         },
         {
        label:'Employee Bank Verify',
         icon:'pi pi-fw pi-inbox',
         routerLink:'',
         items:[
            {
               label:'Left',
               icon:'pi pi-fw pi-align-left'
            },
            {
               label:'Right',
               icon:'pi pi-fw pi-align-right'
            },
            {
               label:'Center',
               icon:'pi pi-fw pi-align-center'
            },
            {
               label:'Justify',
               icon:'pi pi-fw pi-align-justify'
            },

         ]
      },
      {
         label:'Employee Registration',
         icon:'pi pi-fw pi-user',
         items:[
            {
               label:'New',
               icon:'pi pi-fw pi-user-plus',

            },
            {
               label:'Delete',
               icon:'pi pi-fw pi-user-minus',

            },
            {
               label:'Search',
               icon:'pi pi-fw pi-users',
               items:[
                  {
                     label:'Filter',
                     icon:'pi pi-fw pi-filter',
                     items:[
                        {
                           label:'Print',
                           icon:'pi pi-fw pi-print'
                        }
                     ]
                  },
                  {
                     icon:'pi pi-fw pi-bars',
                     label:'List'
                  }
               ]
            }
         ]
      },
      {
         label:'Employee Details',
         icon:'pi pi-fw pi-calendar',
         items:[
            {
               label:'Edit',
               icon:'pi pi-fw pi-pencil',
               items:[
                  {
                     label:'Save',
                     icon:'pi pi-fw pi-calendar-plus'
                  },
                  {
                     label:'Delete',
                     icon:'pi pi-fw pi-calendar-minus'
                  },

               ]
            },
            {
               label:'Archieve',
               icon:'pi pi-fw pi-calendar-times',
               items:[
                  {
                     label:'Remove',
                     icon:'pi pi-fw pi-calendar-minus'
                  }
               ]
            }
         ]
      },
      {
        label:'Pay & Allowance',
        icon:'pi pi-fw pi-paypal',
        routerLink:''
       },
      {
        label:'supervisor_account',
        icon:'pi pi-fw pi-slack',
        routerLink:''
       },
       {
        label:'Personal Information',
        icon:'pi pi-fw pi-info',
        routerLink:''
       },
       {
        label:'Deduction',
        icon:'pi pi-fw pi-minus-circle',
        routerLink:''
       },
       {
        label:'Loans',
        icon:'pi pi-fw pi-home',
        routerLink:''
       },
       {
        label:'Advance Request',
        icon:'pi pi-fw pi-inbox',
        routerLink:''
       },
      {
         label:'Quit',
         icon:'pi pi-fw pi-power-off'
      }
  ];
  }
  // ngOnChanges(changes:SimpleChanges):void{
  //   console.log(changes['previousValue']);
  //   console.log(this.showSideMenu);
  //   if(changes){
  //     console.log(changes['previousValue']);
  //   }
  // }

  closeMenu() {
    document.getElementById("mySidenav1")!.style.display = "none";
  }
 
  // closeMenu():void{
  //   console.log("tushar");
  //   this.showSideMenu=false;
  //   console.log("menuFlag",this.showSideMenu);
  //   this.showSideMenuChange.emit(this.showSideMenu);  
  // }
}