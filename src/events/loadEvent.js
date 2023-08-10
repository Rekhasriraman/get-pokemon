import getPokemonHandler from "../handlers/loadHandler.js";
import dom from "../dom.js"

const getPokemonListener = () => {
dom.searchBtn.addEventListener('click', getPokemonHandler)
};

dom.searchBar.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getPokemonHandler();
    }
});

export default getPokemonListener;