import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
    selector: 'cq-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
    @Input() title = '';
    @Input() imageUrl = '';
    @Input() content = '';
    @Input() username = '';

    constructor() { }

    ngOnInit(): void {
    }
}
