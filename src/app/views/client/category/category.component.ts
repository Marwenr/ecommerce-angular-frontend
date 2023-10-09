import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  category: string = ''
  productsByCategory: any = []
  constructor(private route: ActivatedRoute, private storeService: StoreService) {
    this.category = this.route.snapshot.params['category']
    this.storeService.getCategoryByName(this.category).subscribe(
      res => this.productsByCategory = res,
      error => console.log(error)
    )
  }
}
