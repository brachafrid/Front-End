import React from 'react';

function Details(props){

return (<div>
    <p class="p">Gamer: {props.name}</p>
    <p  class="p">Number: {props.number}</p>
    <p  class="p">Steps: {props.steps}</p>
    </ div>);
}

export default Details;