import { ReactComponent as Logo } from '../../assets/icons/play-solid.svg';
import './login-scene.css';
import React from 'react';
import { Link } from 'react-router-dom';
import history from '../../history';
import { Input } from '../../components/input/input.component';
import { ButtonCommon } from '../../components/button-common/button-common.component';

export class LoginScene extends React.PureComponent {
    
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userPassword: ''
        };
    }

    setUsername = (e) => {
        this.setState({ userName: e.target.value });
    }

    setPassword = (e) => {
        this.setState({ userPassword: e.target.value });
    }

    login() {
        history.push('/timeline');
    }

    render() {
        return (
            
            <div className="screen" >

                <div className="banner" >

                    <div className="logo-title">
                        <Logo className="logo-login" />

                        <div className="titles" >
                            <p className="title-show-login" > Show </p>
                            <p className="title-time-login" > Time </p>
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

                            <Input inputType="text"
                                inputWidth="50%"
                                inputHeight="8%"
                                inputPlaceholder="Nome de usuário"
                                setInput={this.setUsername}
                            />

                            <Input inputType="password"
                                inputWidth="50%"
                                inputHeight="8%"
                                inputPlaceholder="Senha"
                                setInput={this.setPassword}
                            />

                            <div className="login-button-container" >
                                <ButtonCommon buttonTitle="Entrar" buttonPadding="3%" onButtonClick={this.login} />
                            </div>
                        </div>

                </div>

            </div>
        );
    }
    
}