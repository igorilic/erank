import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ITeam } from './team.interface';
import { IMatch } from './match.interface';

@Injectable()
export /**
 * TeamService
 */
class TeamService {
    private apiUrl: string = 'http://eurorank.herokuapp.com/api/teams/';
    constructor(private _http: Http) {}
    
    getTeams(): Observable<ITeam[]> {
        return this._http.get(this.apiUrl)
                   .map((response: Response) => response.json())
                   .do(data => console.log(data))
                   .catch(this.handleError);
    }
    
    getTeam(id: string): Observable<ITeam> {
        return this._http.get(this.apiUrl + id)
                   .map((response: Response) => response.json())
                   .do(data => console.log(data))
                   .catch(this.handleError);
    
    }
    
    private handleError(error: Response) {
        return Observable
                .throw(error.json().error || 'Server Error');
    }
}