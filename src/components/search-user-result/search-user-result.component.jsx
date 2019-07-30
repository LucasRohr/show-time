import React from 'react';
import './search-user-result.component.css';
import { ReactComponent as UserIcon } from '../../assets/icons/user-circle-solid.svg';
import { ReactComponent as AddUser } from '../../assets/icons/user-plus-solid.svg';
import { OtherUserProfile } from '../profile/other-user-profile/other-user-profile.component';

export class SearchUserResult extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            userId: 1,
            isOtherUserProfileOpen: false
        }
    }

    sendFriendInvite = () => {
        // use this.props.userId to invite friend
    }

    handleIsOtherUserProfileOpen = () => {
        this.setState( prevState => ({
            isOtherUserProfileOpen: !prevState.isOtherUserProfileOpen
        }));
    }

    render() {
        return (
            <div className="user-search-result" >
                <div className="user-info" onClick={this.props.openOtherUserProfile} >
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