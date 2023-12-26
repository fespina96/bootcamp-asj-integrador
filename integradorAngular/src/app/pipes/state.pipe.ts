import { Pipe, PipeTransform } from '@angular/core';
import { CountriesService } from '../services/countries.service';

@Pipe({
    name: 'state'
})
export class StatePipe implements PipeTransform {

    constructor(private countryService:CountriesService){}

    transform(value: number, ...args: unknown[]): unknown {
        let state = this.countryService.getStateById(value);
        return state.name;
    }

}
