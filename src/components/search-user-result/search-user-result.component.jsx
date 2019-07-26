import React from 'react';
import './search-user-result.component.css';
import { ReactComponent as UserIcon } from '../../assets/icons/user-circle-solid.svg';
import { ReactComponent as AddUser } from '../../assets/icons/user-plus-solid.svg';

export class SearchUserResult extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    sendFriendInvite = () => {
        // use this.props.userId to invite friend
    }

    render() {
        return (
            <div className="user-search-result" >
                <div className="user-info" >
                    {
                        this.props.userAvatar ?
                            <img className="user-avatar" src={ this.props.userAvatar } />
                        :
                            <UserIcon className="user-avatar-icon" />
                    }

                    <p className="search-result-username" > {this.props.username} </p>
                </div>

                <AddUser className="search-add-user-icon" onClick={this.sendFriendInvite} />
            </div>
        );
    }
    

}