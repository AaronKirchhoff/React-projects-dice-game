import React, {Component} from 'react';
import './Die.css'

class Die extends Component {
    render(){
        return(
            // <i> i tag to use font awesome import code from index.html
            // Die is the calss name below, fas -fa-dice-number is the font awesome thing
            <i className={`Die fas fa-dice-${this.props.face} ${this.props.rolling ? 'shaking' : ''}`}></i>
        )
    }
}

export default Die;