import { useState } from "react"

function Todo ({todo, index, completeTodo, removeTodo}) {
  return <div className="todo-item" style={{textDecoration:todo.isCompleted ? 'line-through' : ''}}>
    {todo.text}
    <div>
      <button onClick={() => completeTodo(index)}>wan cheng</button>
      <button onClick={() => removeTodo(index)}>X</button>
    </div>
  </div>
}

function TodoForm ({handleFilter, addTodo}) {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return
    addTodo(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="data">
      <label for='add' onSubmit={handleSubmit}>Todo: </label>
      <input name='add' type="text" placeholder="add todo" value={value} onChange={e => setValue(e.target.value)}></input>
      <button type="submit">Submit</button>
      <button onClick={handleFilter}>Filter</button>
    </form>
  )

  }
  
export default function APP () {
  const [todos, setTodos] = useState([
    {text:'sleep', isCompleted: true},
    {text:'eat', isCompleted: false},
    {text:'code', isCompleted: false}
  ])

  const [filter, setFilter] = useState(false)
    
  const addTodo = text => {
    const newTodos = [...todos, {text}]
    setTodos(newTodos)
  }

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const handleFilter = e => {
    e.preventDefault()
    let filterTodos = todos.filter(todo => todo.isCompleted === filter)
    setTodos(filterTodos)
    setFilter(!filter)
  }

  return (
    <div className="App">
      <h1>todos</h1>
      <div className="todo-list">
        {
          todos.map((todo, index) => {
            return <Todo key={index} todo={todo} index={index} completeTodo={completeTodo} removeTodo={removeTodo}></Todo>
          })
        }
        <TodoForm handleFilter={handleFilter} addTodo={addTodo}></TodoForm>
      </div>
    </div>
  )
}