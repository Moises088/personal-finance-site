import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutProjectComponent } from './pages/about-project/about-project.component';
import { SiteComponent } from './site.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeAppComponent } from './components/home-app/home-app.component';
import { InfoContainerComponent } from './components/info-container/info-container.component';
import { CardTechnologyComponent } from './components/card-technology/card-technology.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutProjectComponent,
    SiteComponent,
    HomeAppComponent,
    InfoContainerComponent,
    CardTechnologyComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class SiteModule { }
