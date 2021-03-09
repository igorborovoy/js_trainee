import { RenderDOM } from './renderDom.js'


export class Favorite extends RenderDOM {
  constructor() {
    super();
  }

  showFavorites() {
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        let pok = JSON.parse(localStorage.getItem(key));
        this.showPokemon(pok.name, pok.imageUrl);
      }
    }
  }
}

const fav = new Favorite();
fav.showFavorites();
