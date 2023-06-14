import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404pageComponent } from './pages/error404page/error404page.component';



@NgModule({
  declarations: [
    Error404pageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Error404pageComponent
  ]
})
export class SharedModule { }
