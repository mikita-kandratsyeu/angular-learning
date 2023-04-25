// eslint-disable-next-line import/named
import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product';

@Pipe({
  name: 'filterProducts',
})
export class FilterProductsPipe implements PipeTransform {
  transform(products: IProduct[], search: string) {
    if (search.length === 0) {
      return products;
    }

    return products.filter(({ title }) => title.toLowerCase().includes(search.toLowerCase()));
  }
}
