import React from 'react';
import guides from '../guides.json';

function makeCards(props) {
    return (
        <div className="Cards-div">
            <div>
            {
            guides.map((guide) => {
                return(
                <div>
                    <div>Guide Type: {guide.type}</div>
                    <div>Guide Title: {guide.title}</div>
                    <div>Price: {guide.price}</div>
                </div>
            )})
            }
            </div>
        </div>
    )
}
    



export default makeCards; 