import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { Main, Weather } from '../../models/wheater-response.model';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-min-max',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './min-max.component.html',
  styleUrls: ['./min-max.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinMaxComponent {
[x: string]: any;

  main = input<Main | null>(null);

}
