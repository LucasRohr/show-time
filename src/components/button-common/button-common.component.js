import React from 'react';
import './button-common.component.css';

export class ButtonCommon extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <button className="button" style={{ padding: this.props.buttonPadding,
                width: this.props.buttonWidth,
                height: this.props.buttonHeight
             }}
            onClick={this.props.onButtonClick}>
             { this.props.buttonTitle }
            </button>
        );
    }

}