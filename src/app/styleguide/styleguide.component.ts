import { Component, OnInit } from '@angular/core';
import {
  MenuItem, ConfirmationService,
  MessageService, PrimeNGConfig, Message
} from 'primeng/api';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';

interface City {
  name: string,
  code: string
}
export interface Product {
  id?:string;
  code?:string;
  name?:string;
  description?:string;
  price?:number;
  quantity?:number;
  inventoryStatus?:string;
  category?:string;
  image?:string;
  rating?:number;
}

@Component({
  selector: 'app-styleguide',
  templateUrl: './styleguide.component.html',
  styleUrls: ['./styleguide.component.css']
})
export class StyleguideComponent implements OnInit {
  products: Product[];
  first = 0;

  rows = 5;
  
  visibleSidebar!: any;
  //mulitselect variable
  cities: City[];
  //select variable
  items: SelectItem[] = [];
  //calender
  minDate!: Date;
  maxDate!: Date;
  //radion button
  city!: string;
  //checkkbox
  selectedCity: string[] = [];
  //dialog box
  msgs: Message[] = [];
  //tab menu 
  item: MenuItem[] = [];
  activeItem: MenuItem;
  es: any;
  selectedCountry!: string;
  countries: any[];
  selectedCities: City[] = [];
  selectedFile: any = null;

 constructor(private primengConfig: PrimeNGConfig, private confirmationService: ConfirmationService,
    private messageService: MessageService, private router: Router) {
      this.products= [
        {
          "id": "1000",
          "code": "f230fh0g3",
          "name": "Bamboo Watch",
          "description": "Product Description",
          "image": "bamboo-watch.jpg",
          "price": 65,
          "category": "Accessories",
          "quantity": 24,
          "inventoryStatus": "INSTOCK",
          "rating": 5
        },
        {
          "id": "1001",
          "code": "nvklal433",
          "name": "Black Watch",
          "description": "Product Description",
          "image": "black-watch.jpg",
          "price": 72,
          "category": "Accessories",
          "quantity": 61,
          "inventoryStatus": "INSTOCK",
          "rating": 4
        },
        {
          "id": "1002",
          "code": "zz21cz3c1",
          "name": "Blue Band",
          "description": "Product Description",
          "image": "blue-band.jpg",
          "price": 79,
          "category": "Fitness",
          "quantity": 2,
          "inventoryStatus": "LOWSTOCK",
          "rating": 3
        },
        {
          "id": "1003",
          "code": "244wgerg2",
          "name": "Blue T-Shirt",
          "description": "Product Description",
          "image": "blue-t-shirt.jpg",
          "price": 29,
          "category": "Clothing",
          "quantity": 25,
          "inventoryStatus": "INSTOCK",
          "rating": 5
        },
        {
          "id": "1004",
          "code": "h456wer53",
          "name": "Bracelet",
          "description": "Product Description",
          "image": "bracelet.jpg",
          "price": 15,
          "category": "Accessories",
          "quantity": 73,
          "inventoryStatus": "INSTOCK",
          "rating": 4
        },        {
          "id": "1004",
          "code": "h456wer53",
          "name": "Bracelet",
          "description": "Product Description",
          "image": "bracelet.jpg",
          "price": 15,
          "category": "Accessories",
          "quantity": 73,
          "inventoryStatus": "INSTOCK",
          "rating": 4
        }
       
      
      ]


    this.item = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
      { label: 'Documentation', icon: 'pi pi-fw pi-file' },
      { label: 'Settings', icon: 'pi pi-fw pi-cog' },
      {  label: 'Events', icon: 'pi pi-fw pi-calendar'},
      {  label: 'User', icon: 'pi pi-fw pi-users'},
      {  label: 'Update', icon: 'pi pi-fw pi-refresh'},
    ];
    this.cities = [
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" }
    ];
    this.countries = [
      { name: 'Australia', code: 'AU' },
      { name: 'Brazil', code: 'BR' },
      { name: 'China', code: 'CN' },
      { name: 'Egypt', code: 'EG' },
      { name: 'France', code: 'FR' },
      { name: 'Germany', code: 'DE' },
      { name: 'India', code: 'IN' },
      { name: 'Japan', code: 'JP' },
      { name: 'Spain', code: 'ES' },
      { name: 'United States', code: 'US' }
    ];

    this.activeItem = this.items[0];
  }
  abc: MenuItem[] = [];
  home!: MenuItem;

  ngOnInit() {
    // basic table
    this.abc = [
      { label: 'Computer' },
      { label: 'Notebook' },
      { label: 'Accessories' },
      { label: 'Backpacks' },
      { label: 'Item' }
    ];
    this.home = { icon: 'pi pi-home' };
  }
//upload file
onFileSelected(event:any) {
  this.selectedFile = event.target.files[0] ?? null;
}

  //confirm dialog box
  confirm(event: any) {
    this.confirmationService.confirm({
      target: event.target,
      message: "Are you sure that you want to proceed?",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.messageService.add({
          severity: "info",
          summary: "Confirmed",
          detail: "You have accepted"
        });
      },
      reject: () => {
        this.messageService.add({
          severity: "error",
          summary: "Rejected",
          detail: "You have rejected"
        });
      }
    });
  }

next() {
    this.first = this.first + this.rows;
}

prev() {
    this.first = this.first - this.rows;
}

reset() {
    this.first = 0;
}
isLastPage(): boolean {
  return this.products ? this.first === (this.products.length - this.rows): true;
}

isFirstPage(): boolean {
  return this.products ? this.first === 0 : true;
}
}
