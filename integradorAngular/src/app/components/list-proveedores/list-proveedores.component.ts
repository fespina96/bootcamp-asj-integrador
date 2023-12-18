import { Component } from '@angular/core';
import { proveedores } from '../../data/proveedores';

@Component({
  selector: 'app-list-proveedores',
  templateUrl: './list-proveedores.component.html',
  styleUrl: './list-proveedores.component.css'
})
export class ListProveedoresComponent {
    proveedoresList = proveedores;
}
