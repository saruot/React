import axios from 'axios'
import React, { useEffect, useState } from 'react'    
import Ingredient from './ingredient';




export default function Cocktail() {
    const [SearchInput, setSearchInput] = useState('');
    const [CocktailsList, setCocktailsList] = useState([])
    let newArr = [];
    useEffect(() => {
        const address = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
        axios.get(address)
            .then((response) => {
               // Base for accessing needed data from api
                const base = response.data.drinks
                setCocktailsList(base)
                // Arrays of ingredients and measures returned by the API
                let arrOfIngreds = [base.strIngredient1, 
                    base.strIngredient2, 
                    base.strIngredient3, 
                    base.strIngredient4, 
                    base.strIngredient5, 
                    base.strIngredient6,
                    base.strIngredient7, 
                    base.strIngredient8, 
                    base.strIngredient9, 
                    base.strIngredient10,
                    base.strIngredient11, 
                    base.strIngredient12,
                    base.strIngredient13,
                    base.strIngredient14, 
                    base.strIngredient15]
                let arrOfMeasures = [base.strMeasure1,
                    base.strMeasure2,
                    base.strMeasure3,
                    base.strMeasure4,
                    base.strMeasure5,
                    base.strMeasure6,
                    base.strMeasure7,
                    base.strMeasure8,
                    base.strMeasure9,
                    base.strMeasure10,
                    base.strMeasure11,
                    base.strMeasure12,
                    base.strMeasure13,
                    base.strMeasure14,
                    base.strMeasure15,];
                    // Creating a new array without null items
                let noNullIngred = arrOfIngreds.filter((item) => item !== null)
                let noNullMeasure = arrOfMeasures.filter((item) => item !== null)
                for (let i = 0; i < noNullIngred.length; i++) {
                    newArr.push({ingred : noNullIngred[i], measure : noNullMeasure[i]})                    
                }
      
            }) .catch(err => {
                alert(err)
            }
            )
    }, [])


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
               //  Arrays of ingredients and measures returned by the API
                let arrOfIngreds = [base.strIngredient1, 
                    base.strIngredient2, 
                    base.strIngredient3, 
                    base.strIngredient4, 
                    base.strIngredient5, 
                    base.strIngredient6,
                    base.strIngredient7, 
                    base.strIngredient8, 
                    base.strIngredient9, 
                    base.strIngredient10,
                    base.strIngredient11, 
                    base.strIngredient12,
                    base.strIngredient13,
                    base.strIngredient14, 
                    base.strIngredient15]
                let arrOfMeasures = [base.strMeasure1,
                    base.strMeasure2,
                    base.strMeasure3,
                    base.strMeasure4,
                    base.strMeasure5,
                    base.strMeasure6,
                    base.strMeasure7,
                    base.strMeasure8,
                    base.strMeasure9,
                    base.strMeasure10,
                    base.strMeasure11,
                    base.strMeasure12,
                    base.strMeasure13,
                    base.strMeasure14,
                    base.strMeasure15,];

                 //   Creating a new array without null items
                let noNullIngred = arrOfIngreds.filter((item) => item !== null)
                let noNullMeasure = arrOfMeasures.filter((item) => item !== null)
                for (let i = 0; i < noNullIngred.length; i++) {
                    newArr.push({ingred : noNullIngred[i], measure : noNullMeasure[i]})                    
                }
               
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
