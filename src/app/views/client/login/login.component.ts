import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMsg: string = '';
  constructor(private usersSrvice: UsersService, private router: Router) {}

  login(f: any) {
    let user = f.value;
    this.usersSrvice.login(user).subscribe(
      res => {
        this.usersSrvice.setUserInStorage(res)
        this.router.navigate(['/']);
      },
      error => this.errorMsg = error.error
    )
  }
}
