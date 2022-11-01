import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/modelo/mascota.model';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css'],
})
export class TableroComponent implements OnInit {
  mascota: Mascota = {
    id: '1',
    nombre: 'Juan',
    enfermedades: 'asdfas',
    actualizado: 'nunca',
    modificado: 'nunca',
    foto: '../../assets/img/conejo.jpg',
  };
  mascotas: Mascota[] = [this.mascota, this.mascota];
  constructor() {}

  ngOnInit(): void {}
}
