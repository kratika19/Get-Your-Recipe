import React from 'react'
import "./recipeTile.css"

export default function RecipeTile({ recipe }) {
    return (
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
            <div className="recipe-tile">
                <img className="recipe-img" src={recipe["recipe"]["image"]} />
                <p className="recipe-name">{recipe["recipe"]["label"]}</p>
            </div>
        )
    );
}
