import Logo from '../../assets/icons/play-solid.svg'
import { colors } from '../../style/colors';
import './login-scene.css'
import React from 'react'

export class LoginScene extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userPassword: ''
        };
    }

    render() {
        return (

            <div className="login-container" >
                <div className="logo-title" >
                    <Logo fill={colors.primary} width={'20%'} height={'20%'} />
                </div>

                <div className="login-fields" >
                </div>

                <div className="login-button-container" >
                </div>

                <div className="register-container" >
                </div>
            </div>

        );
    }

}