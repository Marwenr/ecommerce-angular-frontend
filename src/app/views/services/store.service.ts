import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  products: any[] = []
  constructor(private http: HttpClient){}

  GetAllProducts() {
    return this.http.get('https://fakestoreapi.com/products')
  }

  getProduct(id: number) {
    return this.http.get('https://fakestoreapi.com/products/'+id)
  }

  getAllCategories() {
    return this.http.get('https://fakestoreapi.com/products/categories')
  }

  getCategoryByName(category: string) {
    return this.http.get('https://fakestoreapi.com/products/category/'+category)
  }

  addProduct(product: object) {
    return this.http.post('https://fakestoreapi.com/products', product)
  }

  deleteProduct(id: number) {
    return this.http.delete('https://fakestoreapi.com/products/'+id)
  }

  updateProduct(id: number, productUpdated: any) {
    return this.http.put('https://fakestoreapi.com/products/'+id, productUpdated)
  }

  getAllCarts() {
    return this.http.get('https://fakestoreapi.com/carts?sort=desc')
  }

  deleteCart(id: number) {
    return this.http.delete('https://fakestoreapi.com/carts/'+id)
  }

  addNewCart(product: any) {
    this.products.push(product)
  }
}
