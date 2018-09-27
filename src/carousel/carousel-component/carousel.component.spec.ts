import { CarouselList } from './carousel.model';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel-component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CarouselDataService} from '../carousel-data.service';
import { CarouselItemElementDirective } from './carousel-item-element.directive';
import { CarouselItemDirective } from './carousel-item.directive';
import {HttpClient, HttpClientModule} from '@angular/common/http';

describe('CarouselComponent', () => {
    let component: CarouselComponent;
    let fixture: ComponentFixture<CarouselComponent>;
    let el: HTMLElement;
    const items = [
        { title: 'Slide 1', url: ''},
        { title: 'Slide 2', url: '' },
        { title: 'Slide 3', url: '' },
      ];
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                BrowserAnimationsModule,
                HttpClientModule
              ],
              declarations: [
                CarouselComponent,
                CarouselItemElementDirective,
                  CarouselItemDirective,
              ],
              providers: [CarouselDataService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CarouselComponent);
        component = fixture.componentInstance;
        el = fixture.nativeElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });


});
