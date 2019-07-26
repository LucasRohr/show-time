import React from 'react';
import './search-users-modal.component.css';
import Modal from '@material-ui/core/Modal';
import Slide from '@material-ui/core/Slide';
import { SearchUserResult } from '../search-user-result/search-user-result.component';

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
        
    }

    renderNoSearchResultsMessage = () => {

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
            <Modal open={this.props.open} onClose={this.props.onClose} >
                <Slide direction="up" in={this.props.open} mountOnEnter unmountOnExit >
                    <div className="modal-search-users-content" >

                        <div className="search-users-header" >
                            <p className="search-users-modal-title" > Procure por pessoas e faça amizades! </p>

                            <input type="text"
                                className="user-search-input"
                                onChange={ (text) => this.setSearchText(text) }
                                placeholder="Digite o nome de alguém"
                            />
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