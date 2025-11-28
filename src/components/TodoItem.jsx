import { useState } from 'react'
import { Trash2 } from 'lucide-react'


export default function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
const [editing, setEditing] = useState(false)
const [text, setText] = useState(todo.text)
const [category, setCategory] = useState(todo.category)


const save = () => {
if (!text.trim()) return
editTodo(todo.id, { text: text.trim(), category })
setEditing(false)
}


return (
<div className="flex justify-between bg-gray-100 p-3 rounded mb-2 items-center">
<div className="flex items-center gap-3 flex-1">
<input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />


{editing ? (
<div className="flex gap-2 flex-1">
<input className="border p-1 rounded flex-1" value={text} onChange={(e) => setText(e.target.value)} />
<select className="border p-1 rounded" value={category} onChange={(e) => setCategory(e.target.value)}>
<option>Général</option>
<option>Travail</option>
<option>Maison</option>
<option>École</option>
</select>
<button onClick={save} className="px-2 py-1 bg-green-600 text-white rounded">OK</button>
<button onClick={() => { setEditing(false); setText(todo.text); setCategory(todo.category); }} className="px-2 py-1 bg-gray-300 rounded">Annuler</button>
</div>
) : (
<div className="flex flex-col sm:flex-row sm:items-center gap-1 w-full">
<span className={`${todo.completed ? 'line-through text-gray-400' : ''} truncate`}>{todo.text}</span>
<small className="text-sm text-blue-600 ml-2">({todo.category})</small>
</div>
)}
</div>


<div className="flex gap-2 ml-4">
{!editing && <button onClick={() => setEditing(true)} className="px-2 py-1 bg-yellow-300 rounded">Edit</button>}
<button onClick={() => deleteTodo(todo.id)} className="p-1 rounded hover:bg-red-100">
<Trash2 size={18} />
</button>
</div>
</div>
)
}