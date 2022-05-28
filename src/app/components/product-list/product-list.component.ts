import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service'
import {Product} from "../../models/product.model";
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products?: Product[]
  page = 1;
  size = 3;
  total ?: number;

  constructor(private productService: ProductService,
  private storageService:StorageService) {
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(): void {
    this.productService.getAll(this.page,this.size)
      .subscribe({
        next: (data) => {
          this.products = data.content
          this.page = data.pageable.pageNumber+1;
          this.total = data.totalElements;
          console.log(this.products);
        },
        error: (e) => console.error(e)
      });
  }

  handlePageChange(event: number) {
    this.page = event;
    this.getAll()
  }
}
