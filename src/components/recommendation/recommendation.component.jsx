import React from 'react';
import './recommendation.component.css';
import { ButtonCommon } from '../button-common/button-common.component.jsx';
import { colors } from '../../style/colors';
import Modal from '@material-ui/core/Modal';
import Slide from '@material-ui/core/Slide';
import { ReactComponent as UserIcon } from '../../assets/icons/user-circle-solid.svg';

export class Recommendation extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    declineRecommendation = () => {
        //use this.props.senderId
    }

    acceptRecommendation = () => {
        //use this.props.senderId
    }

    render() {
        return (

            <Modal className="rec-modal" open={this.props.open} onClose={this.props.onClose} >
                <Slide direction="up" in={this.props.open} mountOnEnter unmountOnExit>
                    <div className="recommendation-container" >

                        <div className="sender-info-container" >
                            
                            {
                                this.props.senderAvatar ?
                                    <img className="sender-avatar" src={ this.props.senderAvatar } />
                                :
                                    <UserIcon className="sender-avatar-icon" />
                            }

                            <p className="sender-title" > <span className="sender-username" > {this.props.senderUsername} </span> enviou uma recomendação! </p>
                            
                        </div>

                        <div className="title-show-container" >
                            <p className="recommendation-title" > {this.props.title} </p>

                            <p className="recommendation-show-name" >
                                {this.props.isShow ? "Série: " : "Filme: "}
                                <span className="show-name-rec" > {this.props.showName} </span>
                            </p>

                            <p className="recommendation-netflix" > {this.props.hasInNetflix ? "Tem na Netflix!" : "Não tem na Netflix"} </p>
                        </div>

                        <div className="recommendation-review-container" >
                            <p className="recommendation-review" > {this.props.recommendationReview} </p> 
                        </div>

                        <div className="recommendation-options-container" >
                            <ButtonCommon
                                buttonWidth="30%"
                                buttonHeight="90%"
                                buttonPadding="0%"
                                onButtonClick={this.declineRecommendation}
                                background={colors.background}
                                color={colors.primary}
                                border={`0.5px solid ${colors.primaryLighter}`}
                            >
                                Outra hora
                            </ButtonCommon>

                            <ButtonCommon
                                buttonWidth="30%"
                                buttonHeight="90%"
                                buttonPadding="0%"
                                onButtonClick={this.acceptRecommendation}
                            >
                                Vou assistir!
                            </ButtonCommon>
                        </div>

                    </div>
                </Slide>
            </Modal>
        );
    }

}