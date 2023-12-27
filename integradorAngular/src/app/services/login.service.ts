import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
    providedIn: 'root'
})
export class LoginService implements OnInit{

    constructor(private _NgbModal: NgbModal,private router:Router) { }

    users = [
        {
            email:"admin@admin.com",
            password:"admin"
        },  
    ]

    ngOnInit(): void {

    }

    login(emailInput:string,passwordInput:string,rememberInput:boolean){
        if(this.users.find(item=>item.email==emailInput&&item.password==passwordInput)){
            rememberInput?localStorage.setItem('loggedin','true'):sessionStorage.setItem('loggedin','true');
            this._NgbModal.dismissAll();
        }else{
            alert("Credenciales erroneas.");
        }
    }

}
