import axios from 'axios';
import { rootURL } from '../constant'

export class LoginFormMiddleware {

    static addLoginData(settings) {
        console.log(settings)
        return dispatch => {
            axios.put(`${rootURL}/api/login`, settings, {
                headers: { authorization: localStorage.getItem('token') }
            })
            //.then(result => {
            //     if (callback) callback();
            //     dispatch(QualitySettingsMiddleware.getAddFields());
            //})
            //.catch(err => console.log(err.message))
        }
    }
}