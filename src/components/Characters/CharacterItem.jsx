import { Link } from "react-router"
import GryImg from '../../images/Gryffindor.png';
import SlyImg from '../../images/Slytherin.png';
import RavImg from '../../images/Ravenclaw.png';
import HuffImg from '../../images/Hufflepuff.png';

function CharacterItem( {character}) {
  return (
    
    <Link to={"/detail/" + character.name}>
      <div className="characterItem">
      <img className="characterItem__houseImg"
                src={
                  character.house === "Gryffindor" ? GryImg :
                  character.house === "Slytherin" ? SlyImg :
                  character.house === "Ravenclaw" ? RavImg :
                  character.house === "Hufflepuff" ? HuffImg :
                  ""
                }
                alt={character.house}
              />
        <li>
            <img className="characterItem__img" src={character.image === "" ? `https://placehold.co/150x200?text=${character.name}` : character.image } alt={character.name}/>
            <p><label>Name: </label>{character.name}</p>
            <p><label>Species: </label>{character.species}</p>
          </li>
      </div>
      </Link>

  )
}

export default CharacterItem
