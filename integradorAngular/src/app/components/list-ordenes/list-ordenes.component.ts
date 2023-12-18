import { Component } from '@angular/core';
import { ordenes } from '../../data/ordenes';
@Component({
  selector: 'app-list-ordenes',
  templateUrl: './list-ordenes.component.html',
  styleUrl: './list-ordenes.component.css'
})
export class ListOrdenesComponent {
    ordenesList = ordenes;
}
