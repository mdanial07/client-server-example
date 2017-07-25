import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginForm from './components/LoginForm/loginForm';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <div>
                <App />
                <LoginForm />
            </div>
        </Provider>
    </MuiThemeProvider>

    , document.getElementById('root')
);

