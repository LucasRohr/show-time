import './register-scene.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../../components/input/input.component.jsx';
import { ReactComponent as Logo } from '../../assets/icons/play-solid.svg';
import history from '../../history';
import { ButtonCommon } from '../../components/button-common/button-common.component.jsx';

export class RegisterScene extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            password: '',
            passwordConfirmation: '',
            birthday: '',
            dateInputType: 'text'
        };
    }

    changeDateInputTypeToDate = () => {
        this.setState({ dateInputType: 'date' });
    }

    changeDateInputTypeToText = () => {
        this.setState({ dateInputType: 'text' });
    }

    register = () => {
        history.push("/timeline");
    }

    render() {
        return (
            <div className="screen">

                <div className="banner" >
                    <div className="logo-title">

                        <Logo className="logo-register" />
                        <div className="titles" >
                            <p className="title-show-register" > Show </p>
                            <p className="title-time-register" > Time </p>
                        </div>

                    </div>

                    <div className="register-welcome-container">
                        <p className="register-welcome" > Procurando o que assistir? </p>
                        <p className="register-welcome" > Seja bem-vindo(a)! </p>
                    </div>  
                </div>

                <div className="register-fields">

                    <p className="register-message" > Faça seu registro </p>

                    <Input inputType="text"
                        inputWidth="50%"
                        inputHeight="5%"
                        inputPlaceholder="Nome completo"
                        setInput={this.setUsername}
                    />

                    <Input inputType="text"
                        inputWidth="50%"
                        inputHeight="5%"
                        inputPlaceholder="Nome de usuário"
                        setInput={this.setUsername}
                    />

                    <Input inputType="password"
                        inputWidth="50%"
                        inputHeight="5%"
                        inputPlaceholder="Senha"
                        setInput={this.setUsername}
                    />

                    <Input inputType="password"
                        inputWidth="50%"
                        inputHeight="5%"
                        inputPlaceholder="Confirme sua senha"
                        setInput={this.setUsername}
                    />

                    <Input inputType={this.state.dateInputType}
                        inputWidth="50%"
                        inputHeight="5%"
                        inputPlaceholder="Data de nascimento"
                        setInput={this.setUsername}
                        onFocus={ this.changeDateInputTypeToDate }
                        onBlur={ this.changeDateInputTypeToText }
                    />

                    <p> {this.dateInputType} </p>

                    <div className="register-button-container" >
                        <ButtonCommon buttonWidth="35%" buttonPadding="2%" onButtonClick={this.register}>
                            Registrar
                        </ButtonCommon>
                    </div>

                    <div className="login-text-container" >
                        <p className="login-text" > Já tem uma conta? Faça seu login <Link to={"/login"} className="login-here" > aqui </Link> </p>
                    </div>

                </div>

            </div>
        );
    }

}