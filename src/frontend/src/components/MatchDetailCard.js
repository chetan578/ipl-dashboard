import {React} from 'react'
import {Link} from 'react-router-dom'

export const MatchDetailCard=({teamName,match})=>{
    if(match==null)return null;
    const otherTeam= (teamName===match.team1)? match.team2 : match.team1; 
    const otherTeamPath=`/teams/${otherTeam}`;
    return(
        <div className="MatchDetailCard">
        <h3>Latest Matches</h3>
        <h1>vs  <Link to={otherTeamPath}>{otherTeam}</Link>  </h1>
       <h2>{match.date}</h2>
       <h3>at {match.venue}</h3>
       <h3>{match.matchWinner} won by {match.resultMargin} {match.result}</h3>
        </div>
    )
}
