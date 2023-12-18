import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //Importante para saber que hay en la url

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'integradorAngular';
}
