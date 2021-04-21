import React from 'react';

function BlogPostDetails(props) {
    return (
        <div>
            <h1>{props.match.params.id}</h1>
            {/* <h1>{props.p.title}</h1> */}
        </div>
    )
}

export default BlogPostDetails;