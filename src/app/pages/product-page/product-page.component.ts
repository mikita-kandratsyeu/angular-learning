// eslint-disable-next-line import/named
import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent implements OnInit {
  title = 'angular app';

  isFetching = false;

  term = '';

  constructor(public productsService: ProductService, public modalService: ModalService) {}

  ngOnInit(): void {
    this.isFetching = true;
    this.productsService.getAll().subscribe(() => {
      this.isFetching = false;
    });
  }
}
