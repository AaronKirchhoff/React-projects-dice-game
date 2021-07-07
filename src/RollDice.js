import React, {Component} from 'react';
import Die from './Die.js';
import './RollDice.css';


class RollDice extends Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    };
    constructor(props){
        super(props);
        // so if we have something in our app that we want to change the state of, we'll first need to initilaze where it should start. below we are initializing die1 and die2 both at the prop of 'one'. it will change when we this.setState{}
        this.state = {die1: 'one', die2: 'one', rolling: false};
        // name of the roll function below that we run in the button 
        this.roll = this.roll.bind(this);
    }

    roll(){
        // here is the logic that will choose random numbers from the array listed above. math.floor changes it to an integer, you need that. the logic between [] is picking the array index starting at 0, and we're setting the variable newDie1 to bbe equal to this random generator.
        const newDie1 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];
        const newDie2 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];
        // and after rolling the die and getting two new numbers, let's set the new state. and bind it above. binding lets the client side know This means tHIS component. 
        this.setState({die1: newDie1, die2: newDie2, rolling: true});
        // after setting rolling to true, we wait one second and reset the button back to roll dice.
        setTimeout(() => {
            this.setState({rolling: false})
        }, 1000);
    }

    render(){
        return (
            <div className = 'RollDice'>
                <div className="RollDice-Container">
                    <Die face={this.state.die1} rolling={this.state.rolling}/>
                    <Die face={this.state.die2} rolling={this.state.rolling}/>
                </div>
                <button onClick={this.roll} disabled={this.state.rolling}>{this.state.rolling ? 'Rolling...' : '🎲 Roll Dice! 🎲'}</button>
            </div>
        )
    }
}

export default RollDice;