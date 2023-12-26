import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipesExample'
})
export class PipesExamplePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
