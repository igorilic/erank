import { IMatch } from './match.interface';

export interface ITeam {
    _id: string,
    name: string,
    town: string,
    country: string,
    leagueName: string,
    leagueLevel: string,
    schedule: IMatch[],
    active: boolean,
    competition: string[],
    sport: string,
    
}