import React from 'react'

const Search = ({search, setSearch}) => {
  return (
    <div className="search">
        <h2>Pesquisar</h2>
        <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Pesquisar tarefa' value={search}/>
    </div>
  )
}

export default Search