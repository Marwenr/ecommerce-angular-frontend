import { Component } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  allCategories: any = [];
  allProducts: any = [];
  errorMsg: string = '';
  categoryPages: Map<string, number> = new Map<string, number>();
  itemsPerPage:number = 3
  constructor(private storeService: StoreService) {
    this.storeService.GetAllProducts().subscribe(
      (res) => (this.allProducts = res),
      (error) => (this.errorMsg = error)
    );
    this.storeService.getAllCategories().subscribe(
      (res) => (this.allCategories = res),
      (error) => (this.errorMsg = error)
    );
    if(window.innerWidth < 600) {
      this.itemsPerPage = 1;
    }
    if(window.innerWidth > 600 && window.innerWidth < 992) {
      this.itemsPerPage = 2;
    };
  }

  updateCategoryPage(category: string, page: number) {
    this.categoryPages.set(category, page);
  }

  getCurrentPage(category: string): number {
    return this.categoryPages.get(category) || 1; // Default to page 1 if not found
  }

  filtredProductsByCategory(category: string) {
    let products = []
    products = this.allProducts.filter((product: any) => (product.category === category))
    return products
  }
}
