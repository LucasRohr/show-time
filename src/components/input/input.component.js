import React from 'react';
import './input.component.css';

export class InputComponent extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            inputText: ""
        };
    }

    render() {
        return (
            <input className="input"
                type={this.props.inputType}
                style={{height: this.props.inputHeight, width: this.props.inputWidth}}
                placeholder={this.props.inputPlaceholder}
                onChange={ this.props.setInput }
             />
        );
    }

}