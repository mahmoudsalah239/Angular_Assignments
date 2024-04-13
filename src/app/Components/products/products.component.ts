import { Component } from '@angular/core';


import { User } from './../../Interfaces/user';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  Users: User[] = [
    { Id: 1, name: 'MSalah', age: 25, email: 'm@gmail.com', salary: 5000 },
    { Id: 2, name: 'Abdallah', age: 25, email: 'm@gmail.com', salary: 5000 },
    { Id: 3, name: 'Baha', age: 25, email: 'm@gmail.com', salary: 5000 },
    { Id: 4, name: 'Syed', age: 25, email: 'm@gmail.com', salary: 5000 },
    { Id: 5, name: 'Ali', age: 25, email: 'm@gmail.com', salary: 5000 },
  ];
}
