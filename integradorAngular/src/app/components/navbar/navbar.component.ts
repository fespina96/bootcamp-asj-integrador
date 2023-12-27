import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { LoginComponent } from '../login/login.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

    constructor(private loginService:LoginService, private _NgbModal:NgbModal){}

    ngOnInit(): void {
        if(!localStorage.getItem('loggedin')&&!sessionStorage.getItem('loggedin')){
            this.loginModal();
        }
    }

    loginModal() {
        this._NgbModal.open(LoginComponent, {
            windowClass: 'modal-job-scrollable',
            backdrop:"static",
            keyboard:false
        });
    }

    clearStorage(){
        localStorage.clear();
        sessionStorage.clear();
    }
}
