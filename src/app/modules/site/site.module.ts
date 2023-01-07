import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutProjectComponent } from './pages/about-project/about-project.component';
import { SiteComponent } from './site.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutProjectComponent,
    SiteComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule
  ]
})
export class SiteModule { }
