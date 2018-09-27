import { Component, OnInit } from '@angular/core';
import { CarouselDataService } from '../carousel/carousel-data.service';
import { filter } from 'rxjs/internal/operators/filter';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public items = [];
  constructor(
    private carouselService: CarouselDataService) {

  }
  ngOnInit() {
    this.carouselService.getCarouselData()
      .pipe(filter(val => val.length > 0))
      .subscribe((response) => {
        this.items = response;
      });

  }

}
