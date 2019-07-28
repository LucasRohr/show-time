import React from 'react';
import './profile.component.css';
import Modal from '@material-ui/core/Modal';
import Slide from '@material-ui/core/Slide';
import { ButtonCommon } from '../button-common/button-common.component';
import history from '../../history';
import { ReactComponent as UserIcon } from '../../assets/icons/user-circle-solid.svg';
import { UpdateProfile } from '../update-profile/update-profile.component';

export class Profile extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            username: "username de alguem",
            fullName: "nome de alguem",
            birthday: new Date(),
            // === DATE FORMATING ===
            day: "",
            dayF: "",
            month: "",
            monthF: "",
            year: "",
            // ======================
            avatar: null,
            publications: 13,
            isUpdateProfileModalOpen: false
        };
    }

    formatBirthday = (datetime) => {
        this.setState({ day: datetime.getDate().toString()});
        this.setState({ dayF: (this.state.day.length == 1) ? '0' + this.state.day : this.state.day});
        this.setState({ month: (datetime.getMonth() + 1).toString()});
        this.setState({ monthF: (this.state.month.length == 1) ? '0'+ this.state.month : this.state.month});
        this.setState({ yearF: datetime.getFullYear()});
        return `${this.state.dayF}/${this.state.monthF}/${this.state.yearF}`;
    }

    logout = () => {
        history.push('login');
    }

    handleIsUpdateProfileModalOpen = () => {
        this.setState( prevState => ({
                isUpdateProfileModalOpen: !prevState.isUpdateProfileModalOpen
            })
        )
    }

    render() {
        return (
            <Modal className="profile-modal" open={this.props.open} onClose={this.props.onClose} >
                <Slide direction="up" in={this.props.open} mountOnEnter unmountOnExit >
                    <div className="profile-modal-content" >

                        <div className="profile-header" >

                            <div className="avatar-username-container" >
                                {
                                    this.state.avatar ?
                                        <img className="profile-avatar" src={ this.state.avatar } />
                                    :
                                        <UserIcon className="profile-avatar-icon" />
                                }
                                <p className="profile-username" > {this.state.username} </p>
                            </div>

                            <ButtonCommon
                                buttonHeight="90%"
                                buttonWidth="15%"
                                buttonPadding="0%"
                                onButtonClick={this.logout}
                            >
                                Sair
                            </ButtonCommon>

                        </div>

                        <div className="profile-user-info-container" >
                            <div className="profile-info-container" >
                                <p className="profile-info-label" > Nome completo </p>
                                <p className="profile-info" > {this.state.fullName} </p>
                            </div>

                            <div className="profile-info-container" >
                                <p className="profile-info-label" > Data de nascimento </p>
                                <p className="profile-info" > {this.formatBirthday(this.state.birthday)} </p>
                            </div>

                            <div className="profile-info-container" >
                                <p className="profile-info-label" > Publicações </p>
                                <p className="profile-info" > {this.state.publications} </p>
                            </div>
                        </div>

                        <div className="go-to-update-button-container" >
                            <ButtonCommon
                                buttonHeight="90%"
                                buttonWidth="35%"
                                buttonPadding="0%"
                                onButtonClick={this.handleIsUpdateProfileModalOpen}
                            >
                                Atualizar perfil
                            </ButtonCommon>
                        </div>

                        <UpdateProfile
                            open={this.state.isUpdateProfileModalOpen}
                            onClose={this.handleIsUpdateProfileModalOpen}
                        />
                        
                    </div>
                    
                </Slide>
            </Modal>
        );
    }

}