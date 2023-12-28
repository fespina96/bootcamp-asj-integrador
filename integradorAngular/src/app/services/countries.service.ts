import { Injectable } from '@angular/core';
import statesData from '../data/states.json';
import countriesData from '../data/countries.json';
@Injectable({
    providedIn: 'root'
})
export class CountriesService {

    constructor() { }

    getStates(countryId:number|""){
        return statesData.filter((item:any)=>item.country_id==countryId);
    }

    getStateById(stateId:number|""){
        return statesData.filter((item:any)=>item.id==stateId)[0];
    }

    getCountries(){
        return countriesData;
    }

    getCountryById(countryId:number|""){
        return countriesData.filter((item:any)=>item.id==countryId)[0];
    }
}
