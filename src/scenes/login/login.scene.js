import { ReactComponent as Logo } from '../../assets/icons/play-solid.svg';
import './login-scene.css'
import React from 'react'

export class LoginScene extends React.PureComponent {
    
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userPassword: ''
        };
    }

    renderHeader = () => {
        return (
            <div className="login-header" >
            </div>
        );
    }

    render() {
        return (
            
            <div className="screen" >

                <div className="login-header" >

                    <div className="logo-title">
                        <Logo className="logo" />

                        <div className="titles" >
                            <p className="title-show" > Show </p>
                            <p className="title-time" > Time </p>
                        </div>
                    </div>

                    <p className="login-welcome" > Procurando o que assistir? Bem-vindo(a) ao Show Time! </p>

                </div>

                <div className="login-container" >
                        <div className="login-fields" >

                            <p className="login-message" > Faça seu login </p>

                            <input type="text" className="username-input"  placeholder="Nome de usuário" />
                            <input type="password" className="password-input" placeholder="Senha" />

                            <div className="login-button-container" >
                                <button className="login-button" > Entrar </button>
                            </div>
                        </div>


                        <div className="register-container" >

                            <p className="register-text" > Ou registre-se <a href="#" className="register-here" > aqui </a> </p>

                        </div>

                    </div>
            </div>
        );
    }
    
}