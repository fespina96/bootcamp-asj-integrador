import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './components/template/login/login.component';
import { LoginService } from './services/login.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
    title = 'integradorAngular';

    loggedIn = false;

    constructor(private loginService:LoginService, private modalCall:NgbModal, private route:Router){}


    ngOnInit(): void {
        this.checkForUser();
    }

    checkForUser(){
        if(localStorage.getItem('loggedin')||sessionStorage.getItem('loggedin')){
            this.loggedIn=true;
        }else{
            this.loggedIn=false;
            this.loginModal();
            this.modalCall.activeInstances.subscribe(
                (Error)=>{
                    this.checkForUser();
                    this.route.navigateByUrl('/home');
                }
                )
        }
    }

    loginModal() {
        this.modalCall.open(LoginComponent, {
            windowClass: 'modal-job-scrollable',
            backdrop:"static",
            keyboard:false,
            beforeDismiss:()=>{this.checkForUser;return true;}
        });
    }

}
