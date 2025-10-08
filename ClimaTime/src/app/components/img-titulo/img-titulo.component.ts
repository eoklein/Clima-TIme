import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { Weather } from '../../models/wheater-response.model';

@Component({
  selector: 'app-img-titulo',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './img-titulo.component.html',
  styleUrls: ['./img-titulo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgTituloComponent {

  clima = input<Weather | null>(null);

}
