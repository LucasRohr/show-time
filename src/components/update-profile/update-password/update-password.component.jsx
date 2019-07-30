import React from 'react';
import './update-password.component.css';
import { ButtonCommon } from '../../button-common/button-common.component.jsx';
import { ReactComponent as BackArrow } from '../../../assets/icons/arrow-left-solid.svg';
import { Input } from '../../input/input.component.jsx';

export class UpdatePassword extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            currentPassword: '',
            password: '',
            passwordConfirmation: ''
        };
    }

    render() {
        return (
            <div className="update-password-content" >

                <div className="update-password-header" >
                    <ButtonCommon
                        buttonWidth="35%"
                        buttonHeight="90%"
                        buttonPadding="0%"
                        onButtonClick={this.props.changeUpdate}
                    >
                        <div className="update-back-button-content" >
                            <BackArrow className="update-back-button-icon" />
                            <p className="update-back-button-title" > Voltar </p>
                        </div>
                    </ButtonCommon>

                    <p className="update-password-title" > Atualize sua senha </p>
                </div>

                <div className="update-passsword-fields-container" >
                    <Input inputType="password"
                        inputWidth="60%"
                        inputHeight="12%"
                        inputPlaceholder="Senha atual"
                        setInput={this.setCurrentPasword}
                    />

                    <Input inputType="password"
                        inputWidth="60%"
                        inputHeight="12%"
                        inputPlaceholder="Nova senha"
                        setInput={this.setPassword}
                    />

                    <Input inputType="password"
                        inputWidth="60%"
                        inputHeight="12%"
                        inputPlaceholder="Confirme a nova senha"
                        setInput={this.setPasswordConfirmation}
                    />
                </div>

                <div className="update-password-button-container" >
                    <ButtonCommon
                        buttonHeight="80%"
                        buttonWidth="50%"
                        buttonPadding="0%"
                        onButtonClick={() => {}}
                    >
                        Atualizar senha
                    </ButtonCommon>
                </div>

            </div>
        );
    }

}