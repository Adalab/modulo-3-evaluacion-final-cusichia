import React from 'react';
import { useState, useEffect } from 'react';
import './styles/App.scss';
import Header from './components/layout/Header';
import CharacterDetail from './components/Characters/CharacterDetail';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Error404 from './components/Error404';
import { Routes, Route } from 'react-router';

function App() {

  const [characterList, setCharacterList] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchHouse, setSearchHouse] = useState("");

  //llamada API
  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then(response => response.json())
      .then(data => {
        setCharacterList(data);
      })
  }, [])

  const hogwartsHouses = [...new Set(characterList.map(character => character.house))];

  //filtro sobre lista personajes
  const filteredList = characterList
  .filter(character => character.name.toLowerCase().includes(searchName.toLowerCase()))
  .filter(character => character.house === searchHouse || searchHouse === "");
  

    return (
      <>
      <Header/>

      <Routes>

        <Route index element={ 
          <Landing searchName={searchName} setSearchName={setSearchName} hogwartsHouses={hogwartsHouses} searchHouse={searchHouse} setSearchHouse={setSearchHouse} characterList={filteredList}/> }/>
        <Route path="/detail/:name" element={ <CharacterDetail characterList={characterList}/> } />
        <Route path="*" element={<Error404/>} />

      </Routes>

      <Footer/>

      </>
    )
}

export default App;
