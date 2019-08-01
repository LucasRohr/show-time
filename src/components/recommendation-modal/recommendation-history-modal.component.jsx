import React from 'react';
import './recommendation-history-modal.component.css';
import Modal from '@material-ui/core/Modal';
import Slide from '@material-ui/core/Slide';
import { ButtonCommon } from '../button-common/button-common.component';
import { Recommendation } from '../../models/recommendation';
import { RecommendationItem } from './recommendation-item/recommendation-item.component';
import { CreateRecModal } from '../create-rec-modal/create-rec-modal.component';
import { RecommendationModal } from '../recommendation/recommendation.component.jsx';
import { colors } from '../../style/colors';

export class RecommendationHistoryModal extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            isCreateRecModalOpen: false,
            isReceivedRecommendationsListSelected: true,
            sentRecommendations: [
                new Recommendation(
                    1, 1, "jao", "", 2, "kleberzinho", "", new Date(), "ve TEOTFW, mui bueno", true,
                    "The End of The Fucking World", true, "mt bom mano, tu olha rapidinho, eu adorei"
                ),
                new Recommendation(
                    1, 1, "jao", "", 2, "kleberzinho", "", new Date(), "ve TEOTFW, mui bueno", true,
                    "The End of The Fucking World", true, "mt bom mano, tu olha rapidinho, eu adorei"
                ),
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
            selectedRecommendation: new Recommendation(0, 0, "", "", 1, "", "", new Date(), "", false, "", false, "")
        }
    }

    handleIsCreateRecModalOpen = () => {
        this.setState( prevState => ({
            isCreateRecModalOpen: !prevState.isCreateRecModalOpen
        }));
    }

    renderSentRecommendationsList = () => {
        return (
            this.state.sentRecommendations.map(
                (sentRecommendationItem, key) => {
                    return (
                        <RecommendationItem
                            key={key}
                            userAvatar={sentRecommendationItem.recipientAvatar}
                            username={sentRecommendationItem.recipientUsername}
                            recommendationTitle={sentRecommendationItem.title}
                            openRecommendation={() => { this.openRecommendationModal(sentRecommendationItem) }}
                        />
                    )
                }
            )
        )
    }

    renderReceivedRecommendationsList = () => {
        return (
            this.state.receivedRecommendations.map(
                (receivedRecommendationItem, key) => {
                    return (
                        <RecommendationItem
                            key={key}
                            userAvatar={receivedRecommendationItem.authorAvatar}
                            username={receivedRecommendationItem.authorUsername}
                            recommendationTitle={receivedRecommendationItem.title}
                            openRecommendation={() => { this.openRecommendationModal(receivedRecommendationItem) }}
                        />
                    )
                }
            )
        )
    }

    handleIsRecommendationModalOpen = () => {
        this.setState( prevState => ({
            isRecommendationModalOpen: !prevState.isRecommendationModalOpen
        }));
    }

    openRecommendationModal = (recommendation) => {
        this.setState({ selectedRecommendation: recommendation });
        this.handleIsRecommendationModalOpen();
    }

    setIsReceivedRecommendationsListSelectedTrue = () => {
        this.setState({ isReceivedRecommendationsListSelected: true });
    }

    setIsReceivedRecommendationsListSelectedFalse = () => {
        this.setState({ isReceivedRecommendationsListSelected: false });
    }

    render() {
        return (
            <Modal className="rec-hist-modal" open={this.props.open} onClose={this.props.onClose} >
                <Slide direction="up" in={this.props.open} mountOnEnter unmountOnExit >

                    <div className="rec-hist-modal-content" >

                        <div className="rec-hist-header" >
                            <p className="rec-hist-title" > Recomendações </p>

                            <ButtonCommon
                                buttonHeight="90%"
                                buttonWidth="50%"
                                buttonPadding="0%"
                                onButtonClick={this.handleIsCreateRecModalOpen}
                            >
                                Enviar recomendação
                            </ButtonCommon>
                        </div>

                        <div className="rec-hist-options" >
                            <button className="rec-hist-option-button"
                                style={{ color: this.state.isReceivedRecommendationsListSelected ? colors.primary : colors.grey }}
                                onClick={this.setIsReceivedRecommendationsListSelectedTrue} >
                                Recebidas
                            </button>

                            <button className="rec-hist-option-button"
                                style={{ color: this.state.isReceivedRecommendationsListSelected ? colors.grey : colors.primary }}
                                onClick={this.setIsReceivedRecommendationsListSelectedFalse} >
                                Enviadas
                            </button>
                        </div>

                        {
                            this.state.isReceivedRecommendationsListSelected ?
                                this.renderReceivedRecommendationsList()
                            :
                                this.renderSentRecommendationsList()
                        }

                        <CreateRecModal
                            open={this.state.isCreateRecModalOpen}
                            onClose={this.handleIsCreateRecModalOpen}
                        />

                        <RecommendationModal
                            open={this.state.isRecommendationModalOpen}
                            onClose={this.handleIsRecommendationModalOpen}
                            senderAvatar={this.state.selectedRecommendation.authorAvatar}
                            senderUsername={this.state.selectedRecommendation.authorUsername}
                            title={this.state.selectedRecommendation.title}
                            isShow={this.state.selectedRecommendation.isShow}
                            showName={this.state.selectedRecommendation.showName}
                            hasInNetflix={this.state.selectedRecommendation.hasInNetflix}
                            recommendationReview={this.state.selectedRecommendation.review}
                        />

                    </div>

                </Slide>
            </Modal>
        )
    }

}