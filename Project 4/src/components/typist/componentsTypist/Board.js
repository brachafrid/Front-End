import React from 'react';

function Board(props){
    const letters=props.board.map((letter,i)=>{return(<span key={i} style={{color:letter.color ,fontSize:letter.size ,fontWeight:letter.fontWeight}}>{letter.value==="<br />"?<br />:letter.value}</span>)});
    return (<div>
        <div className="aside board">{letters}</div>
    </div>);
}

export default  Board;