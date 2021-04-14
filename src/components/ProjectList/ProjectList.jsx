import React from 'react';
import Project from '../Project/Project'

function ProjectList(props) {
    return (
        <div className="col outline">
            <Project />
            <Project />
            <Project />
        </div>
    );
}

export default ProjectList;