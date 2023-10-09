import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  productId: number;
  product: any;
  quantity: number = 1;
  constructor(private route: ActivatedRoute, private storeService: StoreService) {
    this.productId = this.route.snapshot.params['productId']
    this.storeService.getProduct(this.productId).subscribe(
      res => this.product = res,
      error => console.log(error)
    )
  }

  addProductToCart() {
    this.storeService.addNewCart({
      product: this.product,
      quantity: this.quantity,
    })
  }
}
