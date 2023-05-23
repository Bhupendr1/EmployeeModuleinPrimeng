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
  quantity?:string;
  inventoryStatus?:string;
  category?:string;
  image?:string;
  rating?:number;
}
@Component({
  selector: 'app-treasury-forward',
  templateUrl: './treasury-forward.component.html',
  styleUrls: ['./treasury-forward.component.css']
})
export class TreasuryForwardComponent {

  first = 0;

  rows = 5;
  
  visibleSidebar!: any;
  //mulitselect variable

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
  products: { id: string; code: string; name: string; description: string; image: string; price: number; category: string; quantity: string; inventoryStatus: string; rating: number; }[];

 constructor(private primengConfig: PrimeNGConfig, private confirmationService: ConfirmationService,
    private messageService: MessageService, private router: Router) {


      this.products= [
        {
          "id": "1000",
          "code": "1",
          "name": "Bamboo Watch",
          "description": "Product Description",
          "image": "bamboo-watch.jpg",
          "price": 65,
          "category": "12345",
          "quantity": "In-Process",
          "inventoryStatus": "INSTOCK",
          "rating": 5
        },
        {
          "id": "1001",
          "code": "2",
          "name": "Black Watch",
          "description": "Product Description",
          "image": "black-watch.jpg",
          "price": 72,
          "category": "12345",
          "quantity": "Process",
          "inventoryStatus": "INSTOCK",
          "rating": 4
        },
        {
          "id": "1002",
          "code": "3",
          "name": "Blue Band",
          "description": "Product Description",
          "image": "blue-band.jpg",
          "price": 79,
          "category": "12345",
          "quantity": "Payment",
          "inventoryStatus": "LOWSTOCK",
          "rating": 3
        },
        {
          "id": "1003",
          "code": "4",
          "name": "Blue T-Shirt",
          "description": "Product Description",
          "image": "blue-t-shirt.jpg",
          "price": 29,
          "category": "12345",
          "quantity": "Payment",
          "inventoryStatus": "INSTOCK",
          "rating": 5
        },
        {
          "id": "1004",
          "code": "5",
          "name": "Bracelet",
          "description": "Product Description",
          "image": "bracelet.jpg",
          "price": 15,
          "category": "12345",
          "quantity": "In-Proces",
          "inventoryStatus": "INSTOCK",
          "rating": 4
        },        {
          "id": "1004",
          "code": "6",
          "name": "Bracelet",
          "description": "Product Description",
          "image": "bracelet.jpg",
          "price": 15,
          "category": "12345",
          "quantity": "Process",
          "inventoryStatus": "INSTOCK",
          "rating": 4
        }
       
      
      ]


    
    this.countries = [
      { name: 'January',  },
      { name: 'February',  },
      { name: 'March',  },
      { name: 'April',  },
      { name: 'May',  },
      { name: 'June', },
      { name: 'August',  },
      { name: 'September',  },
      { name: 'November',  },
      { name: 'December',  }
    ];




    this.activeItem = this.items[0];
  }
  abc: MenuItem[] = [];
  home!: MenuItem;

  ngOnInit() {
    // basic table
    this.abc = [
      { label: 'Item' }
    ];
    this.home = { icon: 'pi pi-home' };
  }
//upload file
onFileSelected(event:any) {
  this.selectedFile = event.target.files[0] ?? null;
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


