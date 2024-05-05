import React, { useState } from 'react'

const Form = ({add}) => {

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!title || !category) return
        add(title, category)
        setTitle("")
        setCategory("")
    }

  return (
    <div className="toDoForm">
        <h2>Criar um nova tarefa</h2>
        <input
         type="text" 
         placeholder='Digite sua tarefa' 
         onChange={(e) => setTitle(e.target.value) }  
         value={title}/>
        <select
        onChange={(e) => setCategory(e.target.value)}
        value={category}>
            <option value="">Selecione a categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
        </select>
        
        <button type="submit" onClick={handleSubmit}>Criar tarefa</button>
    </div>
  )
}

export default Form
