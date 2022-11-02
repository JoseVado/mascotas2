import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { map, Observable } from "rxjs";
import { ConfiguracionServicio } from "../servicios/configuracion.service";

@Injectable()
export class ConfiguracionGuard implements CanActivate{
    constructor(
        private router: Router,
        private configuracionServicio: ConfiguracionServicio
    ) { }
    
    canActivate(): Observable<boolean> {
        return this.configuracionServicio.getConfiguracion().pipe(
          map( config => {
            if (config.crearUsuario) {
              return true;
            } else {
                this.router.navigate(['/login']);
                return false;
            }
          })
        );
    }
}