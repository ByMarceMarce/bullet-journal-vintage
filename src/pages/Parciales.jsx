import React, {useState} from 'react'
export default function Parciales(){
  const [list, setList] = useState(()=> JSON.parse(localStorage.getItem('bj_parciales')||'[]'))
  const [materia, setMateria] = useState(''); const [fecha, setFecha] = useState(''); const [porc, setPorc] = useState(''); const [nota, setNota] = useState('')
  const add = ()=>{
    if(!materia||!fecha) return alert('Materia y fecha son requeridos')
    const item = {id: Date.now(), materia, fecha, porcentaje: porc||0, nota: nota||null, rubric:{preparacion:0,puntualidad:0,presentacion:0,dominio:0}}
    const copy = [item, ...list]; setList(copy); localStorage.setItem('bj_parciales', JSON.stringify(copy)); setMateria(''); setFecha(''); setPorc(''); setNota('');
  }
  const updateRubric = (id, key, val)=>{ const copy = list.map(l=> l.id===id ? {...l, rubric:{...l.rubric, [key]: Number(val)}}: l); setList(copy); localStorage.setItem('bj_parciales', JSON.stringify(copy)); }
  const remove = id=>{ const copy = list.filter(i=>i.id!==id); setList(copy); localStorage.setItem('bj_parciales', JSON.stringify(copy)); }
  return (
    <div id="parciales-section">
      <div className="flex justify-between items-center">
        <h2 className="text-xl">Seguimiento de parciales y rúbricas</h2>
        <div><button className="btn" onClick={()=>window.print()}>Exportar a PDF (imprimir)</button></div>
      </div>
      <div className="mt-3 small italic">Añade parciales/entregas y evalúa con la rúbrica.</div>
      <div className="mt-4 p-3 vintage-panel">
        <div className="flex gap-2 items-center">
          <input value={materia} onChange={e=>setMateria(e.target.value)} placeholder="Materia" className="p-2 rounded border flex-1" />
          <input type="date" value={fecha} onChange={e=>setFecha(e.target.value)} className="p-2 rounded border w-40" />
        </div>
        <div className="mt-3 flex gap-2">
          <input value={porc} onChange={e=>setPorc(e.target.value)} placeholder="% del curso" className="p-2 rounded border w-36" />
          <input value={nota} onChange={e=>setNota(e.target.value)} placeholder="Nota" className="p-2 rounded border w-36" />
          <button className="btn" onClick={add}>Añadir</button>
        </div>
      </div>
      <div className="mt-4 space-y-3">
        {list.length===0 && <div className="italic small">No hay parciales registrados.</div>}
        {list.map(p=>(
          <div key={p.id} className="p-3 vintage-panel">
            <div className="flex items-center gap-2">
              <strong>{p.materia}</strong>
              <div className="ml-auto small">{p.fecha} • {p.porcentaje}%</div>
            </div>
            <div className="mt-2 small">Nota: {p.nota || '—'}</div>
            <div className="mt-3 small italic">Rúbrica (0-5)</div>
            <div className="mt-2 grid grid-cols-4 gap-2">
              {['preparacion','puntualidad','presentacion','dominio'].map(k=>(
                <div key={k}>
                  <div className="text-sm capitalize">{k}</div>
                  <select value={p.rubric[k]} onChange={(e)=>updateRubric(p.id,k,e.target.value)} className="p-2 rounded border w-full">
                    <option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option>
                  </select>
                </div>
              ))}
            </div>
            <div className="mt-3 flex gap-2"><button className="btn" onClick={()=>remove(p.id)}>Eliminar</button></div>
          </div>
        ))}
      </div>
    </div>
  )
}