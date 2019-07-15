import React from 'react';
import './publication.component.css';
import { ReactComponent as UserAvatar } from '../../assets/icons/user-circle-solid.svg';
import { ReactComponent as Logo } from '../../assets/icons/play-solid.svg';

const umb = require('../../assets/images/umbrella_academy_netflix_ringer.jpg');

export class Publication extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state= {
            day: '',
            dayF: '',
            month: '',
            monthF: '',
            yearF: '',
            hoursF: '',
            minsF: ''
        }
    }

    formatDate = (datetime) => {
        this.setState({ day: datetime.getDate().toString()});
        this.setState({ dayF: (this.state.day.length == 1) ? '0' + this.state.day : this.state.day});
        this.setState({ month: (datetime.getMonth() + 1).toString()});
        this.setState({ monthF: (this.state.month.length == 1) ? '0'+ this.state.month : this.state.month});
        this.setState({ yearF: datetime.getFullYear()});
        this.setState({ hoursF: datetime.getHours()});
        this.setState({ minsF: datetime.getMinutes()});
        return `${this.state.hoursF}:${this.state.minsF} - ${this.state.dayF}/${this.state.monthF}/${this.state.yearF}`;
    }

    render() {
        return (
            <div className="publication-container" >

                <div className="publication-base-info" >

                    <div className="user-pub-info" >
                        {
                            this.props.userAvatar.length == 0 ?
                                <UserAvatar className="avatar-icon-pub" />
                            :
                                <img className="user-avatar" src={ this.props.userAvatar } />
                        }

                        <div className="username-datetime" >
                            <p className="username-pub" > { this.props.username } </p>
                            <p className="datetime-pub" > { this.formatDate(this.props.datetime) } </p>
                        </div>
                    </div>

                    <p className="title-pub" > { this.props.title } </p>

                </div>

                <div className="show-info" >

                    <div className="show-base" >
                        
                        <div className="show-type-name-container" >
                            <p className="show-type" >
                                {
                                    this.props.isMovie == true ?
                                        "Filme:"
                                    :
                                        "Série:"
                                }
                            </p>
                            <p className="show-name" > { this.props.showName } </p>
                        </div>

                        <p className="netflix-show" >
                            {
                                this.props.hasInNetflix == true ?
                                    "Tem na Netflix!"
                                :
                                    "Não disponível na Netflix"
                            }
                        </p>

                    </div>

                    <div className="grade-container" >
                        <p className="grade-label-pub" > Minha nota: </p>
                        <div className="grade-note-container" >
                            <p className="grade-pub" > { this.props.grade } </p>
                            <Logo className="logo-pub-grade" />
                        </div>
                    </div>

                </div>
                
                {
                    
                }
                <img className="pub-image" src={ umb } />

                <div className="review-container" >
                    <p className="user-review" >
                        { this.props.review }
                    </p>
                </div>

            </div>
        );
    }

}