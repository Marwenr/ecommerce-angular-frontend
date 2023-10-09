import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/views/services/users.service';

@Component({
  selector: 'app-login-admin-layout',
  templateUrl: './login-admin-layout.component.html',
  styleUrls: ['./login-admin-layout.component.css']
})
export class LoginAdminLayoutComponent {
  errorMsg: string = '';
  constructor(private usersSrvice: UsersService, private router: Router) {}

  login(f: any) {
    let user = f.value;
    this.usersSrvice.login(user).subscribe(
      res => {
        this.usersSrvice.setUserInStorage(res)
        this.router.navigate(['/admin']);
      },
      error => this.errorMsg = error.error
    )
  }
}
