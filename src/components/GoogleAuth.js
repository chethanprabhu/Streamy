import React from "react";
import { connect } from "react-redux";
import { SignIn, SignOut } from "../actions/index"

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load("client:auth2" , () => {
            window.gapi.client.init({
                clientId : "523483951245-ialdr30ipo2o2vvognfi5n8l6nnrcafr.apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            this.props.SignIn(this.auth.currentUser.get().getId());
        } else {
            this.props.SignOut();
        }
    }

    renderAuthButton() {
        if(this.props.isSignedIn === null) {
            return (
                <button className="ui red google button">
                    <i className="google icon" />
                    ---- --
                </button>
            )
        } else if(this.props.isSignedIn) {
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

const mapStateToProps = (state) => {
    return {isSignedIn: state.authReducer.isSignedIn};
}

export default connect(mapStateToProps, { SignIn, SignOut })(GoogleAuth) ;