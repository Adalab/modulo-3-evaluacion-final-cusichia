
function Filters( { psearchName, psetSearchName, phogwartsHouses, psearchHouse , psetSearchHouse } ) {

    const handleName = (ev) => {
        ev.preventDefault();
        psetSearchName(ev.target.value);
    }

    const handleHouse = (ev) => {
        ev.preventDefault();
        psetSearchHouse(ev.target.value);
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
                value={psearchName}
                onChange={handleName}
            />
        </div>
        <div>
            <label>Search by house: </label>
            <select 
                name="house" 
                id="house"
                value={psearchHouse}
                onChange={handleHouse}
            >
                <option value="">  Select a house  </option>
                {phogwartsHouses.map((house, index) => (
                    <option key={index} value={house}>{house}</option>
                ))}
            </select>
        </div>
    </form>
    </>
  )
}

export default Filters
