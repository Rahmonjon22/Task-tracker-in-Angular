import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebardComponent } from './components/sidebard/sidebard.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebardComponent
  ]
})
export class SharedModule { }
