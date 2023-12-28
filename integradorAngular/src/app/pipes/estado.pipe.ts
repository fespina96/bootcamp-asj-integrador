import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'estado'
})
export class EstadoPipe implements PipeTransform {

    transform(value: boolean, ...args: unknown[]): unknown {
        let estado:string = "";
        if(value){
            estado = "Normal";
        }else{
            estado = "Cancelado";
        }
        return estado;
    }

}
