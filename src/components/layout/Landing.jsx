import Filters from "../Filters"
import CharacterList from "../Characters/CharacterList";

function Landing({ searchName, setSearchName, hogwartsHouses, searchHouse, setSearchHouse, characterList }) {
  return (
    <>
     <Filters searchName={searchName} setSearchName={setSearchName} hogwartsHouses={hogwartsHouses} searchHouse={searchHouse} setSearchHouse={setSearchHouse}/>
     <CharacterList characterList={characterList}/>
    
    </>
  )
}

export default Landing
