import { Pipe, PipeTransform } from '@angular/core';
import { ProductService } from '../services/product-service.service';

@Pipe({
    name: 'product'
})
export class ProductPipe implements PipeTransform {



    constructor(private productService:ProductService){}

    transform(value: number, ...args: unknown[]): unknown {
        var output = "";
        this.productService.getProductById(value).subscribe(
            (res)=>output=res.name
        )
        return output;
    }

}
