import React from 'react';

function Button(props) {
    console.log(props)
    return (
        <div style={{display:props.status}} className="but">
            <button onClick={()=>{props.setHtml("game")}} className="buts">game</button>
            <button onClick={()=>{props.setHtml("typist")}} className="buts">typist</button>
        </div>
    );
}
export default Button;