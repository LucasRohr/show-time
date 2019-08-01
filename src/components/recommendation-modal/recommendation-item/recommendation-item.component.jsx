import React from 'react';
import './recommendation-item.component.css';
import { ReactComponent as UserIcon } from '../../../assets/icons/user-circle-solid.svg';

export class RecommendationItem extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="recommendation-item" >

                <div className="rec-item-user-info" >
                    {
                        this.props.userAvatar ?
                            <img className="rec-item-user-avatar" src={ this.props.userAvatar } />
                        :
                            <UserIcon className="rec-item-user-avatar-icon" />
                    }

                    <p className="rec-item-username" > {

                        this.props.username.length <= 11 ?
                            this.props.username
                        :
                            `${this.props.username.substring(0, 11)}...`

                    } </p>
                </div>

                <p className="rec-item-recommendation-title" > {
                    this.props.recommendationTitle.length <= 20 ?
                        this.props.recommendationTitle
                    :
                        `${this.props.recommendationTitle.substring(0, 21)}...`

                } </p>

            </div>
        );
    }

}