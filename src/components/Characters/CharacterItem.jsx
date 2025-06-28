import { Link } from "react-router"

function CharacterItem( {character}) {
  return (
    
    <Link to={"/detail/" + character.name}>
      <div className="characterItem">
        <li>
            <img src={character.image === "" ? `https://placehold.co/150x200?text=${character.name}` : character.image } alt={character.name}/>
            <p><label>Name: </label>{character.name}</p>
            <p><label>Species: </label>{character.species}</p>
          </li>
      </div>
      </Link>

  )
}

export default CharacterItem
