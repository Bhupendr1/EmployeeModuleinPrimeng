import { Observable } from 'rxjs';
import { _ServiceApi } from 'src/app/Services/service.service'; 
import { Component, HostListener, OnChanges, OnInit, SimpleChange } from '@angular/core';

interface City {
  name: string,
}
interface Citi {
  code: string,
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  showMenu:boolean=false;
  innerWidth: string | undefined;
  isExpanded: boolean = true;
  isShowmenu: boolean = false;
  value1:string='';
  cities: City[];
  citi: Citi[];
  selectedCityCode!: string;
  selectedCityCode1!: string;
  constructor(private authService: _ServiceApi) {
    this.cities = [
      {name: 'EN'},
      {name: 'Hindi'},
      {name: 'English'},
  ];
    this.citi = [
      {code: '+A'},
      {code: 'A'},
      {code: '-A'},
  ];
   }

  onLogout() {
    this.authService.logout();
  }

  ngOnInit(): void {
    document.getElementById("mySidenav1")!.style.display = "none";
  }
  openMenu():void {
    document.getElementById("mySidenav1")!.style.display = "block";
  }

  @HostListener('window:scroll', [])
onWindowScroll(event: Event) {
    //set up the div "id=nav"
    if (document.body.scrollTop > 40 ||
        document.documentElement.scrollTop > 40) {
        document.getElementById('myHeader')!.classList.add('sticky');
    }
    else {
        document.getElementById('myHeader')!.classList.remove('sticky');
        this.innerWidth = 'auto';
    }
}
}