import React from 'react';

export function Special(props) {   
    let arr=[...props.board];            
    return (
        <div>
            <br/>
            <button className="aside style" onClick={() => {
                props.setLast({active:"clear",value:[...arr]});
                props.setBoard([]);
            }}>CLEAR ALL</button><span>  </span>
            <button className="style" onClick={() => {
                 props.setLast({active:"clear",value:[...arr]});
                props.setLowerAll();
            }}>LOWER ALL</button><span>  </span>
            <button className="style" onClick={() => {
                 props.setLast({active:"clear",value:[...arr]});
                props.setUpperAll();
            }}>UPPER ALL</button>
        </div>
    );
}

export default Special;