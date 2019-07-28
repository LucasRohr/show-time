import React from 'react';
import './update-profile.component.css';
import Modal from '@material-ui/core/Modal';
import Slide from '@material-ui/core/Slide';
import { ButtonCommon } from '../button-common/button-common.component';
import { ReactComponent as LockedIcon } from '../../assets/icons/lock-solid.svg';
import { ReactComponent as UserAvatarIcon } from '../../assets/icons/user-circle-solid.svg';
import { Input } from '../../components/input/input.component.jsx';

export class UpdateProfile extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            // GET USER DATA FROM STORE TO INITIALIZE FIELDS VALUES
            avatar: '',
            fullName: '',
            username: '',
            birthday: '',
            isUpdatePasswordModalOpen: false
        };
    }

    handleUpdatePasswordModal = () => {
        this.setState( prevState => ({
                isUpdatePasswordModalOpen: !prevState.isUpdatePasswordModalOpen
            })
        )
    }

    activateInputFile = () => {
        document.getElementById("input-file-update-profile").click();
    }

    encodeImageFile = (evt) => {
        let tgt = evt.target || window.event.srcElement;
        let files = tgt.files;
        if (FileReader && files && files.length) {
            let fr = new FileReader();
            fr.onloadend = (loadEvent) => {
                this.setState({ image: loadEvent.target.result });
            }
            fr.readAsDataURL(files[0]);
        }
    }

    render() {
        return (
            <Modal className="profile-modal" open={this.props.open} onClose={this.props.onClose} >
                <Slide direction="up" in={this.props.open} mountOnEnter unmountOnExit>
                    <div className="update-profile-content" >

                        <div className="update-profile-header" >
                            <p className="update-profile-title" > Atualize seu perfil </p>

                            <ButtonCommon
                                buttonWidth="40%"
                                buttonHeight="90%"
                                buttonPadding="0%"
                                onButtonClick={this.handleUpdatePasswordModal}
                            >
                                <div className="update-password-button-content" >
                                    <p className="update-password-button-title" > Mudar senha </p>
                                    <LockedIcon className="update-password-button-icon" />
                                </div>
                            </ButtonCommon>
                        </div>

                        <input id="input-file-update-profile" className="image-input-profile"
                                type="file"
                                accept="image/*"
                                onChange={ (evt) => this.encodeImageFile(evt) }/>

                        <UserAvatarIcon className="user-avatar-update-icon" onClick={this.activateInputFile} />

                        <div className="update-fields-container" >
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

                            <Input inputType={this.state.dateInputType}
                                inputWidth="50%"
                                inputHeight="5%"
                                inputPlaceholder="Data de nascimento"
                                setInput={this.setUsername}
                                onFocus={ this.changeDateInputTypeToDate }
                                onBlur={ this.changeDateInputTypeToText }
                            />
                        </div>


                    </div>
                </Slide>
            </Modal>
        );
    }

}