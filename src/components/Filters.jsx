
function Filters( { searchName, setSearchName, hogwartsHouses, searchHouse , setSearchHouse } ) {

    const handleName = (ev) => {
        ev.preventDefault();
        setSearchName(ev.target.value);
    }

    const handleHouse = (ev) => {
        ev.preventDefault();
        setSearchHouse(ev.target.value);
    }

    const handleReset = (ev) => {
        ev.preventDefault();
        setSearchName('');
        setSearchHouse('');
    }

  return (
    <>
    <form className="filters__form" action="">
        <div>
            <label>Search by name: </label>
            <input 
                className="filters__input"
                type="text" 
                ame="search" 
                id="search" 
                placeholder="Your search here..."
                value={searchName}
                onChange={handleName}
            />
        </div>
        <div>
            <label>Search by house: </label>
            <select 
                className="filters__select"
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
        <button className="filters__btnReset" onClick={handleReset}>Reset</button>
    </form>
    </>
  )
}

export default Filters
