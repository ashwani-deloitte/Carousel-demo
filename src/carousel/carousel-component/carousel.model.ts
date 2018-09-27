
const fallbackUrl = 'https://cdn.pixabay.com/user/2018/01/12/08-06-25-409_250x250.jpg';
export class CarouselList {
    title?: string;
    url?: string;
    constructor(title: string = '', url: string = '') {
        this.title = title;
        this.url = url || fallbackUrl ;
    }
}
