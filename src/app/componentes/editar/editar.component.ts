import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  hayFoto: string = '';
  id: string;
  @ViewChild('mascotaForm') mascotaForm: NgForm;
  constructor(
    private mascotaServicio: mascotaServicio,
    private router: Router,
    private uploadService: FileUploadService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.mascotaServicio.getMascota(this.id).subscribe((mascota) => {
        this.mascota = mascota;
      });
    }
  }

  agregar({ value, valid }: { value: Mascota; valid: boolean }) {
    if (!valid) {
      alert('Ingrese los datos correctamente');
    } else {
      //Preparación de archivos
      value.actualizado = Timestamp.now();

      if (this.id) {
        //Modificar

        value.id = this.id;
        if (this.archivo) {
          this.uploadService.deleteOfStorage(this.mascota.foto);
          value.foto = this.actualizarFoto(this.archivo);
        }
        this.mascotaServicio.modificarMascota(value);

      } else {
        //Agregar

        value.foto = this.actualizarFoto(this.archivo);
        this.mascotaServicio.agregarMascota(value);
      }

      this.mascotaForm.resetForm();
      this.router.navigate(['/']);
    }
  }

  capturarFile(event: Event) {
    this.archivo = (<HTMLInputElement>event.target).files[0];
  }

  actualizarFoto(file: File) {
    this.uploadService.pushFileToStorage(this.archivo);
    return this.uploadService.basePath + this.archivo.name;
  }

  archivo: File;
}
