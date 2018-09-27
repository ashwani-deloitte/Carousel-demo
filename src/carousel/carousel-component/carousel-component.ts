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
export class CarouselComponent implements AfterViewInit, OnInit {
    @ContentChildren(CarouselItemDirective) items: QueryList<CarouselItemDirective>;
    @ViewChildren(CarouselItemElementDirective, { read: ElementRef }) private itemsElements: QueryList<ElementRef>;
    @ViewChild('carousel') private carousel: ElementRef;
    @Input() timing = '250ms ease-in';
    @Input() showControls = true;

    private player: AnimationPlayer;
    private itemWidth: number;
    private currentSlide = 1;
    private noOfSlidesInView: number;
    public disableButton: boolean;
    public noOfSlides: number;
    public carouselWrapperStyle = {};
    public disablePrevButton: boolean;

    constructor(private builder: AnimationBuilder) {
        this.disableButton = false;
        this.noOfSlidesInView = 4;
        this.disablePrevButton = true;
    }
    ngOnInit() {
    }

    ngAfterViewInit() {
        if (this.items.length > 0) {
            this.noOfSlides = Math.ceil(this.items.length / this.noOfSlidesInView);
        }
        this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width * this.noOfSlidesInView;
        this.carouselWrapperStyle = {
            width: `${this.itemWidth}px`
        };
    }

    next() {
        this.currentSlide = this.currentSlide + 1;
        if (this.currentSlide  === this.noOfSlides) {
            this.disableButton = true;
            this.disablePrevButton = false;
            return;
        }
        this.disableButton = false;
        this.disablePrevButton = false;
        const offset = this.currentSlide * this.itemWidth;
        const myAnimation: AnimationFactory = this.buildAnimation(offset);
        this.player = myAnimation.create(this.carousel.nativeElement);
        this.player.play();
    }

    prev() {
        if (this.currentSlide === 0) {
            this.disablePrevButton = true;
            this.disableButton = false;
            return;
        }
        this.disablePrevButton = false;
        this.disableButton = false;
        this.currentSlide = this.currentSlide - 1;
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

}
