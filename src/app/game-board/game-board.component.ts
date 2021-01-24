import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  public board = [];
  public boardSize = 9;
  public player = 'X';
  public computer = 'O';

  constructor() { }

  ngOnInit(): void {
    this.createGameBoard();
  }

  public createGameBoard() {
    for (let index = 1; index <= this.boardSize; index++) {
      this.board.push( {
        index: index,
        state: null
      })
    }
    return this.board;
  }

  public makePlayerMove(squareClicked) {
    this.updateBoard(squareClicked)
    console.log(squareClicked);
    this.player = this.player;
    squareClicked.state = this.player;
    if (this.player) {
      this.makeComputerMove(this.board);
    }
  }

  public makeComputerMove(board: any[]) {
    console.log(board);
  }

  updateBoard(squareClicked) {
    this.board[squareClicked.index].state = squareClicked.state;
    console.log(squareClicked.state);
  }

  public getWinner() {

  }

  public resetGame() {
    this.board = [];
  }

}
