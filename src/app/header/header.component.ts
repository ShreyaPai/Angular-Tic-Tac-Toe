import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() reset: EventEmitter<string> = new EventEmitter<string>();
  @Input() winner: string;
  @Input() gameOver: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  public resetGame() {
    this.reset.emit(null);
  }

}
