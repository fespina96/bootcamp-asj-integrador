import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class CountriesService {

    statesUrl = "http://localhost:8080/state";
    countriesUrl = "http://localhost:8080/country";

    constructor(private http:HttpClient) { }

    getCountryStatesById(id:number):Observable<any>{
        return this.http.get(this.countriesUrl+"/"+id+"/states");
    }

    getStateById(id:number){
        return this.http.get(this.statesUrl+"/"+id);
    }

    getCountries():Observable<any>{
        return this.http.get(this.countriesUrl);
    }

    getCountryById(id:number){
        return this.http.get(this.countriesUrl+"/"+id);
    }
}
