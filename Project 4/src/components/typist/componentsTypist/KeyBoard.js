import React from 'react';

function KeyBoard(props) {
    let keysButton = props.keys.map((column, i) => {
        return(<>
            {column.map((letter, j) => <button className="letter" key={i * 11 + j} onClick={event => { props.addBoard({ value: props.status === "small" ? letter.toLowerCase() : letter.toUpperCase(), color: props.color, size: props.size, fontWeight: props.bold}); props.setLast({ active: "add", value: " " }) }}>{props.status === "small" ? letter.toLowerCase() : letter.toUpperCase()}</button>)}
            <br />
        </>)
    }
    );
    return (
        <div>
             <br />
            <div className="keys">{keysButton }</div>
            <div> <button className="keys space" onClick={event => props.addBoard({ value: " ", color: "white", size: props.size })} >space</button> </div>
            <button  className="keys nice" onClick={event => { props.addBoard({ value: "<br />", color: "white", size: props.size, fontWeight: props.bold}); props.setLast({ active: "add", value: " " }) }}>enter</button>
            <button className=" nice" onClick={() => { props.deleteLast(); props.setLast({ active: "delete", letter: props.char }) }}>delete</button>
            <button  className="nice" onClick={() => {
                let last = props.popLast();
                console.log(last.value);
                switch (last.active) {
                    case "delete": {
                        props.addBoard({ value: last.letter.value, color: last.letter.color, size: last.letter.size })
                        break;
                    }
                    case "add": {
                        props.deleteLast();
                        break;
                    }
                    case "clear": {
                        props.setBoard(last.value);
                        break;
                    }
                    case "upper":{
                        props.setBoard(last.value);
                        break;
                    }
                    case "lowe":{
                        props.setBoard(last.value);
                        break;
                    }
                    default:
                        break;
                }
            }
            }>undo last</button>
        </div >
    );
}

export default KeyBoard;