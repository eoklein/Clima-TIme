import { ChangeDetectionStrategy, Component, OnInit, output } from '@angular/core';


@Component({
  selector: 'app-app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss'],
  imports: [],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppButtonComponent {

  onClick = output<void>();

  

}
