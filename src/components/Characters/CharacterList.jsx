import CharacterItem from "./CharacterItem"

function CharacterList({ characterList }) {

  return (
    <>
    <main>
      {characterList.length === 0 ? (
          <h3 className="characterList__notFound">No character found with this name... <br/>Please try again.</h3>
        ) : (
        <ul className="characterList">
            {
                characterList.map(character => (
                   <CharacterItem character={character} key={character.id}/>
                )

            )}
        </ul>)
      }
    </main >
    </>
  )
}

export default CharacterList


