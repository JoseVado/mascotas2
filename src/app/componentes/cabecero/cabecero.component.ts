import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css'],
})
export class CabeceroComponent implements OnInit {
  path: string = '../../assets/img/logo.png';
  alttext: string = 'logo';

  isLogin: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  salir() {
    this.isLogin = false;
    this.router.navigate(['/login']);
  }
}
