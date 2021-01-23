import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  public board = [];
  public boardSize = 9;

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

  public makeMove(event: any) {
    console.log('Hello');
  }

  public resetGame() {
    this.board = [];
  }

}
