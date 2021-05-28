import './App.css';
import Axios from "axios";
import React, { useState } from 'react'

function App() {

  const [query, setquery] = useState("");
  const appId = "7bc88129";
  const apiKey = "e1fdaad97887812a20874ed8bb1e0297";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${apiKey}&health=alcohol-free`;

  const getRecipe = async () => {
    var result = await Axios.get(url);
    console.log(result.data);
  }

  return (
    <div className="App">
      <h1 onClick={getRecipe}>🥗 GET YOUR RECIPE 🥗</h1>
      <form action="" className="app-search-form">
        <input placeholder="Enter ingredient" type="text" value={query} onChange={(e) => { setquery(e.target.value) }} />

      </form>
    </div>
  );
}

export default App;
