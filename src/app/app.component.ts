import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slidein', [
      transition(':enter', [
        // when ngif has true
        style({ transform: 'translateX(-100%)' }),
        animate(250, style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        // when ngIf has false
        animate(250, style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class AppComponent  {
  hideSideNav: boolean = false;
 
  constructor() { }
 
  toggleSideNav(): void {
    debugger
this.hideSideNav = true
  }
  expanded: boolean = true;
}
