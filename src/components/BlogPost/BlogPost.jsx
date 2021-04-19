import React from 'react';
import './BlogPost.css';

function BlogPost(props) {
    return (
        <div className="BlogPost">
            <p>Post ID: {props.blogPost._id}</p>
            <p>Post Title: {props.blogPost.title}</p>
        </div>
    )
}

export default BlogPost;