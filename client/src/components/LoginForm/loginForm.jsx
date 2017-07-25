import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from "react-redux";
import { LoginFormMiddleware } from '../../store/middlewares/loginmiddleware';

const style = {
    padding: 20,
    textAlign: 'center',
    display: 'inline-block',
    margin: 0,
    button: {
        margin: 15,
    },
    div: {
        textAlign: 'center'
    }
};

function mapDispatchToProps(dispatch) {
    return {
        addLoginData: (Data) => dispatch(LoginFormMiddleware.addLoginData(Data))

    }
}

function mapStateToProps(state) {
    return {

    }
}

class LoginForm extends React.Component {

    loginForm = (e) => {
        e.preventDefault();
        var username = this.refs.username.getValue();
        var password = this.refs.password.getValue();

        var Data = {
            username: username,
            password: password,
        }

        console.log(Data);
        this.props.addLoginData(Data)
    }
    render() {
        return (
            <div style={style.div}>
                <Paper style={style} zDepth={2}>
                    <form onSubmit={this.loginForm}>
                        <h2>Login Form</h2>
                        <TextField
                            hintText="User Name"
                            floatingLabelText="User Name"
                            type="text"
                            ref="username"
                        /><br />
                        <TextField
                            hintText="Password"
                            floatingLabelText="Password"
                            type="password"
                            ref="password"
                        /><br />
                        <RaisedButton label="Primary" type="submit" primary={true} style={style.button} />
                    </form>
                </Paper>
            </div>
        );
    }
}
// export default LoginForm;
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);