import React from 'react';
import './recommendation.component.css';
import { ButtonCommon } from '../button-common/button-common.component.jsx';
import { colors } from '../../style/colors';
import Modal from '@material-ui/core/Modal';
import Slide from '@material-ui/core/Slide';
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

                        <p className="sender-title" > <span className="sender-username" > {this.props.senderUsername} </span> enviou uma recomendação! </p>

                        <div className="title-show" >
                            <p className="recommendation-title" > {this.props.title} </p>

                            <p className="recommendation-show-name" >
                                <span className="show-type" > {this.props.isShow ? "Série: " : "Filme: "} </span>
                                {this.props.showName}
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