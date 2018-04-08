import React from 'react';

function Banner(props) {
    return (
        <div className="App-banner">
            <img className="Banner-img">{props.image}</img>
        </div>
    )
}

export default Banner;