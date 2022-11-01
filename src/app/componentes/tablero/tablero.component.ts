import { Component, OnInit } from '@angular/core';
import { Timestamp } from 'firebase/firestore';
import { Mascota } from 'src/app/modelo/mascota.model';
import { mascotaServicio } from 'src/app/servicios/masctoa.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css'],
})
export class TableroComponent implements OnInit {
  mascota: Mascota = {
    id: '',
    nombre: '',
    enfermedades: '',
    descripcion: '',
    actualizado: new Timestamp (0 , 0),
    foto: '',
  };
  mascotas: Mascota[];
  
  constructor(private mascotaServicio: mascotaServicio,
  ) { }

  ngOnInit(): void {
    this.mascotaServicio.getmascotas().subscribe(mascotas => {
      this.mascotas = mascotas;
      //this.timestampTrasnform();
    })
    
  }

}
