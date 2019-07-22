import React from 'react';
import './create-rec-modal.component.css';
import Modal from '@material-ui/core/Modal';
import Slide from '@material-ui/core/Slide';
import Recommendation from '../../models/recommendation';
import { ButtonCommon } from '../../components/button-common/button-common.component.jsx';
import { ReactComponent as FriendsIcon } from '../../assets/icons/user-friends-solid.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/user-circle-solid.svg';

export class CreateRecModal extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            friend: null,
            isShow: true,
            hasInNetflix: true,
            title: '',
            showName: '',
            review: ''
        };
    }

    handleSelectedFirstType = () => {
        if(!this.state.isShow) {
            this.setState({ isShow: true });
        }
    }

    handleSelectedSecondType = () => {
        if(this.state.isShow) {
            this.setState({ isShow: false });
        }
    }

    handleSelectedFirstNetflix = () => {
        if(!this.state.hasInNetflix) {
            this.setState({ hasInNetflix: true });
        }
    }

    handleSelectedSecondNetflix = () => {
        if(this.state.hasInNetflix) {
            this.setState({ hasInNetflix: false });
        }
    }

    setTitle = (e) => {
        this.setState({ title: e.target.value });
    }

    setShowName = (e) => {
        this.setState({ showName: e.target.value });
    }

    setReview = (e) => {
        this.setState({ review: e.target.value });
    }

    recommend = () => {
        let recommendation = new Recommendation(
            1, 1, "lusca", "", this.state.friend.id, this.state.friend.username, this.state.friend.avatar, new Date(), this.state.title, this.state.isShow, this.state.showName,
            this.state.hasInNetflix, this.state.review
        );

        console.log(recommendation);
    }

    render() {
        return (
            <Modal className="rec-modal" open={this.props.open} onClose={this.props.onClose} >
                <Slide direction="up" in={this.props.open} mountOnEnter unmountOnExit>

                    <div className="modal-content" >

                        <div className="recipient-container" >
                            <p className="recipient-label" > Para </p>

                            {
                                this.state.friend ?
                                    <div className="recipient" >
                                        {
                                            this.state.friend.avatar ?
                                                <img className="friend-avatar" src={ this.state.friend.avatar } />
                                            :
                                                <UserIcon className="friend-avatar-icon" />
                                        }

                                        <p className="friend-username" > { this.state.friend.username } </p>
                                    </div>
                                :
                                    <ButtonCommon>
                                        <p className="search-friend-button-title" > Procurar amigo </p>
                                        <FriendsIcon className="friends-icon" />
                                    </ButtonCommon>
                            }

                        </div>
                            
                        <p className="modal-title" > Recomende uma série ou filme! </p>
                        
                        <div className="type-netflix" >

                            <div className="radio-container" >
                                <p className="radio-label" > O que você vai avaliar? </p>

                                <Radio
                                    firstRadioText="Série"
                                    secondRadioText="Filme"
                                    onFirstClick={this.handleSelectedFirstType}
                                    onSecondClick={this.handleSelectedSecondType}
                                    isFirstSelected={this.state.isShow}
                                    radioHeight="50%"
                                    radioWidth="70%"
                                />

                            </div>

                            <div className="radio-container" >
                                <p className="radio-label" > Tem na Netflix? </p>

                                <Radio
                                    firstRadioText="Sim!"
                                    secondRadioText="Não"
                                    onFirstClick={this.handleSelectedFirstNetflix}
                                    onSecondClick={this.handleSelectedSecondNetflix}
                                    isFirstSelected={this.state.hasInNetflix}
                                    radioHeight="50%"
                                    radioWidth="70%"
                                />
                            </div>

                        </div>

                        <div className="show-title" >
                            <Input
                                inputType="text"
                                inputWidth="90%"
                                inputHeight="25%"
                                inputPlaceholder="Título da publicação"
                                setInput={this.setTitle}
                            />

                            <Input
                                inputType="text"
                                inputWidth="90%"
                                inputHeight="25%"
                                inputPlaceholder={ `Nome ${ this.state.isShow ? "da série" : "do filme" }` }
                                setInput={this.setShowName}
                            />
                        </div>

                        <textarea className="review"
                            placeholder="O que você achou?"
                            onChange={this.setReview}
                        />

                        <div className="rec-button-container" >
                            <ButtonCommon buttonWidth="30%"
                                buttonHeight="60%"
                                buttonPadding="0%"
                                onButtonClick={this.recommend}
                                >
                                Recomendar
                            </ButtonCommon>
                        </div>

                    </div>

                </Slide>
            </Modal>
        );
    }

}