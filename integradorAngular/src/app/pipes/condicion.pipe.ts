import { Pipe, PipeTransform } from '@angular/core';
import { condicionData } from '../data/condicion';

@Pipe({
    name: 'condicion'
})
export class CondicionPipe implements PipeTransform {

    transform(value: number|"", ...args: unknown[]): unknown {
        return condicionData.find(item=>item.id==value)?.name;
    }

}
