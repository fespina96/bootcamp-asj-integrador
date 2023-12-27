import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'integradorAngular';

    loggedIn = localStorage.getItem('loggedin')||sessionStorage.getItem('loggedin');
}
