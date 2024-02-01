import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class CountriesService {

    private statesUrl = "http://localhost:8080/state";
    private countriesUrl = "http://localhost:8080/country";

    constructor(private http:HttpClient) { }

    getCountryStatesById(id:any):Observable<any>{
        return this.http.get(this.countriesUrl+"/"+id+"/states");
    }

    getStateById(id:any):Observable<any>{
        return this.http.get(this.statesUrl+"/"+id);
    }

    getCountries():Observable<any>{
        return this.http.get(this.countriesUrl);
    }

    getCountryById(id:any):Observable<any>{
        return this.http.get(this.countriesUrl+"/"+id);
    }
}
