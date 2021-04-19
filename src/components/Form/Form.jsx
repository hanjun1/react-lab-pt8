import React from 'react';

class Form extends React.Component {
    state = {
        name: "",
        email: "",
        message: "",
    }
    
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        let body = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
        };
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
        };
        await fetch("/api/post", options)
            .then(res => res.json())
            .then( data => {
            this.setState({ 
                name: "",
                email: "",
                message: "",
            })
        });
    }

    render() {
        return (
            <div>
                <form>
                    <label>Name</label> <br/>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input> <br/>
                    <label>Email</label> <br/>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange}></input> <br/>
                    <label>Message</label> <br/>
                    <textarea name="message" value={this.state.message} onChange={this.handleChange}></textarea> <br/>
                    <button onClick={this.handleSubmit}>Send</button>
                </form>
            </div>
        )
    }
}

export default Form;