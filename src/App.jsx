import { useState } from 'react'
import './App.css'
import ToDo from './Components/ToDo'
import Form from './Components/Form'
import Search from './Components/Search'
import Filter from './Components/Filter'

function App() {
  
  const [toDo, setToDo] = useState([
    {
      id: 1, 
      title: "Criar blog em ReactJS",
      category: "Trabalho",
      isCompleted: false
    },
    {
      id: 2,
      title: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false
    },
    {
      id: 3,
      title: "Estudar Java SpringBoot",
      category: "Estudos",
      isCompleted: false
    }
  ])

  const addTask = (title, category) => {
    const newToDo = [...toDo, {
      id: Math.floor(Math.random()* 10000),
      title,
      category,
      isCompleted: false
    }]
    setToDo(newToDo)
  }

  const removeTask = (id) => {
    const newTodos = [...toDo]
    const filteredTodos = newTodos.filter((task => 
      task.id !== id ? task : null 
    ))
    setToDo(filteredTodos)
  }

  const completeTask = (id) => {
    const newTodos = [...toDo]
    newTodos.map((item) => item.id === id ? item.isCompleted = !item.isCompleted : item)
    setToDo(newTodos)
  }

  const [search, setSearch] = useState("")

  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState('Asc')
  return (
    <div className="app">
      <Search search = {search} setSearch = {setSearch}/>
      <Filter filter = {filter} setFilter = {setFilter} sort={sort} setSort={setSort}/>
      <h1>Tarefas</h1>
      {/* <p id="finishMsg">Nada para exibir por aqui 🤓 </p> */}
      <div className="toDoList">
        
        {toDo.filter((item) => 
          filter === "All" ?
          item : 
          filter === "Complete" ?
          item.isCompleted :
          !item.isCompleted
        
      ).filter((item) => item.title.toLowerCase().includes(search.toLowerCase())

        ).sort((a, b) => 
          sort === "Asc" ? 
          a.title.localeCompare(b.title) :
          b.title.localeCompare(a.title)

        ).map((task) => (
          <ToDo key = {task.id} item={task} remove={removeTask} complete = {completeTask}/>
        ))}
      </div>
      <Form add={addTask}/>
    </div>
  )
}

export default App
