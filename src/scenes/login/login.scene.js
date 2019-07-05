import { ReactComponent as Logo } from '../../assets/icons/play-solid.svg';
import './login-scene.css';
import React from 'react';
import { Link } from 'react-router-dom';
import history from '../../history';

export class LoginScene extends React.PureComponent {
    
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userPassword: ''
        };
    }

    login() {
        history.push("/");
    }

    render() {
        return (
            
            <div className="screen" >

                <div className="login-banner" >

                    <div className="logo-title">
                        <Logo className="logo" />

                        <div className="titles" >
                            <p className="title-show" > Show </p>
                            <p className="title-time" > Time </p>
                        </div>
                    </div>

                    <div className="login-welcome-container">
                        <p className="login-welcome" > Procurando o que assistir? </p>
                        <p className="login-welcome" > Seja bem-vindo(a)! </p>
                    </div>

                </div>

                <div className="login-container" >

                        <div className="register-container" >
                            <p className="register-text" > Ou registre-se <Link to={"/registro"} className="register-here" > aqui </Link> </p>
                        </div>

                        <div className="login-fields" >

                            <p className="login-message" > Faça seu login </p>

                            <input type="text" className="username-input"  placeholder="Nome de usuário" />
                            <input type="password" className="password-input" placeholder="Senha" />

                            <div className="login-button-container" >
                                <button className="login-button" onClick={this.login} > Entrar </button>
                            </div>
                        </div>

                </div>

            </div>
        );
    }
    
}