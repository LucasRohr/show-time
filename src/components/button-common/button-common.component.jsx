import React from 'react';
import './button-common.component.css';
import { colors } from '../../style/colors';

export class ButtonCommon extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <button className="button" style={{ padding: this.props.buttonPadding,
                width: this.props.buttonWidth,
                height: this.props.buttonHeight,
                background: this.props.background ? this.props.background : colors.primary,
                color: this.props.color ? this.props.color : colors.background,
                border: this.props.border ? this.props.border : "none"
             }}
            onClick={this.props.onButtonClick}>
             { this.props.children }
            </button>
        );
    }

}