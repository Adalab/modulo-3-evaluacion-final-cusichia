import { useParams } from "react-router"

function CharacterDetail({characterList}) {

  const params = useParams();
  const name = params.name;

  const character = characterList.find(character => character.name.toLowerCase() === name.toLowerCase());

  return (
    <>
      <h2>Character details</h2>

      <div>
        <img src={character.image} alt={character.name} />
        <h3>{character.name}</h3>
        <p>Status: {character.alive === true ? "alive" : "dead"}</p>
        <p>Gender: {character.gender === "female" ? "female" : "male"}</p>
        <p>House: {character.house}</p>
        <p>Species: {character.species}</p>
        <p>Actor: {character.actor}</p>

      </div>


    </>
  )
}

export default CharacterDetail
