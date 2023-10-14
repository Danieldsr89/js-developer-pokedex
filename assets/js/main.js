const pokemonList = document.getElementById('pokemonList')
const buttonLoadMore = document.getElementById('loadMoreButton')
const details = document.getElementById('details')
const maxRecord = 200
const limit = 8
let offset = 0;

function loadPokemonItens(offset,limit){
    pokeApi.getPokemons(offset,limit).then((pokemons =[])=> {
        pokemonList.innerHTML+=pokemons.map((pokemon)=>`

        <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>   
        <span class="name">${pokemon.name}</span> 
        
        <div class="detail">
        <ol class="types">
        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        </ol>     

        <img src="${pokemon.photo}"
        alt="${pokemon.name}">                  

        </div>                
        </li>                          
                   
        `).join('');            
        
    })
}
    loadPokemonItens(offset,limit);

    buttonLoadMore.addEventListener('click',() =>{

        offset += limit;
        const qtdRecordNextPage = offset + limit;

        if(qtdRecordNextPage>=maxRecord){
            const newLimit = maxRecord - offset;
            loadPokemonItens(offset,newLimit);
            buttonLoadMore.parentElement.removeChild(buttonLoadMore)

        }else{
            loadPokemonItens(offset,limit);
        }        
    })

    details.addEventListener('click',()=>{
        window.location='detailPokemon.html'
    })