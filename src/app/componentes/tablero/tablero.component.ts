import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/modelo/mascota.model';
import { FileUploadService } from 'src/app/servicios/fileUpload.service';
import { mascotaServicio } from 'src/app/servicios/masctoa.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css'],
})
export class TableroComponent implements OnInit {
  mascotas: Mascota[];

  constructor(
    private mascotaServicio: mascotaServicio,
    private fileUploadServicio: FileUploadService
  ) {}

  ngOnInit(): void {
    this.mascotaServicio.getMascotas().subscribe((mascotas) => {
      this.mascotas = mascotas;
      this.fotos();
    });
  }

  fotos() {
    this.mascotas.forEach((mascota: Mascota) => {
      this.fileUploadServicio
        .getFileOfStorage(mascota.foto)
        .then((url) => {
          mascota.foto = url;
        })
        .catch((error) => {
          console.log(error);
          mascota.foto =  '../../assets/img/logo.png';
        });
    });
  }
}
