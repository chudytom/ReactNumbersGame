import React, { Component } from 'react';
import Stars from '../Stars/Stars'
import Button from '../Button/Button'
import Answer from '../Answer/Answer'
import Numbers from '../Numbers/Numbers';
import _ from 'lodash'
import { DoneFrame } from '../DoneFrame/DoneFrame';

export default class Game extends Component {
    state = {
        selectedNumbers: [],
        usedNumbers: [],
        starsCount: 0,
        isAnswerCorrect: null,
        redraws: 5,
        doneStatus: null
    }

    constructor() {
        super();
        Numbers.count = 9
        Numbers.firstNumber = 1;
        Numbers.list = _.range(Numbers.firstNumber, Numbers.firstNumber + Numbers.count);
    }

    componentDidMount() {
        this.setState(() => ({
            starsCount: this.getRandomizedStarsCount()
        }))
    }

    getRandomizedStarsCount = () => {
        return Numbers.firstNumber + Math.floor(Math.random() * Numbers.count)
    }

    selectNumber = (clickedNumber) => {
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }))
    }

    deselectNumber = (clickedAnswerNumber) => {
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers
                .filter(number => number !== clickedAnswerNumber)
        }))
    }

    checkAnswer = () => {
        this.setState(prevState => ({
            isAnswerCorrect: prevState.starsCount === prevState.selectedNumbers.reduce((accumulatorValue, currentValue) => {
                return accumulatorValue + currentValue;
            }, 0)
        }))
    }

    updateDoneStatus = () => {
        this.setState(prevState => {
            if (prevState.usedNumbers.length === Numbers.count) {
                return { downStatus: 'You win!' };
            }
            if (prevState.redraws === 0 && !this.possibleSolutions(prevState)) {
                return { downStatus: 'Gave over!' };
            }
        })
    }

    // possibleSolutions = (prevState) => {
    //     const possibleNumbers = _.range(Numbers.firstNumber, Numbers.firstNumber + Numbers.count)
    //         .filter(number => !prevState.usedNumbers.include(number))
        
    //     const possibleSums = 
    // }

    // getAllPossibleSums = (numbersList) => {

    // }

    acceptAnswer = () => {
        console.log('Accept answer called');
        this.setState(prevState => ({
            usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
            selectedNumbers: [],
            isAnswerCorrect: null,
            starsCount: this.getRandomizedStarsCount()
        }))
    }

    redraw = () => {
        if (this.state.redraws <= 0) { return; }
        this.setState(prevState => ({
            selectedNumbers: [],
            isAnswerCorrect: null,
            starsCount: this.getRandomizedStarsCount(),
            redraws: prevState.redraws - 1
        }))
    }

    render() {
        return (
            <div className='container'>
                <h3>
                    Play Nine
                </h3>
                <hr />
                <div className='row'>
                    <Stars starsCount={this.state.starsCount} />
                    <Button selectedNumbers={this.state.selectedNumbers} checkAnswer={this.checkAnswer}
                        acceptAnswer={this.acceptAnswer} isAnswerCorrect={this.state.isAnswerCorrect}
                        redraw={this.redraw} redraws={this.state.redraws} />
                    <Answer selectedNumbers={this.state.selectedNumbers} deselectNumber={this.deselectNumber} />
                </div>
                <br />
                {this.state.doneStatus ?
                    <DoneFrame doneStatus={this.state.doneStatus} /> :
                    <Numbers selectedNumbers={this.state.selectedNumbers} selectNumber={this.selectNumber}
                        usedNumbers={this.state.usedNumbers} />
                }
            </div>
        )
    }
}
