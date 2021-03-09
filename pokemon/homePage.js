import { RenderDOM } from './renderDom.js'
import { HTTPRequest } from './httpRequest.js'
import { Pokemon } from './pokemon.js'

const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=10'

export class HomePage extends RenderDOM {
  constructor() {
    super();
    this.httpService = new HTTPRequest();
  }

  getPokemonList(url) {
    const pokemonList = this.httpService.getRequest(url);
    pokemonList.then(data => {
      data.results.forEach(async ({ name, url }) => {
        let pokemon = new Pokemon(name, url);
        let imageUrl = await pokemon.setImageUrl(url);
        this.showPokemon(name, imageUrl);
      })
    })
  }
}

const pok = new HomePage();
pok.getPokemonList(URL);