import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

export class AbstractComponent {

    public constructor(
        protected titleService: Title,
        protected route: ActivatedRoute
    ) {
        let title: string = route.snapshot.data.title;
        if (title === undefined) {
            title = 'Quantitative Information Flow';
        }
        titleService.setTitle(title);
    }
}
