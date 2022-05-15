import React from 'react';

function Steps(props){
    if(props.status===1){
        return (
        <div class="center">
            <button class="step" onClick={()=>props.update(props.number+1,props.index)}>+1</button>
            <button class="step" onClick={()=>props.update(props.number-1,props.index)}>-1</button>
            <button class="step" onClick={()=>props.update(props.number*2,props.index)}>*2</button>
            <button class="step" onClick={()=>props.update(props.number/2,props.index)}>/2</button>
            <button class="step" onClick={()=>props.update(Math.pow(props.number,2),props.index)}>^2</button>
            <button class="step" onClick={()=>props.update(Math.floor(Math.sqrt(props.number)),props.index)}>sqrt</button>
            <button class="step" onClick={()=>props.update(Math.floor(Math.log2(props.number)),props.index)}>log</button>
            <button class="step" onClick={()=>props.setsuprise(props.index)}>suprise</button>
            
        </div>
    );
    }else if(props.status===0){
        return(
            <p class="p" style={{color:"crimson"}}>Please wait it`s not  your turn ⏳</p>
        );
    }
    else{
        return(
            <div>
            <p class="p" style={{color:"crimson"}} >you win wait to the next game🎈😍</p>
            <button class="step center2" onClick={()=>props.logOut(props.index)}>log out</button>
            <button class="step" onClick={()=>props.newGame(props.index)}>new game</button>
            </div>
        );
    }
    
}

export default Steps;