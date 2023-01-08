import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutProjectComponent } from './pages/about-project/about-project.component';
import { SiteComponent } from './site.component';
import { CoreModule } from 'src/app/core/core.module';
import { HomeAppComponent } from './pages/home/components/home-app/home-app.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutProjectComponent,
    SiteComponent,
    HomeAppComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    CoreModule
  ]
})
export class SiteModule { }
