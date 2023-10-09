import { Component } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css'],
})
export class WarehouseComponent {
  allProducts: any = [];
  allCategories: any = [];
  errorMsg: string = '';
  successMsg: string = '';
  articleSelected = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    image: '',
    category: '',
  };
  filtredData = {
    name: '',
    category: 'All Category',
  };

  constructor(private storeService: StoreService) {
    this.storeService.GetAllProducts().subscribe(
      (res) => (this.allProducts = res),
      (error) => (this.errorMsg = error.message)
    );
    this.storeService.getAllCategories().subscribe(
      (res) => (this.allCategories = res),
      (error) => (this.errorMsg = error.message)
    );
  }

  resetSuccessMsg() {
    setTimeout(() => {
      this.successMsg = '';
    }, 3000);
  }

  add(f: any) {
    let article = f.value;
    this.storeService.addProduct(article).subscribe(
      (res) => {
        this.allProducts.push(res);
        this.successMsg = 'Article Added';
        f.reset();
        this.resetSuccessMsg();
      },
      (error) => (this.errorMsg = error.message)
    );
  }

  delete(id: number) {
    this.storeService.deleteProduct(id).subscribe(
      (res) => {
        this.allProducts = this.allProducts.filter(
          (product: any) => product.id !== id
        );
      },
      (error) => (this.errorMsg = error.message)
    );
  }

  modalUpdate(id: number, article: any) {
    this.articleSelected.id = id;
    this.articleSelected.title = article.title;
    this.articleSelected.category = article.category;
    this.articleSelected.image = article.image;
    this.articleSelected.price = article.price;
    this.articleSelected.description = article.description;
  }

  update(form: any) {
    let article = form.value;
    this.storeService.updateProduct(this.articleSelected.id, article).subscribe(
      (res) => {
        let index = this.allProducts.findIndex(
          (product: any) => product.id === this.articleSelected.id
        );
        this.allProducts[index] = res;
        this.successMsg = 'Article Updated';
        this.resetSuccessMsg();
      },
      (error) => (this.errorMsg = error.message)
    );
  }

  filtredProducts() {
    let filtredProducts = this.allProducts;

    if (this.filtredData.name) {
      const title = this.filtredData.name.toLowerCase();
      filtredProducts = filtredProducts.filter((product: any) =>
        product.title.toLowerCase().includes(title)
      );
    }

    if (this.filtredData.category !== "All Category") {
      filtredProducts = filtredProducts.filter(
        (product: any) => product.category === this.filtredData.category
      );
    }

    return filtredProducts;
  }
}
