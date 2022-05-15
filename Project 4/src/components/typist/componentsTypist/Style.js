import React from 'react';

export function Color(props){
    return (
        <div>
            <br/>
            <input className=" style styleshit aside" type="color" onInput={event=>props.setStyle("color",event.target.value)}></input>
            <button className=" style bold styleshit" onClick={()=>props.setStyle("fontWeight", props.bold===100?900:100)}><b>B</b></button>
        </div>
    );
}

export default Color;