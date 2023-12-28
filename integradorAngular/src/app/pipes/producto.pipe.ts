import { Pipe, PipeTransform } from '@angular/core';
import { productosData } from '../data/productos';

@Pipe({
  name: 'producto'
})
export class ProductoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return productosData.find(item=>item.cod_sku==value)?.name_prod;
  }

}
