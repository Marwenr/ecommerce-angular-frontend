import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/views/services/users.service';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.css'],
})
export class ClientLayoutComponent {
  currentUser: any;
  constructor(public usersService: UsersService, private router:Router) {}

  logout() {
    localStorage.removeItem('user')
    this.router.navigate(['/login']);
  }
}
