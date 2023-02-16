import React, { useEffect, useState } from 'react'

export default function Ingredient(props, index) {
    // Base contains all the data passed on from the API search
    const base = props.cocktail;
    const [newArr, setNewArr] = useState([]);
    useEffect(() => {
        // Setting up arrays for ingredients and measures. These will be
        // mapped out later to have a format of ingred:measure in the <li>
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
                    base.strMeasure15,]
      let noNullIngred = arrOfIngreds.filter((item) => item !== null)
      let noNullMeasure = arrOfMeasures.filter((item) => item !== null)
      const tempArr = [];
       for (let i = 0; i < noNullIngred.length; i++) {
                    tempArr.push({ingred : noNullIngred[i], measure : noNullMeasure[i]})
                }
                          setNewArr(tempArr)
            }, [])
    

  
    return (
             <div key={index}>
                <h1> {props.cocktail.strDrink} </h1>
                <h2>Glass</h2>
                <p> {props.cocktail.strGlass}</p>
                <h2>Ingredients</h2>
                <ul>
                        {newArr.map((ingred, i) => (
                            <li key={i}>
                            {ingred.ingred} {ingred.measure}
                            </li>
                        ))}
                </ul>
                 <h2>Instructions</h2>
                 <p>{props.cocktail.strInstructions}</p>
                  <img src={props.cocktail.strDrinkThumb} alt="" /> 
                 </div>
        )
}
