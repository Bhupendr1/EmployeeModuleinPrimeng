
import { _ServiceApi } from 'src/app/Services/service.service'; 
import { Component} from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {
  constructor(private authService: _ServiceApi) { }
  onLogout() {
    this.authService.logout();
  }
}
