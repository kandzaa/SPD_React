import React from "react";
import QuoteList from './QuoteList';


function Quote(props) {
    return (
        <div>
            <h2>{props.author}</h2>
            <p>{props.quote}</p>
            <br/>
        </div>
    );
}

export default Quote;
