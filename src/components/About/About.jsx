import React from 'react';
import Intro from '../Intro/Intro';
import Description from '../Description/Description';

function About(props) {
    return (
        <div className="col outline">
            <Intro imgURL={props.imgURL} name={props.name} email={props.email} checkStatus={props.checkStatus} buttonLabel={props.buttonLabel}/>
            <Description />
        </div>
    );
}

export default About;