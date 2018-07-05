import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {StartComponent} from "./start/start.component";
import { HeaderComponent } from './header/header.component'
import {MatButtonModule} from '@angular/material/button';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    StartComponent,
    HeaderComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [StartComponent]
})
export class AppModule { }
