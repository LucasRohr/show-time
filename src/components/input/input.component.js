import React from 'react';
import './input.component.css';

export class Input extends React.PureComponent {

    constructor(props) {
        super(props);
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