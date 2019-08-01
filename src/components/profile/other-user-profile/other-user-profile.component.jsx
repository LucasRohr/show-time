import React from 'react';
import './other-user-profile.component.css';
import Modal from '@material-ui/core/Modal';
import Slide from '@material-ui/core/Slide';
import { ButtonCommon } from '../../button-common/button-common.component';
import { CreateRecModal } from '../../create-rec-modal/create-rec-modal.component.jsx';
import { ReactComponent as UserIcon } from '../../../assets/icons/user-circle-solid.svg';
import { ReactComponent as AddFriendIcon } from '../../../assets/icons/user-plus-solid.svg';
import { ReactComponent as PaperPlaneIcon } from '../../../assets/icons/paper-plane-regular.svg';
import { ReactComponent as BackArrow } from '../../../assets/icons/arrow-left-solid.svg';

export class OtherUserProfile extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            otherUserAvatar: '',
            otherUserUsername: 'zezinho capixaba',
            otherUserFullName: 'ze da kakakakaka',
            otherUserBirthday: new Date(),
            // === DATE FORMATING ===
            day: "",
            dayF: "",
            month: "",
            monthF: "",
            year: "",
            // ======================
            otherUserPublications: 12,
            isFriend: true,
            isRecommendationModalOpen: false
        }
    }

    formatBirthday = (datetime) => {
        this.setState({ day: datetime.getDate().toString()});
        this.setState({ dayF: (this.state.day.length == 1) ? '0' + this.state.day : this.state.day});
        this.setState({ month: (datetime.getMonth() + 1).toString()});
        this.setState({ monthF: (this.state.month.length == 1) ? '0'+ this.state.month : this.state.month});
        this.setState({ yearF: datetime.getFullYear()});
        return `${this.state.dayF}/${this.state.monthF}/${this.state.yearF}`;
    }

    handleIsRecommendationModalOpen = () => {
        this.setState( prevState => ({
            isRecommendationModalOpen: !prevState.isRecommendationModalOpen
        }));
    }

    sendFriendInvite = () => {
        
    }

    render() {
        return (

            <div className="other-user-profile-modal-content" >

                <div className="other-user-profile-header" >
                    <div className="other-user-avatar-username-container" >
                        {
                            this.state.otherUserAvatar ?
                                <img className="other-user-profile-avatar" src={ this.state.otherUserAvatar } />
                            :
                                <UserIcon className="other-user-profile-avatar-icon" />
                        }
                        <p className="other-user-profile-username" > {this.state.otherUserUsername} </p>
                    </div>

                    <ButtonCommon
                        buttonHeight="90%"
                        buttonWidth="20%"
                        buttonPadding="0%"
                        onButtonClick={this.props.handleOtherUserProfile}
                    >
                        <div className="other-user-back-button-content" >
                            <BackArrow className="other-user-back-button-icon" />
                            <p className="other-user-back-button-title" > Voltar </p>
                        </div>
                    </ButtonCommon>
                </div>

                <div className="other-user-profile-user-info-container" >
                    <div className="other-user-profile-info-container" >
                        <p className="other-user-profile-info-label" > Nome completo </p>
                        <p className="other-user-profile-info" > {this.state.otherUserFullName} </p>
                    </div>

                    <div className="other-user-profile-info-container" >
                        <p className="other-user-profile-info-label" > Data de nascimento </p>
                        <p className="other-user-profile-info" > {this.formatBirthday(this.state.otherUserBirthday)} </p>
                    </div>

                    <div className="other-user-profile-info-container" >
                        <p className="other-user-profile-info-label" > Publicações </p>
                        <p className="other-user-profile-info" > {this.state.otherUserPublications} </p>
                    </div>
                </div>

                <div className="other-user-action-button-container" >
                    <button className="other-user-action-button" onClick={ this.state.isFriend ? this.handleIsRecommendationModalOpen : this.sendFriendInvite } >
                        {
                            this.state.isFriend ?
                                <PaperPlaneIcon className="send-recommendation-icon" />
                            :
                                <AddFriendIcon className="add-user-icon" />
                        }
                    </button>
                </div>

                <CreateRecModal
                    open={this.state.isRecommendationModalOpen}
                    onClose={this.handleIsRecommendationModalOpen}
                />
                
            </div>
                    
        );
    }

}