import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfiguracionServicio } from 'src/app/servicios/configuracion.service';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css'],
})
export class CabeceroComponent implements OnInit {
  path: string = '../../assets/img/logo.png';
  alttext: string = 'logo';

  isLogin: boolean = false;
  permitirRegistro: boolean;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private configuracionServicio: ConfiguracionServicio
  ) {}

  ngOnInit(): void {
    this.loginService.getAuth().subscribe((auth) => {
      if (auth) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });

    this.configuracionServicio.getConfiguracion().subscribe((configuracion) => {
      this.permitirRegistro = configuracion.crearUsuario;
    });
  }

  salir() {
    this.loginService.logout();
    this.isLogin = false;
    this.router.navigate(['/login']);
  }
}
