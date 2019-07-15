import React from 'react';
import './timeline-scene.css';
import { ReactComponent as Logo } from '../../assets/icons/play-solid.svg';
import { ReactComponent as Plane } from '../../assets/icons/paper-plane-regular.svg';
import history from '../../history';
import { ButtonCommon } from '../../components/button-common/button-common.component';
import { ReactComponent as Plus } from '../../assets/icons/plus-solid.svg';
import { ReactComponent as People } from '../../assets/icons/user-friends-solid.svg';
import { ReactComponent as Profile } from '../../assets/icons/user-circle-solid.svg';
import { publicationsMock } from '../../mocks/pubs.mocks';
import { Publication } from '../../components/publication/publication.component';

export class TimelineScene extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            currentUser: { username: "Lusquinha crey crey" },
            publications: publicationsMock
        }
    }

    reloadTimeline = () => {
        history.push("/timeline");
    }

    renderNoPublicationsMessage = () => {
        return (
            <div className="no-publications-container" >

                <div className="no-pubs-messages-container" >
                    <p className="no-pubs-message">
                        O Show Time é a sua rede social para compartilhar suas
                        experiências com séries e filmes!
                    </p>

                    <p className="no-pubs-message">
                        É novo(a) aqui? Crie uma publicação agora mesmo e procure por amigos!
                    </p>
                </div>

                <Logo className="logo-no-pubs" />
            </div>
        );
    }

    render() {
        return(
            <div className="screen" >

                <div className="banner-timeline" >

                    <div className="logo-title-timeline" onClick={ this.reloadTimeline } >
                        <Logo className="logo-timeline" />
                        <div className="titles-timeline" >
                            <p className="title-show-timeline" > Show </p>
                            <p className="title-time-timeline" > Time </p>
                        </div>
                    </div>

                    <div className="user-actions" >

                        <ButtonCommon
                            buttonWidth="30%"
                            buttonHeight="10%"
                        >
                            <div className="button-publication" >
                                <p className="create-publication" > Criar publicação </p>
                                <Plus className="plus-publication-icon" />
                            </div>
                        </ButtonCommon>

                        <ButtonCommon
                            buttonWidth="30%"
                            buttonHeight="10%"
                        >
                            <div className="button-publication" >
                                <p className="search-people" > Procurar pessoas </p>
                                <People className="search-people-icon" />
                            </div>
                        </ButtonCommon>

                        <Profile className="user-profile-icon"/>

                    </div>

                </div>

                <div className="timeline-body" >

                    <div className="welcome-container" >
                        <p className="welcome-message" > Bem-vindo(a) ao Show Time <p className="welcome-message-username" > { this.state.currentUser.username } </p> </p>
                    </div>

                    {
                        this.state.publications.length == 0 ?
                            this.renderNoPublicationsMessage()
                        :

                        <div className="timeline-publications" >

                            {
                                this.state.publications.slice(0).reverse().map(
                                    (publication) => {
                                        
                                        return(
                                            <Publication
                                                userAvatar={publication.userAvatar}
                                                username={publication.username}
                                                datetime={publication.datetime}
                                                title={publication.title}
                                                isMovie={publication.isMovie}
                                                showName={publication.showName}
                                                hasInNetflix={publication.hasInNetflix}
                                                grade={publication.grade}
                                                image={publication.image}
                                                review={publication.review}
                                            />
                                        );
                                    }
                                )
                            }

                        </div>
        
                            
                    }
                    
                </div>


                <button className="floating-button" > 
                    <Plane className="recommendation-icon" />
                </button>

            </div>
        );
    }



}