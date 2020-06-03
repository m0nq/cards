import { Component } from '@angular/core';

@Component({
    selector: 'cq-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    posts = [
        {
            title: 'Neat Tree',
            imageUrl: 'tree',
            username: 'nature',
            content: 'Saw this awesome tree during my hike today.'
        },
        {
            title: 'Snowy Mountain',
            imageUrl: 'mountain',
            username: 'mountainlover',
            content: 'A picture of a snowy mountain'
        },
        {
            title: 'Mountain Biking',
            imageUrl: 'biking',
            username: 'biking1222',
            content: 'Did some biking today'
        }
    ];
}
