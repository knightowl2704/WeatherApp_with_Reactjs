import React from 'react';
import { render } from 'react-dom';

import '../css/styles.css'

const Card = function(props){
    const cardval = props.data.map((item)=>{
        return(
            <div class="card-each">
                <h1>{item.title}</h1>
                <p>{item.data}</p>
            </div>
        )
    })

    return(
        <div class = "card-complete">{cardval}</div>
    )
}

export default Card;