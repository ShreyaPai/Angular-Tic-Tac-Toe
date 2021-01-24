import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  public board = [];
  public boardSize = 9;
  public player = 'O';
  public stepCount = 1;
  gameOver: boolean
  constructor() { }

  ngOnInit(): void {
    this.createGameBoard();
  }

  public createGameBoard() {
    for (let index = 0; index < this.boardSize; index++) {
      this.board.push( {
        index: index,
        state: null
      })
    }
    return this.board;
  }

  public makePlayerMove(squareClicked) {
    this.updateBoard(squareClicked)
    if(squareClicked.state === null) {
      this.player = this.player === 'X' ? 'O' : 'X';
      squareClicked.state = this.player;
      console.log(squareClicked);
      this.stepCount ++;
    }
  }

  updateBoard(squareClicked) {
    this.board[squareClicked.index].state = squareClicked.state;
  }

  public checkIfGameOver() {
    return this.stepCount >= 9 ? true : false;
  }

  public getWinner() {

  }

  public resetGame() {
    this.board = [];
  }

}
