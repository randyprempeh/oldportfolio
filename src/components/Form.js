import React from "react";


export class Form extends React.Component {
    state = {
        name: "",
        email: "",
        message: "",
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    resetForm() {
        document.getElementById("con-Form").reset();
        this.setState({
            name: "",
            email: "",
            message: ""
        })
        this.refs.form.reset()
    }



    onSubmit = (e) => {
        e.preventDefault();

        var url = 'http://localhost:5000/sendEmail';
        var data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        };

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => {
                console.log('Success:', response)
                this.refs.form.reset();
                alert("Message Sent.");
            })
            .catch(error => console.error('Error:', error));
        this.resetForm()
    };

    render() {
        return (
            <div className="wrapper">
                <form ref="form" id="con-Form" className="contact-form" action="/sendEmail" method="POST" >
                    <div className="input-fields">
                        <input name="name" className="input" placeholder="name"
                            value={this.state.name}
                            onChange={e => this.change(e)} />
                        <input type="email" name="email" className="input" placeholder="email"
                            value={this.state.email}
                            onChange={e => this.change(e)} />
                    </div>
                    <div className="msg">
                        <textarea name="message" placeholder="message"
                            value={this.state.message}
                            onChange={e => this.change(e)} />
                        <div className="btn">
                            <button onClick={e => this.onSubmit(e)}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>

        );
    }
}
