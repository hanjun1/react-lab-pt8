import React from 'react';
import Intro from '../Intro/Intro';
import Description from '../Description/Description';

function About(props) {
    return (
        <div className="col outline">
            <Intro />
            <Description />
        </div>
    );
}

export default About;