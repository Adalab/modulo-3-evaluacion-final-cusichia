
function CharacterItem( {character}) {
  return (
    <>
      <li>
          <img src={character.image === "" ? `https://placehold.co/150x200?text=${character.name}` : character.image } alt={character.name}/>
          <p><label>Name: </label>{character.name}</p>
          <p><label>Species: </label>{character.species}</p>
        </li>
    </>

  )
}

export default CharacterItem
