import { Component } from '@angular/core';

@Component({
  selector: 'app-about-project',
  templateUrl: './about-project.component.html',
  styleUrls: ['./about-project.component.scss']
})
export class AboutProjectComponent {

  logos: Array<{ img: string, title: string }> = [
    { img: './assets/logos/angular-mini.png', title: 'Angularjs' },
    { img: './assets/logos/nestjs-mini.svg', title: 'Nestjs' },
    { img: './assets/logos/react-mini.png', title: 'React Native' },
    { img: './assets/logos/sql.png', title: 'MySQL' },
    { img: './assets/logos/expo.png', title: 'Expo' },
    { img: './assets/logos/github.png', title: 'Github' },
    { img: './assets/logos/ts.png', title: 'Typescript' },
  ]
}
