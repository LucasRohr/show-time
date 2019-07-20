import React from 'react';
import './create-pub-modal.component.css';
import Modal from '@material-ui/core/Modal';
import Slide from '@material-ui/core/Slide';
import { Input } from '../input/input.component.jsx';
import StarRatings from 'react-star-ratings';
import { colors } from '../../style/colors';
import { ReactComponent as AddImage } from '../../assets/icons/image-plus.svg';
import { ButtonCommon } from '../button-common/button-common.component.jsx';
import { Radio } from '../radio/radio.component';

export class CreatePubModal extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
            hasInNetflix: true,
            showName: '',
            title: '',
            grade: 0,
            review: '',
            image: undefined
        }
    }

    changeRating = (rating) => {
        this.setState({ grade: rating })
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

    render() {
        return (
            <Modal className="pub-modal" open={this.props.open} onClose={this.props.onClose} >
                <Slide direction="up" in={this.props.open} mountOnEnter unmountOnExit>
                    <div className="modal-content" >
                        
                        <p className="modal-title" > Avalie uma série ou filme! </p>
                        
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
                                inputPlaceholder="Nome da série"
                            />

                            <Input
                                inputType="text"
                                inputWidth="90%"
                                inputHeight="25%"
                                inputPlaceholder="Título da publicação"
                            />
                        </div>

                        <div className="grade-review" >
                            
                            <div className="grade" >
                                <p className="grade-label" > Qual a sua nota? </p>
                                <StarRatings
                                    rating={this.state.grade}
                                    numberOfStars={5}
                                    changeRating={(rating) => this.changeRating(rating)}
                                    starRatedColor={colors.primary}
                                    starHoverColor={colors.primary}
                                    svgIconPath="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                                    svgIconViewBox="0 0 448 512"
                                />
                            </div>

                            <textarea className="review" placeholder="O que você achou?" />

                        </div>

                        <div className="image-sends" >

                            <button className="pub-image-button" >
                                <AddImage className="add-image-icon" />
                            </button>
                            
                            <ButtonCommon buttonWidth="30%"
                                buttonHeight="60%">
                                Publicar
                            </ButtonCommon>

                        </div>

                    </div>
                </Slide>
            </Modal>
        );
    }

}