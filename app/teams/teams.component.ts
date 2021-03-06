import { Component, OnInit } from '@angular/core';
import { ITeam } from './team.interface';
import { TeamService } from './teams.service';
import { TeamCardComponent } from './team-card/team-card.component';

@Component({
    moduleId: module.id,
    selector: 'teams-list',
    templateUrl: 'teams.component.html',
    styleUrls: ['teams.component.css'],
    providers: [TeamService],
    directives: [TeamCardComponent],
    host: {
        class: 'row'
    }
})
export class TeamsComponent implements OnInit {
    teams: ITeam[];
    errorMessage: string;
    constructor(private _teamService: TeamService) { }

    ngOnInit() {
        this._teamService
            .getTeams()
            .subscribe(
                teams => this.teams = teams,
                error => this.errorMessage = <any>error
            );
    }

}