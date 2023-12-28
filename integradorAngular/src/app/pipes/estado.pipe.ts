import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'estado'
})
export class EstadoPipe implements PipeTransform {

    transform(value: any, ...args: unknown[]): unknown {
        let estado = "";
        if(value=="true"){
            estado = "Normal";
        }else{
            estado = "Cancelado";
        }
        return estado;
    }

}
