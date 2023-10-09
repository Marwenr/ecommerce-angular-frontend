import { Component } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css'],
})
export class CartsComponent {
  allCarts: any = [];
  errorMsg: string = '';
  filterBy = {
    dateFrom: '',
    dateTo: '',
    userId: 0,
  };
  constructor(private storeService: StoreService) {
    this.storeService.getAllCarts().subscribe(
      (res) => (this.allCarts = res),
      (error) => (this.errorMsg = error)
    );
  }

  filtredCarts() {
    let filtredCarts = this.allCarts;

    if (this.filterBy.dateFrom || this.filterBy.dateTo) {
      filtredCarts = filtredCarts.filter(
        (cart: any) =>
          (!new Date(this.filterBy.dateFrom).getTime() ||
            new Date(cart.date).getTime() >=
              new Date(this.filterBy.dateFrom).getTime()) &&
          (!new Date(this.filterBy.dateTo).getTime() ||
            new Date(cart.date).getTime() <
              new Date(this.filterBy.dateTo).getTime())
      );
    }

    if (this.filterBy.userId) {
      filtredCarts = filtredCarts.filter((cart: any) => {
        return cart.userId === this.filterBy.userId;
      });
    }

    return filtredCarts;
  }

  delete(id: number) {
    this.storeService.deleteCart(id).subscribe(
      (res: any) =>
        (this.allCarts = this.allCarts.filter((cart: any) => {
          return cart.id !== id;
        })),
      (error) => console.log(error)
    );
  }
}
