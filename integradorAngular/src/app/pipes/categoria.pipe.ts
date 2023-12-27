import { Pipe, PipeTransform } from '@angular/core';
import { categoriasData } from '../data/categorias';
@Pipe({
  name: 'categoria'
})
export class CategoriaPipe implements PipeTransform {

  transform(value: number|"", ...args: unknown[]): unknown {
    return categoriasData.find(item=>item.id==value)?.name;
  }

}
