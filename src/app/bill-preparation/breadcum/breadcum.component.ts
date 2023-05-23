import { Component } from '@angular/core';
import {
  MenuItem
} from 'primeng/api';
@Component({
  selector: 'app-breadcum',
  templateUrl: './breadcum.component.html',
  styleUrls: ['./breadcum.component.css']
})
export class BreadcumComponent {
  abc: MenuItem[] = [];
  home!: MenuItem;
  
  ngOnInit() {
    // basic table
    
    this.abc = [
      { label: ' Dashboard' ,icon: 'pi pi-home' ,routerLink:'/Styleguide'},
      { label: 'Ess' },
      { label: 'Personal',url: 'https://en.wikipedia.org/wiki/Lionel_Messi' },
      { label: 'Item'  }
    ];
    this.home = { label: ' Dashboard' ,icon: 'pi pi-home' ,routerLink:'/Styleguide'};
  }
  itemClicked(event:any) {
    console.log(event.item);  
 }
}
