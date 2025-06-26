import React from 'react';
import { useState, useEffect } from 'react';
import './styles/App.scss';
import Header from './components/layout/Header';
import Filters from './components/Filters';
import CharacterList from './components/Characters/CharacterList';

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
  console.log(hogwartsHouses);

  //filtro sobre lista personajes
  const filteredList = characterList
  .filter(character => character.name.toLowerCase().includes(searchName.toLowerCase()))
  .filter(character => character.house === searchHouse || searchHouse === "");
  

  return (
    <>
    <Header/>
    <Filters psearchName={searchName} psetSearchName={setSearchName} phogwartsHouses={hogwartsHouses} psearchHouse={searchHouse} psetSearchHouse={setSearchHouse}/>
    <CharacterList pcharacterList={filteredList}/>
    </>
  )
}

export default App;
