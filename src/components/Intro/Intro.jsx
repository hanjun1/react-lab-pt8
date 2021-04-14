import React from 'react';

function Intro(props) {
    return (
        <div className="outline row">
            <img src={props.imgURL} />
            <div>
                <p>Currently logged in:</p>
                <p>Name: {props.name}</p>
                <p>Email: {props.email}</p>
            </div>
        </div>
    );
}

export default Intro;