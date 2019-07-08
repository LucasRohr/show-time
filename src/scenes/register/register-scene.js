import './register-scene.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/icons/play-solid.svg';

export class RegisterScene extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            password: '',
            passwordConfirmation: '',
            birthday: ''
        };
    }

    render() {
        return (
            <div className="screen">

                <div className="banner" >
                    <div className="logo-title">

                        <Logo className="logo" />
                        <div className="titles" >
                            <p className="title-show" > Show </p>
                            <p className="title-time" > Time </p>
                        </div>

                    </div>
                    
                    <div className="register-welcome-container">
                        <p className="register-welcome" > Procurando o que assistir? </p>
                        <p className="register-welcome" > Seja bem-vindo(a)! </p>
                    </div>  
                </div>

                <div className="register-fields">

                    <div className="login-message" >
                    </div>

                </div>

            </div>
        );
    }

}