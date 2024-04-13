import { Component } from '@angular/core';
import { UserserviceService } from '../../Services/userservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  frinds: string[] = [];

  constructor(_Userservice:UserserviceService) {
    // let x = new UserserviceService();
    this.frinds = _Userservice.frinds;
  }
}
