import React from 'react';
import Details from './Details';
import Steps from './Steps';
import Scores from './Scores';

function Player(props) {
    return (
        <div>
            <hr />
            <Details name={props.gamer.name} number={props.gamer.number} steps={props.gamer.steps} />
            <Steps status={props.gamer.status} index={props.index} update={props.update} number={props.gamer.number} logOut={props.logOut} newGame={props.newGame} setsuprise={props.setsuprise}/>
            <Scores name={props.gamer.name} scores={props.gamer.scores} status={props.gamer.status}/>
        </div>
    );
}
export default Player;