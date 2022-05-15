import React from 'react';

export function Size(props){
    return (
        <div>
            <br />
            <input className="style aside" type="number " onInput={event=>props.setStyle("size",parseInt(event.target.value))} placeholder="size"></input>
        </div>
    );
}

export default Size;