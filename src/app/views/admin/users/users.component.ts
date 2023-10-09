import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  allUsers: any = [];
  errorMsg: string = '';
  filterBy = {
    id: 0,
    username: '',
    name: '',
  };
  constructor(private usersService: UsersService) {
    this.usersService.getAllUsers().subscribe(
      (res) => (this.allUsers = res),
      (error) => (this.errorMsg = error.message)
    );
  }

  delete(id: number) {
    this.usersService.deleteUsers(id).subscribe(
      (res) =>
        (this.allUsers = this.allUsers.filter((user: any) => {
          return user.id !== id;
        })),
      (error) => (this.errorMsg = error.message)
    );
  }

  filtredUsers() {
    let filtredUsers = this.allUsers;

    if (this.filterBy.id) {
      filtredUsers = filtredUsers.filter(
        (user: any) => user.id === this.filterBy.id
      );
    }

    if (this.filterBy.username) {
      filtredUsers = filtredUsers.filter((user: any) =>
        user.username.includes(this.filterBy.username)
      );
    }

    if (this.filterBy.name) {
      filtredUsers = filtredUsers.filter(
        (user: any) =>
          user.name.firstname.toLowerCase().includes(this.filterBy.name.toLowerCase()) ||
          user.name.lastname.toLowerCase().includes(this.filterBy.name.toLowerCase())
      );
    }

    return filtredUsers;
  }
}
