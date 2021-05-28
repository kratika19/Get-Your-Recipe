import './App.css';
import Axios from "axios";
import './RecipeTile'
import React, { useState } from 'react'
import RecipeTile from './RecipeTile';

function App() {

  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabel, sethealthLabel] = useState("vegan")
  const appId = "7bc88129";
  const apiKey = "e1fdaad97887812a20874ed8bb1e0297";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${apiKey}&health=${healthLabel}`;

  const getRecipe = async () => {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
    setquery("");
  }

  const submit = (e) => {
    e.preventDefault();
    getRecipe();
  }

  return (
    <div className="App">
      <h1>🥗GET YOUR RECIPE🥗</h1>
      <form action=""
        onSubmit={submit} className="app-search-form">
        <input
          className="app-input"
          placeholder="Enter Ingredient" type="text" value={query} onChange={(e) => { setquery(e.target.value) }} />

        <select className="app-dropdown" name="" id="">
          <option value="vegan" onClick={() => sethealthLabel("vegan")}>vegan</option>
          <option value="vegetarian" onClick={() => sethealthLabel("vegetarian")}>vegetarian</option>
          <option value="paleo" onClick={() => sethealthLabel("paleo")}>paleo</option>
          <option value="dairy-free" onClick={() => sethealthLabel("dairy-free")}>dairy-free</option>
          <option value="gluten-free" onClick={() => sethealthLabel("gluten-free")}>gluten-free</option>
          <option value="wheat-free" onClick={() => sethealthLabel("wheat-free")}>wheat-free</option>
          <option value="low-sugar" onClick={() => sethealthLabel("low-sugar")}>low-sugar</option>
          <option value="egg-free" onClick={() => sethealthLabel("egg-free")}>egg-free</option>
          <option value="peanut-free" onClick={() => sethealthLabel("peanut-free")}>peanut-free</option>
          <option value="try-nut-free" onClick={() => sethealthLabel("try-nut-free")}>try-nut-free</option>
          <option value="soy-free" onClick={() => sethealthLabel("soy-free")}>soy-free</option>
          <option value="fish-free" onClick={() => sethealthLabel("fish-free")}>fish-free</option>
          <option value="shell-fish-free" onClick={() => sethealthLabel("shell-fish-free")}>shell-fish-free</option>
        </select>

        <input
          className="app-submit"
          type="submit"
          value="Search" />

      </form>
      <hr />
      <div className="app-recipe">
        {recipes.map(recipe => {
          return <RecipeTile recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
