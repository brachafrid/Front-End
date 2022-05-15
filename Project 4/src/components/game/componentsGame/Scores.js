import React from 'react';

function Scores(props){
    if(props.status===2){
        const allScores=props.scores.map((score,i)=><span id="p" key={i}>{score}, </span>);
        return(
            <p class="p">{props.name} scores: {allScores}</p>
        );
    }
    return (
        <p class="p">{props.name} scores: {props.scores[props.scores.length-1]}</p>
    );
}
export default Scores;