import React from 'react';

export function Language(props) {
    return (
        <div>
            <br/>
            <select className="aside style" id="language" name="language" onInput={event => props.changeLanguage(event.target.value)}>
                <option value="Hebrew">Hebrew</option>
                <option value="English">English</option>
                <option value="Arabic">Arabic</option>
            </select>
            <br />
            <br />
            <button className="aside style" value="UPPER-CASE" onClick={()=>props.changeUpperCase("big")}>UPPER-CASE</button><span>  </span>
            <button className="style" value="Lower-case" onClick={()=>props.changeUpperCase("small")}>Lower-case</button>
        </div>
    );
}

export default Language;