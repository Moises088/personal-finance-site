import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutProjectComponent } from './pages/about-project/about-project.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about-project", component: AboutProjectComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
