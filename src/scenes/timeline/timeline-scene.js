import React from 'react';
import './timeline-scene.css';
import { ReactComponent as Logo } from '../../assets/icons/play-solid.svg';
import { ReactComponent as Plane } from '../../assets/icons/paper-plane-regular.svg';
import history from '../../history';

export class TimelineScene extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            publications: []
        }
    }

    reloadTimeline = () => {
        history.push("/timeline");
    }

    render() {
        return(
            <div className="screen" >

                <div className="banner" >

                    <div className="logo-title" onClick={ this.reloadTimeline } >
                        <Logo className="logo" />
                        <div className="titles" >
                            <p className="title-show" > Show </p>
                            <p className="title-time" > Time </p>
                        </div>
                    </div>

                </div>

                <div className="timeline-body" >

                    <div className="welcome-container" >
                        <p className="welcome-message" ></p>
                    </div>

                    <div className="timeline-publications" >

                        {
                            this.state.publications.map(
                                (publication) => {
                                    return(
                                        // PUBLICATION COMPONENT WITH PROPS BEING PASSED TO IT 
                                        <div></div>
                                    );
                                }
                            )
                        }

                    </div>
                    
                </div>


                <button className="floating-button" > 
                    <Plane className="recommendation-icon" />
                </button>

            </div>
        );
    }



}