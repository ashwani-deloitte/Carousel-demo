import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel-component/carousel-component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {CarouselDataService} from './carousel-data.service';
import { CarouselItemElementDirective } from './carousel-component/carousel-item-element.directive';
import { CarouselItemDirective } from './carousel-component/carousel-item.directive';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  declarations: [
    CarouselComponent,
    CarouselItemElementDirective,
    CarouselItemDirective,
  ],
  providers: [CarouselDataService],
  exports: [
    CarouselComponent,
    CarouselItemDirective
  ]
})
export class CarouselModule { }
