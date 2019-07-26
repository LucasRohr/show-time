import React from 'react';
import './profile.component.css';
import Modal from '@material-ui/core/Modal';
import Slide from '@material-ui/core/Slide';
import { ButtonCommon } from '../button-common/button-common.component';
import history from '../../history';

export class Profile extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            username: "username de alguem",
            fullName: "nome de alguem",
            birthday: new Date(),
            avatar: null,
            publications: 13
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

    renderUpdateProfile = () => {
        return (
            <div></div>
        );
    }

    render() {
        return (
            <Modal className="profile-modal" open={this.props.open} onClose={this.props.onClose} >
                <Slide direction="up" in={this.props.open} mountOnEnter unmountOnExit>
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
                                height="100%"
                                width="15%"
                                buttonPadding="0%"
                                onButtonClick={this.logout}
                            >
                                Sair
                            </ButtonCommon>

                        </div>

                        <div className="full-name-container-profile" >
                            <p className="full-name-profile-label" > Nome completo </p>
                            <p className="full-name-profile" > {this.state.fullName} </p>
                        </div>

                        <div className="birthday-container-profile" >
                            <p className="birthday-profile-label" > Data de nascimento </p>
                            <p className="birthday-profile" > {this.formatBirthday(this.state.birthday)} </p>
                        </div>

                        <div className="publications-container-profile" >
                            <p className="publications-profile-label" > Publicações </p>
                            <p className="publications-profile" > {this.state.publications} </p>
                        </div>

                        <div className="go-to-update-button-container" >
                            <ButtonCommon
                                height="100%"
                                width="35%"
                                buttonPadding="0%"
                                onButtonClick={this.renderUpdateProfile}
                            >
                                Atualizar perfil
                            </ButtonCommon>
                        </div>

                    </div>
                </Slide>
            </Modal>
        );
    }

}