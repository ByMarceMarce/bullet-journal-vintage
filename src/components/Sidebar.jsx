import React from 'react'

export default function Sidebar({onNavigate, night, setNight}){
  const items = [
    ['Inicio','start'], ['Calendario Académico','calendar'], ['Parciales / Rúbricas','parciales'],
    ['Materias','subjects'], ['Plantillas','templates'], ['Export / Import','data']
  ]
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <img src="/public/icon-192.png" alt="logo" width="56" height="56" style={{borderRadius:12}} />
        <div>
          <h1 className="text-xl">Bullet Journal</h1>
          <div className="text-sm small italic">Vintage · Marce</div>
        </div>
      </div>
      <nav className="space-y-2">
        {items.map(i=> <button key={i[1]} className="w-full text-left p-2 rounded-md hover:bg-amber-100" onClick={()=>onNavigate(i[1])}>{i[0]}</button>)}
      </nav>
      <div className="mt-4 border-t pt-3">
        <div className="flex gap-2">
          <button className="btn" onClick={()=>setNight(!night)}>{night ? 'Modo claro' : 'Modo nocturno'}</button>
        </div>
      </div>
    </div>
  )
}