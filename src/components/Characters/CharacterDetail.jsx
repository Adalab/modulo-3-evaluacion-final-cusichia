import { useParams } from "react-router"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus, faHouse, faHeart, faSkull, faFingerprint, faFilm , faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import GryImg from '../../images/Gryffindor.png';
import SlyImg from '../../images/Slytherin.png';
import RavImg from '../../images/Ravenclaw.png';
import HuffImg from '../../images/Hufflepuff.png';

function CharacterDetail({characterList}) {

  const params = useParams();
  const name = params.name;

  const character = characterList.find(character => character.name.toLowerCase() === name.toLowerCase());

  const handleMenu = () => {
    window.location.href = '/characters'; 
  }

  return (
    <>
      <h2 className="characterDetail__h2">Character details</h2> 
      <div className="characterDetail__card">
          <button className="filters__btnMenu" onClick={handleMenu}>Back <FontAwesomeIcon icon={faArrowLeft} /></button>
        <div className="characterDetail__container">
          <img className="characterDetail__container-houseImg"
                src={
                  character.house === "Gryffindor" ? GryImg :
                  character.house === "Slytherin" ? SlyImg :
                  character.house === "Ravenclaw" ? RavImg :
                  character.house === "Hufflepuff" ? HuffImg :
                  ""
                }
                alt={character.house}
              />
          <img className="characterItem__img" src={character.image === "" ? `https://placehold.co/150x200?text=${character.name}` : character.image } alt={character.name}/>
            <div className="characterDetail__info">
              <h3>{character.name}</h3>
              <p>Status: {character.alive === true ? (<>alive <FontAwesomeIcon icon={faHeart} /></>) : (<>dead <FontAwesomeIcon icon={faSkull} /></>)}</p>
              <p>Gender: {character.gender === "female" ? (<>female <FontAwesomeIcon icon={faVenus} /></>) : (<>male <FontAwesomeIcon icon={faMars} /></>)}</p>
              <p>House: {character.house || 'Unknown'} <FontAwesomeIcon icon={faHouse} /></p>
              <p>Species: {character.species} <FontAwesomeIcon icon={faFingerprint} /></p>
              <p>Actor: {character.actor} <FontAwesomeIcon icon={faFilm} /></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CharacterDetail
