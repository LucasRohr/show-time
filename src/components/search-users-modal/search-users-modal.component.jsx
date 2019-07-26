import React from 'react';
import './search-users-modal.component.css';
import Modal from '@material-ui/core/Modal';
import Slide from '@material-ui/core/Slide';
import { SearchUserResult } from '../search-user-result/search-user-result.component';
import { ReactComponent as AddUser } from '../../assets/icons/user-plus-solid.svg';
import { ReactComponent as SadFace } from '../../assets/icons/frown-open-regular.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/search-solid.svg';

export class SearchUsersModal extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            searchUsersResults: []
        };
    }

    setSearchText = (text) => {
        this.setState({ searchText: text });
    }

    renderNoSearchMadeMessage = () => {
        return (
            <div className="no-search-made-container" >
                <AddUser className="no-search-made-icon" />

                <p className="no-search-made-message" > Não perca tempo, faça novas amizades! </p>
            </div>
        );
    }

    renderNoSearchResultsMessage = () => {
        return (
            <div className="no-search-results-container" >
                <SadFace className="no-search-results-icon" />

                <p className="no-search-results-message" > Nenhum usuário com esse nome encontrado, tente novamente! </p>
            </div>
        );
    }

    renderUsersFromSearch = () => {
        return (
            this.state.searchUsersResults.map(
                (userSearch) => {
                    <SearchUserResult
                        userId={userSearch.id}
                        username={userSearch.username}
                        userAvatar={userSearch.avatar}
                    />
                }
            )
        );
    }

    render() {
        return (
            <Modal className="search-users-modal" open={this.props.open} onClose={this.props.onClose} >
                <Slide direction="up" in={this.props.open} mountOnEnter unmountOnExit >
                    <div className="modal-search-users-content" >

                        <div className="search-users-header" >
                            <p className="search-users-modal-title" > Procure por pessoas e faça amizades! </p>

                            <div className="search-users-input-container" >
                                <input type="text"
                                    className="user-search-input"
                                    onChange={ (text) => this.setSearchText(text) }
                                    placeholder="Digite o nome de alguém"
                                />

                                <SearchIcon className="user-search-icon" />
                            </div>
                        </div>

                        {
                            this.state.searchUsersResults.length > 0 ?
                                this.renderUsersFromSearch()
                            :
                                this.renderNoSearchMadeMessage()
                        }

                    </div>
                </Slide>
            </Modal>
        );
    }

}