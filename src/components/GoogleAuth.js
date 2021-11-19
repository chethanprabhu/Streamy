import React from "react";

class GoogleAuth extends React.Component {

    state = {isSignedIn: null};

    componentDidMount() {
        window.gapi.load("client:auth2" , () => {
            window.gapi.client.init({
                clientId : "523483951245-ialdr30ipo2o2vvognfi5n8l6nnrcafr.apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()})
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }

    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()})
    }

    renderAuthButton() {
        if(this.state.isSignedIn === null) {
            return (
                <button className="ui red google button">
                    <i className="google icon" />
                    ---- --
                </button>
            )
        } else if(this.state.isSignedIn) {
            return (
                <button onClick={this.onSignOut} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            ) 
        } else {
            return (
                <button onClick={this.onSignIn} className="ui red google button">
                    <i className="google icon" />
                    Sign In
                </button>
            )
        }
    }

    onSignOut = () => {
        this.auth.signOut();
    }

    onSignIn = () => {
        this.auth.signIn();
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

export default GoogleAuth;