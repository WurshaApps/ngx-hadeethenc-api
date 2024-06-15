import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxHadeethencApiService } from 'ngx-hadeethenc-api';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, AsyncPipe],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    constructor(public service: NgxHadeethencApiService) {}
    title = 'demo';
}
