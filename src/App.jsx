import { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Filters from './components/Filters'


export default function App() {
const [todos, setTodos] = useState([])
const [filter, setFilter] = useState('all')
const [categoryFilter, setCategoryFilter] = useState('all')


// Charger depuis localStorage
useEffect(() => {
const saved = localStorage.getItem('todos')
if (saved) setTodos(JSON.parse(saved))
}, [])


// Sauvegarder
useEffect(() => {
localStorage.setItem('todos', JSON.stringify(todos))
}, [todos])


const addTodo = (text, category) => {
setTodos(prev => [
...prev,
{ id: Date.now(), text, category, completed: false }
])
}


const toggleTodo = (id) => {
setTodos(prev => prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)))
}


const deleteTodo = (id) => {
setTodos(prev => prev.filter(t => t.id !== id))
}


const editTodo = (id, updates) => {
setTodos(prev => prev.map(t => (t.id === id ? { ...t, ...updates } : t)))
}


return (
<div className="min-h-screen flex items-start justify-center p-6">
<div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-lg">
<h1 className="text-2xl font-bold mb-4">To-Do List Évoluée</h1>


<TodoForm addTodo={addTodo} />


<Filters
filter={filter}
setFilter={setFilter}
categoryFilter={categoryFilter}
setCategoryFilter={setCategoryFilter}
todos={todos}
/>


<TodoList
todos={todos}
filter={filter}
categoryFilter={categoryFilter}
toggleTodo={toggleTodo}
deleteTodo={deleteTodo}
editTodo={editTodo}
/>
</div>
</div>
)
}