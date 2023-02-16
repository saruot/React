import axios from 'axios'
import React, { useEffect, useState } from 'react'    
import Ingredient from './ingredient';


// Author Samuli Ruotsalainen
// En jaksanut tehdä tyylittely tähän tehtävään, toivottavasti ei ollut tarpeellista

export default function Cocktail() {
    const [SearchInput, setSearchInput] = useState('');
    const [CocktailsList, setCocktailsList] = useState([])
    useEffect(() => {
        const address = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
        axios.get(address)
            .then((response) => {
               // Base for accessing needed data from api
                const base = response.data.drinks
                setCocktailsList(base)         
            }) .catch(err => {
                alert(err)
            }
            )
    }, [])

    // Hae function is used for searching the API. Returns object list of all coctails containing the search input.

    function Hae(){ 
        const address = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+SearchInput
        axios.get(address)
            .then((response) => {
               // Base for accessing needed data from api
               const base = response.data.drinks
               if (base.strIngredient1 === null) {
                return
               }
                setCocktailsList(base)
            }) .catch(err => {
                alert('Invalid search')
                console.log(err);
            }
            )
    }

    return (
        <div>
             <input placeholder='Kirjoita hakeaksesi' type="text" onInput={e => setSearchInput(e.target.value)} /> <button onClick={() => Hae()}>Hae</button>
             {CocktailsList.map((cocktail, index) => (
                <Ingredient cocktail={cocktail} index={index}/>
             )
             )}
        </div>

    )
}
