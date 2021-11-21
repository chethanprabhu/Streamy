import React from 'react'
import { Field, formValues, reduxForm } from "redux-form";

class StreamCreate extends React.Component {

    renderError({touched, error}) {
        if(touched && error) {
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }
    renderInput = ({input, label, meta}) => { 
        const className = `field ${meta.error && meta.touched? "error" : ""}`
        return(
            <div className={className}>
                <label>{label}</label>
                <input {...input}/>
                {this.renderError(meta)}
                
            </div>
        ) 
    }

    onSubmit(formValues) {
        console.log(formValues);
    }

    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter a Title"/>
                <Field name="desc" component={this.renderInput} label="Enter a description"/>
                <button className="ui button primary">Create</button>
            </form>
        )
    }  
}

const validate = (formValues) => {
    const errorMessage = {};

    if(!formValues.title) {
        errorMessage.title = "Please enter a title"
    }

    if(!formValues.desc) {
        errorMessage.desc = "Please enter a description"
    }

    return errorMessage;
}

export default reduxForm({
    form: "streamCreate",
    validate: validate
})(StreamCreate);
