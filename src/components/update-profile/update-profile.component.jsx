import React from 'react';
import './update-profile.component.css';
import Modal from '@material-ui/core/Modal';
import Slide from '@material-ui/core/Slide';
import { ButtonCommon } from '../button-common/button-common.component.jsx';
import { ReactComponent as LockedIcon } from '../../assets/icons/lock-solid.svg';
import { ReactComponent as UserAvatarIcon } from '../../assets/icons/user-circle-solid.svg';
import { Input } from '../input/input.component.jsx';
import { ReactComponent as DeleteAvatar } from '../../assets/icons/trash-alt-solid.svg';

export class UpdateProfile extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            // GET USER DATA FROM STORE TO INITIALIZE FIELDS VALUES
            avatar: '',
            fullName: '',
            username: '',
            birthday: '',
            dateInputType: 'text',
            isUpdatePasswordModalOpen: false,
            isAvatarPreviewOpen: false
        };
    }

    handleUpdatePasswordModal = () => {
        this.setState( prevState => ({
                isUpdatePasswordModalOpen: !prevState.isUpdatePasswordModalOpen
            })
        )
    }

    activateInputFile = () => {
        if(this.state.avatar) {
            this.setState({ avatar: null });
        }else{
            document.getElementById("input-file-update-profile").click();
        }
    }

    encodeAvatarFile = (evt) => {
        let tgt = evt.target || window.event.srcElement;
        let files = tgt.files;
        if (FileReader && files && files.length) {
            let fr = new FileReader();
            fr.onloadend = (loadEvent) => {
                this.setState({ avatar: loadEvent.target.result });
            }
            fr.readAsDataURL(files[0]);
        }
    }

    setFullName = (e) => {
        this.setState({ fullName: e.target.value });
    }

    setUsername = (e) => {
        this.setState({ username: e.target.value });
    }

    setBirthday = (e) => {
        this.setState({ birthday: e.target.value });
    }

    changeDateInputTypeToDate = () => {
        this.setState({ dateInputType: 'date' });
    }

    changeDateInputTypeToText = () => {
        this.setState({ dateInputType: 'text' });
    }

    handleAvatarPreviewModal = () => {
        this.setState(prevState => ({ 
            isAvatarPreviewOpen: !prevState.isAvatarPreviewOpen
        }));
    }

    render() {
        return (
            <Modal className="update-profile-modal" open={this.props.open} onClose={this.props.onClose} >
                <Slide direction="up" in={this.props.open} mountOnEnter unmountOnExit >
                    <div className="update-profile-content" >

                        <div className="update-profile-header" >
                            <p className="update-profile-title" > Atualize seu perfil </p>

                            <ButtonCommon
                                buttonWidth="35%"
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
                            onChange={ (evt) => this.encodeAvatarFile(evt) } />
                        {this.state.avatar}
                        {

                            this.state.avatar ?
                                <div className="avatar-picked-container" >
                                    <button className="avatar-delete-button" onClick={this.activateInputFile} >
                                        <DeleteAvatar className="avatar-delete-icon" />
                                    </button>

                                    <ButtonCommon buttonWidth="55%"
                                        buttonHeight="70%"
                                        buttonPadding="0%"
                                        onButtonClick={ this.handleAvatarPreviewModal }>
                                            Ver imagem
                                    </ButtonCommon>
                                </div>
                            :
                                <div className="update-profile-avatar-container" >

                                    {
                                        this.state.avatar ?
                                            <img className="update-profile-avatar" src={ this.state.avatar } />
                                        :
                                            <UserAvatarIcon className="update-profile-avatar-icon" onClick={this.activateInputFile} />
                                    }

                                </div>

                        }

                        <Modal open={this.state.isAvatarPreviewOpen} onClose={this.handleAvatarPreviewModal}>
                            <Slide direction="up" in={this.state.isAvatarPreviewOpen} mountOnEnter unmountOnExit>
                                <div className="update-profile-modal-avatar-preview" onClick={this.handleAvatarPreviewModal}>
                                    <img id="update-profile-avatar-preview" className="avatar-preview"
                                        src={this.state.avatar}
                                    />
                                </div>
                            </Slide>
                        </Modal>
                        
                        <div className="update-fields-container" >
                            <Input inputType="text"
                                inputWidth="60%"
                                inputHeight="12%"
                                inputPlaceholder="Nome completo"
                                setInput={this.setFullName}
                            />

                            <Input inputType="text"
                                inputWidth="60%"
                                inputHeight="12%"
                                inputPlaceholder="Nome de usuário"
                                setInput={this.setUsername}
                            />

                            <Input inputType={this.state.dateInputType}
                                inputWidth="60%"
                                inputHeight="12%"
                                inputPlaceholder="Data de nascimento"
                                setInput={this.setBirthday}
                                onFocus={ this.changeDateInputTypeToDate }
                                onBlur={ this.changeDateInputTypeToText }
                            />
                        </div>

                        <div className="update-profile-button-container" >
                            <ButtonCommon
                                buttonHeight="80%"
                                buttonWidth="35%"
                                buttonPadding="0%"
                                onButtonClick={this.handleIsUpdateProfileModalOpen}
                            >
                                Atualizar
                            </ButtonCommon>
                        </div>

                    </div>
                </Slide>
            </Modal>
        );
    }

}