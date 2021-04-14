import React from 'react';
import Intro from '../Intro/Intro';
import Description from '../Description/Description';

function About(props) {
    return (
        <div className="col outline">
            <Intro imgURL={props.imgURL} name={props.name} email={props.email}/>
            <Description />
        </div>
    );
}

export default About;