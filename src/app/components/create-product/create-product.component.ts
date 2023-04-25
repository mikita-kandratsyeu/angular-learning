import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
})
export class CreateProductComponent {
  form = new FormGroup({
    title: new FormControl<string>('', [Validators.required, Validators.minLength(6)]),
    price: new FormControl<number>(0),
    description: new FormControl<string>(''),
    category: new FormControl<string>(''),
    image: new FormControl<string>('https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'),
    ratingRate: new FormControl<number>(0),
    ratingCount: new FormControl<number>(0),
  });

  constructor(private productService: ProductService, private modalService: ModalService) {}

  get title() {
    return this.form.controls.title as FormControl;
  }

  submit() {
    this.productService
      .create({
        id: Math.floor(Math.random() * 100),
        title: this.form.value.title as string,
        price: this.form.value.price as number,
        description: this.form.value.description as string,
        category: this.form.value.category as string,
        image: this.form.value.image as string,
        rating: {
          rate: this.form.value.ratingRate as number,
          count: this.form.value.ratingCount as number,
        },
      })
      .subscribe(() => {
        this.modalService.close();
      });
  }
}
