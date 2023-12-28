import { Pipe, PipeTransform } from '@angular/core';
import { CountriesService } from '../services/countries.service';

@Pipe({
    name: 'country'
})
export class CountryPipe implements PipeTransform {

    constructor(private countryService:CountriesService){}

    transform(value: number|"", ...args: unknown[]): unknown {
        let country = this.countryService.getCountryById(value);
        return country.name;
    }

}
