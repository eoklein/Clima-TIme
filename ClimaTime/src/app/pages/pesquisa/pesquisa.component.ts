import { Component, OnInit } from '@angular/core';
import { AppClimaContainerComponent } from "../../components/clima-conteiner/clima-conteiner.component";

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss'],
  imports: [ AppClimaContainerComponent ],
  standalone: true,
})
export class PesquisaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}