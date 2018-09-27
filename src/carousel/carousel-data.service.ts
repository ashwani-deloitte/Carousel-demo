
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of as observableOf } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { map } from 'rxjs/internal/operators/map';
import { CarouselList } from './carousel-component/carousel.model';
export interface Hits {
    userImageURL?: string;
    user?: string;
}


@Injectable()
export class CarouselDataService {

    private endPoint: string;
    private apiKey: string;
    constructor(private httpClient: HttpClient) {
        this.endPoint = 'https://pixabay.com/api/';
        this.apiKey = '9656065-a4094594c34f9ac14c7fc4c39';
    }
    getCarouselData(): Observable<CarouselList[]> {
        const url = `${this.endPoint}?key=${this.apiKey}&q=beautiful+landscape&image_type=photo`;
        return this.httpClient.get<{ hits: Hits[] }>(url)
            .pipe(map(res => {
                return res.hits.map(item => {
                    return new CarouselList(item.user, item.userImageURL);
                });
            }));

    }
}
