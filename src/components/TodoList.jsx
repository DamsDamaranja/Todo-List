import TodoItem from './TodoItem'


export default function TodoList({ todos, filter, categoryFilter, toggleTodo, deleteTodo, editTodo }) {
const filtered = todos.filter(t => {
if (filter === 'completed' && !t.completed) return false
if (filter === 'active' && t.completed) return false
if (categoryFilter !== 'all' && t.category !== categoryFilter) return false
return true
})


return (
<div className="mt-4">
{filtered.length === 0 && <p className="text-center text-gray-500">Aucune tâche...</p>}


{filtered.map(t => (
<TodoItem key={t.id} todo={t} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
))}
</div>
)
}