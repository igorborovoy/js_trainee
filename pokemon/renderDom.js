
export class RenderDOM {
  showPokemon(name, imageUrl) {
    let image = document.createElement('img');
    let div = document.createElement('div');
    let container = document.querySelector('.container');
    let favoriteButton = document.createElement('button');
    let deleteButton = document.createElement('button');
    favoriteButton.textContent = 'В избранное';
    deleteButton.textContent = 'Удалить';
    favoriteButton.classList.add('fav-button');
    deleteButton.classList.add('del-button');
    image.src = imageUrl;
    div.classList.add('pokemon');
    div.value = `${name[0].toUpperCase()}${name.slice(1)}`;
    div.append(image);
    div.append(`${name[0].toUpperCase()}${name.slice(1)}`);
    div.append(favoriteButton);
    div.append(deleteButton);
    container.append(div);

    div.addEventListener('click', saveToLocalStorage);
    div.addEventListener('click', deletePokemon)

    function saveToLocalStorage(event) {

      if (event.target.classList.value === 'fav-button') {
        localStorage.setItem(`${this.value}`, JSON.stringify({ name: `${this.value}`, imageUrl: `${this.firstChild.src}` }));
      }
    }

    function deletePokemon(event) {
      if (event.target.classList.contains('del-button')) {
        this.remove();
      }
    }
  }
}