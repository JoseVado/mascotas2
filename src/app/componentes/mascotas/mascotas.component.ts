import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Timestamp } from 'firebase/firestore';
import { Mascota } from 'src/app/modelo/mascota.model';
import { FileUploadService } from 'src/app/servicios/fileUpload.service';
import { mascotaServicio } from 'src/app/servicios/masctoa.service';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css'],
})
export class MascotasComponent implements OnInit {
  mascota: Mascota;
  id: string;
  linkGuardado: string;
  constructor(
    private mascotaServicio: mascotaServicio,
    private router: Router,
    private route: ActivatedRoute,
    private fileUploadServicio: FileUploadService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);

    this.mascotaServicio.getMascota(this.id).subscribe((mascota) => {
      this.mascota = mascota;
      this.linkGuardado = this.mascota.foto;
      this.foto();
    });
  }

  foto() {
    this.fileUploadServicio
      .getFileOfStorage(this.mascota.foto)
      .then((url) => {
        this.mascota.foto = url;
      })
      .catch((error) => {
        console.log(error);
        return '../../assets/img/logo.png';
      });
  }
  eliminar() {
    if (confirm('¿Seguro que desea eliminar el cliente?')) {
      this.fileUploadServicio.deleteOfStorage(this.linkGuardado);
      this.mascotaServicio.eliminarMascota(this.mascota);

      this.router.navigate(['/']);
    }
  }
}
