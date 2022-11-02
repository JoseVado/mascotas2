import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Timestamp } from 'firebase/firestore';
import { Mascota } from 'src/app/modelo/mascota.model';
import { FileUploadService } from 'src/app/servicios/fileUpload.service';
import { mascotaServicio } from 'src/app/servicios/masctoa.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  mascota: Mascota = {
    id: '',
    nombre: '',
    enfermedades: '',
    descripcion: '',
    actualizado: new Timestamp(0, 0),
  };
  @ViewChild('mascotaForm') mascotaForm: NgForm;
  constructor(
    private mascotaServicio: mascotaServicio,
    private router: Router,
    private uploadService: FileUploadService
  ) {}

  ngOnInit(): void {}

  agregar({ value, valid }: { value: Mascota; valid: boolean }) {
    if (!valid) {
      alert('Ingrese los datos correctamente');
    } else {
      //Agregar
      value.actualizado = Timestamp.now();
      value.foto = this.uploadService.basePath + this.archivo.name;
      
      this.uploadService.pushFileToStorage(this.archivo);
      this.mascotaServicio.agregarMascota(value);
      
      this.mascotaForm.resetForm();
      this.router.navigate(['/']);
    }
  }

  capturarFile(event: Event) {
    this.archivo = (<HTMLInputElement>event.target).files[0];
  }

  archivo: File;


  
}
