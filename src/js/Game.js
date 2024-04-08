// TODO: write code here
import Field from './Field';
import Goblin from './Goblin';

export default class Game {
  
  constructor(boardSize) {
    this.boardSize = boardSize;
  }

  init() {
    this.field = new Field(this.boardSize);
    this.field.drawHoles();
    this.play();
  }

  play() {
    this.timer = setInterval(() => {
      this.field.clearField();
      this.curPos = this.field.getHole();
      Goblin.getGoblin(this.curPos);
    }, 1000);
  }


}