import React, {useState} from 'react'
export default function Calendar(){
  const [events, setEvents] = useState(()=> JSON.parse(localStorage.getItem('bj_calendar')||'{}'))
  const [date, setDate] = useState('')
  const [title, setTitle] = useState('')
  const add = ()=>{
    if(!date||!title) return alert('Fecha y título requeridos')
    const copy = {...events}
    copy[date] = copy[date]||[]
    copy[date].push({title, type:'Examen'})
    setEvents(copy); localStorage.setItem('bj_calendar', JSON.stringify(copy)); setTitle('')
  }
  return (
    <div id="calendar-section">
      <div className="flex justify-between items-center">
        <h2 className="text-xl">Calendario Académico (editable)</h2>
        <div><button className="btn" onClick={()=>window.print()}>Imprimir sección</button></div>
      </div>
      <div className="mt-3 small italic">Vacío por defecto. Añade eventos por fecha.</div>
      <div className="mt-4 p-3 vintage-panel">
        <div className="flex gap-2 items-center">
          <input type="date" value={date} onChange={e=>setDate(e.target.value)} className="p-2 rounded border" />
          <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Título evento" className="p-2 rounded border flex-1" />
          <button className="btn" onClick={add}>Añadir</button>
        </div>
      </div>
      <div className="mt-4">
        <h4 className="font-serif">Eventos guardados</h4>
        <ul className="mt-2 small">{Object.keys(events).length===0 && <li className="italic">Sin eventos</li>}{Object.entries(events).map(([d,arr])=>arr.map((it,i)=><li key={d+i}>[{d}] {it.title}</li>))}</ul>
      </div>
    </div>
  )
}