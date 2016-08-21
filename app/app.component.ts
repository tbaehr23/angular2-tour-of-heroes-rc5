import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html', //relative to index.html
    styleUrls: ['./app/app.component.css']
})
export class AppComponent { 
    title = 'Tour of Heroes';
}
