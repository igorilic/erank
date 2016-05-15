export interface IMatch {
    
    finished: boolean,
    competition: string,
    season: string,
    playoffs: boolean,
    homeTeam: string,
    awayTeam: string,
    homeTeamPoints: number,
    awayTeamPoints: number,
    firstPeriodHomeTeamPoints: number,
    secondPeriodHomeTeamPoints: number,
    thirdPeriodHomeTeamPoints: number,
    fourthPeriodHomeTeamPoints: number,
    firstPeriodAwayTeamPoints: number,
    secondPeriodAwayTeamPoints: number,
    thirdPeriodAwayTeamPoints: number,
    fourthPeriodAwayTeamPoints: number,
    _id: string,
    date: string
    
}