import React from 'react';

class BlogForm extends React.Component {
    state = {
        title: "",
        content: "",
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        let body = {
            title: this.state.title,
            content: this.state.content,
        }
        let options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
        }
        await fetch("/api/blog", options)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    title: "",
                    content: "",
                })
            })
    }

    render() {
        return (
            <div>
                <form>
                    <label>Post Title:</label> <br/>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/> <br/>
                    <label>Post Content:</label> <br/>
                    <textarea name="content" value={this.state.content} onChange={this.handleChange}></textarea> <br/>
                    <button onClick={this.handleSubmit}>Add Post</button>
                </form>
            </div>
        )
    }
}

export default BlogForm;