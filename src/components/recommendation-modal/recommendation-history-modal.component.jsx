import React from 'react';
import './recommendation-history-modal.component.css';
import Modal from '@material-ui/core/Modal';
import Slide from '@material-ui/core/Slide';
import { ButtonCommon } from '../button-common/button-common.component';
import { Recommendation } from '../../models/recommendation';
import { RecommendationItem } from './recommendation-item/recommendation-item.component';

export class RecommendationHistoryModal extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            isCreateRecModalOpen: false,
            isSentRecommendationsListSelected: true,
            sentRecommendations: [
                new Recommendation(
                    1, 1, "jao", "", 2, "kleberzinho", "", new Date(), "ve TEOTFW, mui bueno", true,
                    "The End of The Fucking World", true, "mt bom mano, tu olha rapidinho, eu adorei"
                )
            ],
            receivedRecommendations: [
                new Recommendation(
                    2, 2, "kleberzinho", "", 1, "jao", "", new Date(), "ve GoT de uma vez cara, até ja acabou mds", true,
                    "Game of Thrones", false, "melhot serie ja feita, cheio de personagens daora, pena que o final foi bem +-"
                )
            ],
            isRecommendationModalOpen: false,
            selectedRecommendation: null
        }
    }

    handleIsCreateRecModalOpen = () => {
        this.setState( prevState => ({
            isCreateRecModalOpen: !prevState.isCreateRecModalOpen
        }));
    }

    renderSentRecommendationsList = () => {
        this.state.sentRecommendations.map(
            (sentRecommendationItem, key) => {
                <RecommendationItem
                    key={key}
                    userAvatar={sentRecommendationItem.recipientAvatar}
                    username={sentRecommendationItem.recipientUsername}
                    openRecommendation={() => { this.openRecommendationModal(receivedRecommendationItem) }}
                />
            }
        )
    }

    renderReceivedRecommendationsList = () => {
        this.state.receivedRecommendations.map(
            (receivedRecommendationItem, key) => {
                <RecommendationItem
                    key={key}
                    userAvatar={receivedRecommendationItem.recipientAvatar}
                    username={receivedRecommendationItem.recipientUsername}
                    openRecommendation={() => { this.openRecommendationModal(receivedRecommendationItem) }}
                />
            }
        )
    }

    handleIsRecommendationOpen = () => {
        this.setState( prevState => ({
            isRecommendationModalOpen: !prevState.isRecommendationModalOpen
        }));
    }

    openRecommendationModal = (recommendation) => {
        this.setState({
            selectedRecommendation: new Recommendation(
                recommendation.id, recommendation.authorId, recommendation.authorUsername,
                recommendation.authorAvatar, recommendation.recipientId, recommendation.recipientUsername,
                recommendation.recipientAvatar, recommendation.datetime, recommendation.title,
                recommendation.isShow, recommendation.showName, recommendation.hasInNetflix, recommendation.review
            )
        })
        this.handleIsRecommendationOpen();
    }

    render() {
        return (
            <Modal className="rec-hist-modal" open={this.props.open} onClose={this.props.onClose} >
                <Slide direction="up" in={this.props.open} mountOnEnter unmountOnExit >

                    <div className="rec-hist-modal-content" >
                        <div className="rec-hist-header" >
                            <p className="rec-hist-title" > Recomendações </p>
                        </div>

                        <ButtonCommon
                            buttonHeight="90%"
                            buttonWidth="40%"
                            buttonPadding="0%"
                            onButtonClick={this.handleIsCreateRecModalOpen}
                        >
                            Enviar recomendação
                        </ButtonCommon>
                    </div>

                    <div className="rec-hist-options" >
                        <button className="rec-hist-sent-recs" >
                            Enviadas
                        </button>

                        <button className="rec-hist-received-recs" >
                            Recebidas
                        </button>
                    </div>

                    {
                        this.state.isSentRecommendationsListSelected ?
                            this.renderSentRecommendationsList()
                        :
                            this.renderReceivedRecommendationsList()
                    }

                    <Recommendation
                        open={this.state.isRecommendationModalOpen}
                        onClose={this.handleIsRecommendationOpen}
                        senderAvatar={this.state.selectedRecommendation.authorAvatar}
                        senderUsername={this.state.selectedRecommendation.authorUsername}
                        title={this.state.selectedRecommendation.title}
                        isShow={this.state.selectedRecommendation.isShow}
                        showName={this.state.selectedRecommendation.showName}
                        hasInNetflix={this.state.selectedRecommendation.hasInNetflix}
                        recommendationReview={this.state.selectedRecommendation.review}
                    />

                </Slide>
            </Modal>
        )
    }

}