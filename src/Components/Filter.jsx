import React from 'react'

const Filter = ({filter, setFilter, sort, setSort}) => {
  return (
    <div className="filter">
        <h2>Filtrar</h2>
        <div className="filterOptions">
            <div>
                <p>Status:</p>
                <select onChange={(e) => setFilter(e.target.value)} value={filter}>
                    <option value="All">Todas</option>
                    <option value="Complete">Completas</option>
                    <option value="Incomplete">Incompletas</option>
                </select>
            </div>
            <div>
            <p>Ordem alfabetica:</p>
            <button onClick={() => setSort("Asc")}>Asc</button>
            <button onClick={() => setSort("Desc")}>Desc</button>
            </div>
        </div>
    </div>
  )
}

export default Filter
