import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoContainerComponent } from './components/info-container/info-container.component';



@NgModule({
  declarations: [
    InfoContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InfoContainerComponent
  ]
})
export class SharedModule { }
