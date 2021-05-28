import './App.css';
import Axios from "axios";
import './RecipeTile'
import React, { useState } from 'react'
import RecipeTile from './RecipeTile';

function App() {

  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const appId = "7bc88129";
  const apiKey = "e1fdaad97887812a20874ed8bb1e0297";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${apiKey}&health=alcohol-free`;

  const getRecipe = async () => {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
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
        <input
          className="app-submit"
          type="submit"
          value="Search" />
      </form>
      <div>
        {recipes.map(recipe => {
          return <RecipeTile recipe = {recipe}/>;
        })}
      </div>
    </div>
  );
}

export default App;
