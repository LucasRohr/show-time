import React from 'react';
import './radio.component.css';
import { colors } from '../../style/colors';

export class Radio extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div style={{ width: this.props.radioWidth, height: this.props.radioHeight }}>
                <button className="radio-option"
                    onClick={this.props.onFirstClick}
                    style={{ background: this.props.isFirstSelected ? colors.primary : colors.background,
                    color: this.props.isFirstSelected ? colors.background : colors.primary }} >
                        {this.props.firstRadioText}
                </button>

                <button className="radio-option"
                    onClick={this.props.onSecondClick}
                    style={{ background: !this.props.isFirstSelected ? colors.primary : colors.background,
                    color: this.props.isFirstSelected ? colors.primary : colors.background }} >
                    {this.props.secondRadioText}
                </button>
            </div>
        );
    }

}