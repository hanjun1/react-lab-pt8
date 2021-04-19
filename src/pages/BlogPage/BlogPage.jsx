import React from 'react';
import { Link } from 'react-router-dom';
import BlogPost from '../../components/BlogPost/BlogPost';

class Blog extends React.Component {
    state = {
        posts: [],
    }

    getPosts = async () => {
        await fetch('/api/blog').then((res) => res.json()).then(data => this.setState({posts:data}))
    }

    componentDidMount() {
        this.getPosts();
    }

    render() {
        return (
            <div>
                <Link to='/blog/new'>New Blog</Link>
                {
                    this.state.posts.length ? 
                        this.state.posts.map(p => (
                            <Link to={`blog/${p._id}`}><BlogPost blogPost={p} getPosts={this.getPosts} /></Link>
                        ))
                            :
                        <h1>No Posts</h1>
                }
            </div>
        )
    }
}

export default Blog;