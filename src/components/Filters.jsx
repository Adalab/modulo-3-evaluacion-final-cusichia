
function Filters( { searchName, setSearchName, hogwartsHouses, searchHouse , setSearchHouse } ) {

    const handleName = (ev) => {
        ev.preventDefault();
        setSearchName(ev.target.value);
    }

    const handleHouse = (ev) => {
        ev.preventDefault();
        setSearchHouse(ev.target.value);
    }

  return (
    <>
    <form action="">
        <div>
            <label>Search by name: </label>
            <input 
                type="text" 
                ame="search" 
                id="search" 
                placeholder="Your favorite or least favotire character... "
                value={searchName}
                onChange={handleName}
            />
        </div>
        <div>
            <label>Search by house: </label>
            <select 
                name="house" 
                id="house"
                value={searchHouse}
                onChange={handleHouse}
            >
                <option value="">  Select a house  </option>
                {hogwartsHouses.map((house, index) => (
                    <option key={index} value={house}>{house}</option>
                ))}
            </select>
        </div>
    </form>
    </>
  )
}

export default Filters
