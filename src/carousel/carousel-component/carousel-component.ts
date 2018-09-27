import {
    AfterViewInit, AfterContentInit, Component, ContentChildren, Directive, ElementRef, Input,
    OnInit, QueryList, TemplateRef, ViewChild, ViewChildren
} from '@angular/core';
import { CarouselItemDirective } from '../carousel-component/carousel-item.directive';
import { CarouselItemElementDirective } from '../carousel-component/carousel-item-element.directive';
import { animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style } from '@angular/animations';

@Component({
    selector: 'carousel',
    templateUrl: './carousel-component.html',
    styleUrls: ['./carousel-component.scss']
})
export class CarouselComponent implements AfterViewInit {
    @ContentChildren(CarouselItemDirective) items: QueryList<CarouselItemDirective>;
    @ViewChildren(CarouselItemElementDirective, { read: ElementRef }) private itemsElements: QueryList<ElementRef>;
    @ViewChild('carousel') private carousel: ElementRef;
    @Input() timing = '250ms ease-in';
    @Input() showControls = true;
    private player: AnimationPlayer;
    private itemWidth: number;
    private currentSlide = 0;
    carouselWrapperStyle = {};

    next() {
        if (this.currentSlide + 1 === this.items.length) {
            return;
        }
        this.currentSlide = (this.currentSlide + 1) % this.items.length;
        const offset = this.currentSlide * this.itemWidth;
        const myAnimation: AnimationFactory = this.buildAnimation(offset);
        this.player = myAnimation.create(this.carousel.nativeElement);
        this.player.play();
    }

    private buildAnimation(offset) {
        return this.builder.build([
            animate(this.timing, style({ transform: `translateX(-${offset}px)` }))
        ]);
    }

    prev() {
        if (this.currentSlide === 0) {
            return;
        }

        this.currentSlide = ((this.currentSlide - 1) + this.items.length) % this.items.length;
        const offset = this.currentSlide * this.itemWidth;

        const myAnimation: AnimationFactory = this.buildAnimation(offset);
        this.player = myAnimation.create(this.carousel.nativeElement);
        this.player.play();
    }

    constructor(private builder: AnimationBuilder) {
    }

    ngAfterViewInit() {
            this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width * 3;
            this.carouselWrapperStyle = {
                width: `${this.itemWidth}px`
            };
    }

}
