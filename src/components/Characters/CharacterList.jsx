import CharacterItem from "./CharacterItem"

function CharacterList({ characterList }) {

  return (
    <>
    <main>
        {/* character list */}
        <ul className="characterList">
            {
                characterList.map(character => (
                   <CharacterItem character={character} key={character.id}/>
                )

            )}
        </ul>
    </main >
    </>
  )
}

export default CharacterList


