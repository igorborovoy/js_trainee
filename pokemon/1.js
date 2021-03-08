const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=10'

class HTTPRequest {
  async getRequest(url) {
    let response = await fetch(url, { method: 'GET' });
    let data = await response.json();
    return data;
  }
}




async function sendRequest(url) {
  let response = await fetch(url, {
    method: 'GET'
  });
  response.json()
    .then(response => {
      console.log(response.results)
      response.results.forEach(elem => {
        getPokemonImage(elem.url)
      })
    })
}

async function getPokemonImage(url) {
  let image = await fetch(url, { method: 'GET' });
  image.json()
    .then(data => {
      console.log(data);
      let imageUrl = data.sprites.front_default;
      let pokemonName = `${data.name[0].toUpperCase()}${data.name.slice(1)}`;
      showPokemon(imageUrl, pokemonName);
    })
}

function showPokemon(url, name) {
  let image = document.createElement('img');
  let div = document.createElement('div');
  let container = document.querySelector('.container');
  let favoriteButton = document.createElement('button');
  let deleteButton = document.createElement('button');
  favoriteButton.textContent = 'В избранное';
  deleteButton.textContent = 'Удалить';
  favoriteButton.classList.add('fav-button');
  deleteButton.classList.add('del-button');
  image.src = url;
  div.classList.add('pokemon');
  div.value = name;
  div.append(image);
  div.append(name);
  div.append(favoriteButton);
  div.append(deleteButton);
  container.append(div);

  div.addEventListener('click', saveToLocalStorage);
  div.addEventListener('click', deletePokemon)
}

function saveToLocalStorage(event) {
  console.log(this, event.target);

  if (event.target.classList.value === 'fav-button') {
    localStorage.setItem(`${this.value}`, JSON.stringify({ name: `${this.value}` }));
    console.dir(this);
  }
}

function deletePokemon(event) {
  if (event.target.classList.contains('del-button')) {
    this.remove();
  }
}

sendRequest(URL);