import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  public board: any[];
  public boardSize = 9;
  public player = 'X';
  public stepCount = 1;
  public gameOver: boolean;
  public winner: string = '';
  constructor() { }

  ngOnInit(): void {
    this.createGameBoard();
  }

  public createGameBoard() {
    this.board = [];
    for (let index = 0; index < this.boardSize; index++) {
      this.board.push( {
        index: index,
        state: null
      })
    }
    return this.board;
  }

  public makePlayerMove(squareClicked) {
    if(!this.gameOver) {
      this.player = this.player === 'X' ? 'O' : 'X';
      squareClicked.state = this.player;
      this.updateBoard(squareClicked);
      console.log(squareClicked);
      this.stepCount ++;
      this.gameOver = this.checkIfGameOver() || (this.winner!=='') ? true : false;
    }
  }

  updateBoard(squareClicked) {
    this.board[squareClicked.index].state = squareClicked.state;
    if (this.getWinner()) {
      this.winner = this.player;
      this.gameOver = true;
      console.log(this.winner);
    }
  }

  public checkIfGameOver() {
    return this.stepCount > 9 ? true : false;
  }

  public getWinner() {
    const victoryConditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (const condition of victoryConditions) {
      if ((this.board[condition[0]].state !== null || this.board[condition[1]].state !== null || this.board[condition[2]].state !== null) && this.board[condition[0]].state === this.board[condition[1]].state
        && this.board[condition[1]].state === this.board[condition[2]].state) {
          return true;
      }
    }
    return false;
  }

  public resetGame() {
    this.stepCount = 1;
    this.gameOver = false;
    this.winner = '';
    this.createGameBoard();
  }

}
