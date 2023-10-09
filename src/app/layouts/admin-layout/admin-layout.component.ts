import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/views/services/users.service';



@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})

export class AdminLayoutComponent {
  currentUser: any;
  constructor(private us: UsersService, private router: Router) {
    this.currentUser = this.us.isLoggedIn()
  }

  logout() {
    localStorage.removeItem('user')
    this.router.navigate(['/adminLogin']);
  }
}
