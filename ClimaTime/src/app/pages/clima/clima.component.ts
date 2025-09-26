import { Component, inject, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss']
})
export class ClimaComponent implements OnInit {

  navegador = inject(Router);

  constructor() { }

  ngOnInit() {
  }

  navegarParaTelaDePesquisa() {
    this.navegador.navigate(['/pesquisa']);
  }


}