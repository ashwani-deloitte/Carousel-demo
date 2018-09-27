import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CarouselModule } from '../carousel/carousel.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
