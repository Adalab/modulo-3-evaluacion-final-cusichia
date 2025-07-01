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
  const [isDark, setIsDark] = useState(() => localStorage.getItem('darkMode') === 'true');


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
  
  //Dark & Light Mode
    useEffect(() => {
      if (isDark) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
      localStorage.setItem('darkMode', isDark);
    }, [isDark]);

    const handleLightMode = () => setIsDark(false);
    const handleDarkMode = () => setIsDark(true);

    return (
      <>
      <Routes>

        <Route index element={ 
          <>
          <Header isDark={isDark} handleLightMode={handleLightMode} handleDarkMode={handleDarkMode}/>
          <Landing searchName={searchName} setSearchName={setSearchName} hogwartsHouses={hogwartsHouses} searchHouse={searchHouse} setSearchHouse={setSearchHouse} characterList={filteredList}/>
          <Footer/>
          </>
           }/>
        <Route path="/detail/:name" element={ 
          <>
          <Header isDark={isDark} handleLightMode={handleLightMode} handleDarkMode={handleDarkMode}/>
          <CharacterDetail characterList={characterList}/>
          <Footer/>
          </>
          } />
        <Route path="*" element={<Error404/>} />

      </Routes>
      </>
    )
}

export default App;
