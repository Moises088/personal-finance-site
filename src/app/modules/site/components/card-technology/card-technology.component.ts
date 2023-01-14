import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-technology',
  templateUrl: './card-technology.component.html',
  styleUrls: ['./card-technology.component.scss']
})
export class CardTechnologyComponent {

  @Input() title: string = '';
  @Input() img: string = '';
}
