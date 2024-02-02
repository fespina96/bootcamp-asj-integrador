import { OnInit, Pipe, PipeTransform } from '@angular/core';
import { ProductService } from '../services/product-service.service';
import { Product } from '../interfaces/product';

@Pipe({
    name: 'product'
})
export class ProductPipe implements PipeTransform,OnInit {

    constructor(private productService:ProductService) {}

    prodList:Array<Product> = [];

    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            (res)=>this.prodList=res
        )
    }

    transform(value: number, ...args: unknown[]): unknown {
        return this.prodList.find((item)=>item.id==value)?.name;
    }

}
