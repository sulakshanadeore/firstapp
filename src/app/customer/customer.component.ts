import { Component } from '@angular/core';
import { CustomerModel } from 'src/customerModel';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
   custname:string="John";
// customers:CustomerModel[]=[
// new CustomerModel(1,"Ankita","Pune"),
// new CustomerModel(2,"Sunita","Chennai"),
// new CustomerModel(3,"Ambika","Bangalore")
// ];

customers:CustomerModel[]=[];

}
