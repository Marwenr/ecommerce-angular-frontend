import { Component } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  allUsers:any = []
  allCarts:any = []
  constructor(private storeService: StoreService, private usersServvice: UsersService) {
    this.usersServvice.getAllUsers().subscribe(
      res => this.allUsers = res,
      error => console.log(error)
    )
    this.storeService.getAllCarts().subscribe(
      res => this.allCarts = res,
      error => console.log(error)
    )
  }
}
