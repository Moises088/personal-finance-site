import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterSiteComponent } from './components/footer-site/footer-site.component';
import { NavbarSiteComponent } from './components/navbar-site/navbar-site.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    FooterSiteComponent,
    NavbarSiteComponent
  ],
  exports: [
    FooterSiteComponent,
    NavbarSiteComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
