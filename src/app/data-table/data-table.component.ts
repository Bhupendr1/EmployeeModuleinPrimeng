import { Component } from '@angular/core';
import {_ServiceApi} from 'src/app/Services/service.service';
import { Product } from '../product';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { parse} from 'yaml'

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {constructor(private http: HttpClient){
  this.getJson().subscribe(data => {

    this.parsedYamlObject = data;
    console.log(data);
  })
}

parsedYamlObject:any[]=[]

  products: Product[] = [];
  ngOnInit() {
    // this._Service.getProductsSmall().then(data => this.products = data);
  }
  public getJson(): Observable<any> {
    return this.http.get("./assets/some.yaml", {
      observe: 'body',
      responseType: "text"   // This one here tells HttpClient to parse it as text, not as JSON
    }).pipe(
      // Map Yaml to JavaScript Object
      map(yamlString => parse(yamlString))
    );
  }
}


