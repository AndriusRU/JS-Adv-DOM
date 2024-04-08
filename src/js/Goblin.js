import gobImg from '../img/goblin.png';

export default class Goblin {
  static getGoblin(place) {
    const goblin = document.createElement('img');
    goblin.src = gobImg;
    place.appendChild(goblin);
  }
}
