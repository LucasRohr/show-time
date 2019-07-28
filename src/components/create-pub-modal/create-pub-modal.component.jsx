import React from 'react';
import './create-pub-modal.component.css';
import Modal from '@material-ui/core/Modal';
import Slide from '@material-ui/core/Slide';
import { Input } from '../input/input.component.jsx';
import StarRatings from 'react-star-ratings';
import { colors } from '../../style/colors';
import { ReactComponent as AddImage } from '../../assets/icons/image-plus.svg';
import { ReactComponent as DeleteImage } from '../../assets/icons/trash-alt-solid.svg';
import { ReactComponent as ExitPreview } from '../../assets/icons/times-circle-regular.svg';
import { ButtonCommon } from '../button-common/button-common.component.jsx';
import { Radio } from '../radio/radio.component';
import { Publication } from '../../models/publication';

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
            image: null,
            isImagePreviewOpen: false
        };
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

    setTitle = (e) => {
        this.setState({ title: e.target.value });
    }

    setShowName = (e) => {
        this.setState({ showName: e.target.value });
    }

    setReview = (e) => {
        this.setState({ review: e.target.value });
    }

    activateInputFile = () => {
        if(this.state.image) {
            this.setState({ image: null });
        }else{
            document.getElementById("input-file-publication").click();
        }
    }

    encodeImageFile = (evt) => {
        let tgt = evt.target || window.event.srcElement;
        let files = tgt.files;
        if (FileReader && files && files.length) {
            let fr = new FileReader();
            fr.onloadend = (loadEvent) => {
                this.setState({ image: loadEvent.target.result });
            }
            fr.readAsDataURL(files[0]);
        }
    }

    handleImagePreviewModal = () => {
        this.setState(prevState => ({ 
            isImagePreviewOpen: !prevState.isImagePreviewOpen
        }));
    }

    publish = () => {
        let publication = new Publication(
            1, 1,
            "lusca", "", new Date(), this.state.title, this.state.isShow, this.state.showName,
            this.state.grade, this.state.hasInNetflix, this.state.image, this.state.review
        );
    }

    render() {
        return (
            <Modal className="create-pub-modal" open={this.props.open} onClose={this.props.onClose} >
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

                            <textarea className="pub-review"
                                placeholder="O que você achou?"
                                onChange={this.setReview}
                            />
                        </div>

                        <div className="image-send" >

                            <input id="input-file-publication" className="image-input"
                                type="file"
                                accept="image/*"
                                onChange={ (evt) => this.encodeImageFile(evt) }/>
                            
                            <button className="pub-image-button" onClick={this.activateInputFile} >
                                {
                                    this.state.image ?
                                        <DeleteImage className="image-icon" />
                                    :
                                        <AddImage className="image-icon" />
                                }
                            </button>

                            {
                                this.state.image ?
                                    <ButtonCommon buttonWidth="30%"
                                        buttonHeight="60%"
                                        buttonPadding="0%"
                                        onButtonClick={ this.handleImagePreviewModal }>
                                            Ver imagem
                                    </ButtonCommon>
                                :
                                    <div></div>
                            }

                            <Modal open={this.state.isImagePreviewOpen} onClose={this.handleImagePreviewModal}>
                                <Slide direction="up" in={this.state.isImagePreviewOpen} mountOnEnter unmountOnExit>
                                    <div className="pub-modal-image-preview" onClick={this.handleImagePreviewModal}>
                                        <img id="create-pub-image-preview" className="image-preview"
                                            src={this.state.image}
                                        />
                                    </div>
                                </Slide>
                            </Modal>
                            
                            <ButtonCommon buttonWidth="25%"
                                buttonHeight="60%"
                                buttonPadding="0%"
                                onButtonClick={this.publish}
                                >
                                Publicar
                            </ButtonCommon>

                        </div>

                    </div>
                </Slide>
            </Modal>
        );
    }

}