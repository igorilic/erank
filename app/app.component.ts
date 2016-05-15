import {Component} from '@angular/core';
import { TeamsComponent } from './teams/teams.component';
import { NavComponent } from './nav/nav.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [TeamsComponent, NavComponent]
})
export class AppComponent {
    title: string = 'eRank';
 }
