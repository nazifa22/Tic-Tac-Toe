import React, {Component} from 'react';
import './TicTacToe.css'

class TicTacToe extends Component {
    constructor() {
        super()
        this.state = {
            turn: 'X',
            square: Array(9).fill(''),
            totalMoves: 0,
            gameEnded: false,
            winner: undefined
        }
    }

    squareValue(e) {
        if(this.state.square[e.target.dataset.square] === '' && this.state.gameEnded === false) {

            this.setState({
                turn: this.state.turn === 'X' ? '0' : 'X',
                square: this.state.square,
                totalMoves: this.state.totalMoves = this.state.totalMoves+1
            })
    
            this.state.square[e.target.dataset.square] = this.state.turn;
            e.target.innerText = this.state.turn

            console.log(this.state.square[e.target.dataset.square])
            console.log(this.state.gameEnded)

        }

        var result = this.checkWinner()

        if(result === 'X') {
            this.setState({
                gameEnded: true,
                winner: 'X'
            })
        }

        else if(result === '0') {
            this.setState({
                gameEnded: true,
                winner: '0'
            })
        }

        else if(result === 9){
            this.setState({
                gameEnded: true,
                winner: 'None'
            })
        }
    }

    checkWinner() {
        var moves = [[0,3,6], [0,5,8], [0,1,2], [3,4,5], [6,7,8], [1, 4, 7], [2,5,8], [2,4,6]]
        var board = this.state.square
        for(let i=0; i<moves.length; i++) {
            if(board[moves[i][0]] === board[moves[i][1]] && board[moves[i][1]] === board[moves[i][2]]) {
                return board[moves[i][0]]
            }
        }
    }

    render() {
        return (
            <>
                <h1><i>Tic Tac Toe</i></h1>
                <p>Player: {this.state.turn}</p>
                <div>{this.state.winner}</div>
                <div id="board" onClick={(e)=>this.squareValue(e)}>
                    <div className="square" data-square="0"></div>
                    <div className="square" data-square="1"></div>
                    <div className="square" data-square="2"></div>
                    <div className="square" data-square="3"></div>
                    <div className="square" data-square="4"></div>
                    <div className="square" data-square="5"></div>
                    <div className="square" data-square="6"></div>
                    <div className="square" data-square="7"></div>
                    <div className="square" data-square="8"></div>
                </div>
            </>
        )
    }
}

export default TicTacToe;