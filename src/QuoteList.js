import React, { useEffect, useState } from "react";
import Quote from "./Quote";

function QuoteList() {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        async function fetchData() {

                const quotesResponse = await fetch('https://dummyjson.com/quotes');
                const quotesData = await quotesResponse.json();
                console.log("dati:", quotesData);
                setQuotes(quotesData.quotes);
            }
        
        fetchData();
    }, []);

    return (
        <div>
            {quotes.map((quote, id) => 
                <Quote key={id} author={quote.author} quote={quote.quote} />
             
             )
            
            
        }
        </div>
    );
}

export default QuoteList;
