import { Component, OnInit,Input, SimpleChange, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  
  isExpanded: boolean = true;
  hideMenu:boolean=false;
  panelOpenState = false;
  @Input() showSideMenu!:boolean;
  @Output() showSideMenuChange = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {

  }
  closeMenu() {
    document.getElementById("mySidenav1")!.style.display = "none";
  }
  // togglesidebar() {
  //   if(this.selected==="active"){
  //   document.getElementById('sidebar')?.classList.add('toggler');
  //   document.getElementById('sidebarbtn')?.classList.add('toggle-sidebar-btn_toggle');
  //   this.selected="inactive";
  //   }
  //   else{
  //   document.getElementById('sidebar')?.classList.remove('toggler');
  //   document.getElementById('sidebarbtn')?.classList.remove('toggle-sidebar-btn_toggle');
  //   this.selected="active";
  //   }
  // }
}
