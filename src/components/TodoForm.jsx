import { useState } from 'react'

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState('')
  const [category, setCategory] = useState('Général')

  const submit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    addTodo(text.trim(), category)
    setText('')
  }

  return (
    <form onSubmit={submit} className="flex gap-2 mb-4">
      <input
        className="border p-2 flex-1 rounded"
        placeholder="Nouvelle tâche..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <select
        className="border p-2 rounded"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Général</option>
        <option>Travail</option>
        <option>Maison</option>
        <option>École</option>
      </select>

      {/* FIX ICI 👇 */}
      <button type="submit" className="bg-blue-600 text-white px-4 rounded">
        Ajouter
      </button>
    </form>
  )
}
