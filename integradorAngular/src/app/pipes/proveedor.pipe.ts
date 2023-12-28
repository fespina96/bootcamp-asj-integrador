import { Pipe, PipeTransform } from '@angular/core';
import { ProveedoresService } from '../services/proveedores-service.service';

@Pipe({
    name: 'proveedor'
})
export class ProveedorPipe implements PipeTransform {

    constructor(private proveedoresService:ProveedoresService){}

    transform(value: string, ...args: unknown[]): unknown {
        let proveedor = this.proveedoresService.getProovedorById(value);
        return proveedor.raz_social;
    }

}
