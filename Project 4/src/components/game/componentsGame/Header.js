import React from 'react';

function Header(props){
    return (
        <div>
            <h1 id="h1">🖤Get to 100!!!!!!🖤</h1>
            
            {props.start>0?<div><button class="start"onClick={()=>props.newGameRender()}>new game </button>
            <button class="start"onClick={()=>props.addUser()}>add gamer</button></div>:
            <button class="start" onClick={()=>props.startGame("yes")}>start game</button>}
        </div>
    );
}
export default Header;