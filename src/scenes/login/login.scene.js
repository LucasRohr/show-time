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

    render() {
        return (
            
            <div className="login-container" >
                <div className="logo-title" >
                    <Logo className="logo" />

                    <div className="titles" >
                        <p className="title-show" > Show </p>
                        <p className="title-time" > Time </p>
                    </div>
                </div>

                <div className="login-fields" >

                    <p className="login-message" > Faça seu login </p>

                    <input type="text" className="username-input"  placeholder="Nome de usuário" />
                    <input type="password" className="password-input" placeholder="Senha" />

                    <p> {this.state.userName} </p>

                    <div className="login-button-container" >
                    </div>
                </div>


                <div className="register-container" >
                </div>
            </div>

        );
    }

}