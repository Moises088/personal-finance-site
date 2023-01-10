import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-container',
  templateUrl: './info-container.component.html',
  styleUrls: ['./info-container.component.scss']
})
export class InfoContainerComponent {

  @Input() backgroundColor!: string;
  @Input() image!: string;
  @Input() flexDirection: 'row' | 'row-reverse' = 'row';
  @Input() title: string = '';
  @Input() message: string = '';

  getTitleClass() {
    if (this.backgroundColor == "#FFF") {
      return 'text-black'
    }

    return ''
  }
}
