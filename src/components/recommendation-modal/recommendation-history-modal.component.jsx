import React from 'react';
import './recommendation-history-modal.component.css';
import Modal from '@material-ui/core/Modal';
import Slide from '@material-ui/core/Slide';
import { ButtonCommon } from '../button-common/button-common.component';

export class RecommendationHistoryModal extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            isCreateRecModalOpen: false,
            sentRecommendations: [],
            receivedRecommendations: []
        }
    }

    handleIsCreateRecModalOpen = () => {
        this.setState( prevState => ({
            isCreateRecModalOpen: !prevState.isCreateRecModalOpen
        }));
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

                    



                </Slide>
            </Modal>
        )
    }

}