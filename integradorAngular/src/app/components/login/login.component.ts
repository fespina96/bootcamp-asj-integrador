import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../../services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {

    constructor(private _NgbActiveModal: NgbActiveModal, private loginService:LoginService){}

    get activeModal() {
        return this._NgbActiveModal;
    }

    loginInput = {
        email:"",
        password:"",
        remember:""
    }

    formProcedure(formInput:NgForm){
        if(formInput.valid){
            this.loginService.login(formInput.value.email,formInput.value.password,formInput.value.remember);
        }else{
            alert("Ingrese sus credenciales.");
        }
        console.log(formInput);
    }
}
