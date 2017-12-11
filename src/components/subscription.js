import React, {Component} from "react";

class Subscription extends Component {
    saveSubscription = (email) => {
        const URL_EMAIL = "http://localhost:3004/subcriptions\n";

        fetch(URL_EMAIL, {
            method: "post",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email})
        }).then(res => res.json())
            .then(() => {
                this.setState({
                    email: "",
                    success: true
                })
            })

    };
    onChangeInput = (event) => {
        this.setState({
            email: event.target.value
        })
    };
    handleSubmit = (event) => {
        event.preventDefault();
        let email = this.state.email;
        let regex = /\S+@\S+\.\S+/;

        if (regex.test(email)) {
            this.saveSubscription(email)
        } else {
            this.setState({error: true})
        }
        this.clearMessages();
    };

    clearMessages = () => {
        setTimeout(function () {
            this.setState({
                error: false,
                success: false
            })
        }.bind(this), 3000)
    };

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            error: false,
            success: false
        }

    }

    render() {
        return (
            <div className="subscribe_panel">
                <h3>Subscribe to us</h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            placeholder="youremail@email.com"
                            value={this.state.email}
                            onChange={this.onChangeInput}
                        />
                        <div className={this.state.error ? "error show" : "error"}>Check your email.</div>
                        <div className={this.state.success ? "success show" : "success"}>Thank you</div>
                    </form>
                </div>
                <small>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat.
                </small>
            </div>
        )
    }
}

export default Subscription;