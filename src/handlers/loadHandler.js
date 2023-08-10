import dom from "../dom.js";
import data from "../data.js";
import getPokemon from "../../apis/getPokemon.js";
import createPokemon from "../components/createPokemon.js"

const getPokemonHandler = async () => {
  const id = dom.searchBar.value;
  if (id === data.id){
    return
}
  try {
    const data = await getPokemon(id);
    const newCard = createPokemon(data);
    dom.container.innerHTML = '';
    dom.container.append(newCard);
    
  } catch (error) {
    console.error(error);
    const errorText = document.createElement('h1');
    errorText.innerText = 'Please enter the valid Pokemon Id';
    dom.container.innerHTML = '';
    dom.container.append(errorText);
  }
  data.id = id;
}

export default getPokemonHandler;