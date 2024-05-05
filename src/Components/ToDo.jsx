const ToDo = ({item, remove, complete}) => {
  return (
    <div className="todo"  style={{backgroundColor: item.isCompleted ? "#9cff83" : "#FFF", textDecoration: item.isCompleted ? "line-through" : ''}}>
    <div className="content">
    <p className="category">{item.category}</p>
    <p className="title">{item.title}</p>
    </div> 
    <div className="buttonArea">
    <button className="complete" onClick={() => complete(item.id)}>Completar</button>
    <button className="remove" onClick={() => remove(item.id)}>X</button>
    </div>
  </div>
  )
}

export default ToDo
