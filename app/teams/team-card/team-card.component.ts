import { Component, OnInit, Input, Output } from '@angular/core';
import { TeamService } from '../teams.service';
import { ITeam } from '../team.interface';

@Component({
    moduleId:module.id,
    selector: 'team-card',
    templateUrl: 'team-card.component.html',
    styleUrls: ['team-card.component.css'],
    providers: [TeamService]
})
export class TeamCardComponent implements OnInit {
    
    @Input() id: string;
    // public properties
    team: ITeam;
    errorMessage: string;
    
    constructor(private _teamService: TeamService) { }

    ngOnInit() {
        this._teamService
            .getTeam(this.id)
            .subscribe(
                team => this.team = team,
                error => this.errorMessage = error
            );
    }

}