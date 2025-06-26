import CharacterItem from "./CharacterItem"

function CharacterList({ pcharacterList }) {

  return (
    <>
    <main>
        {/* character list */}
        <ul>
            {
                pcharacterList.map(character => (
                   <CharacterItem character={character} key={character.id}/>
                )

            )}
        </ul>
    </main >
    </>
  )
}

export default CharacterList


