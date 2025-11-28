export default function Filters({ filter, setFilter, categoryFilter, setCategoryFilter, todos }) {
const categories = [...new Set(todos.map(t => t.category))]


return (
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
<div className="flex gap-2">
<button onClick={() => setFilter('all')} className={`px-3 py-1 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Tous</button>
<button onClick={() => setFilter('completed')} className={`px-3 py-1 rounded ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Terminés</button>
<button onClick={() => setFilter('active')} className={`px-3 py-1 rounded ${filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Non terminés</button>
</div>


<div className="flex gap-2 items-center">
<label className="text-sm">Catégorie :</label>
<select className="border p-2 rounded" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
<option value="all">Toutes catégories</option>
{categories.map(c => <option key={c}>{c}</option>)}
</select>
</div>
</div>
)
}