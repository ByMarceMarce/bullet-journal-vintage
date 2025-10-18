import React from 'react'
export default function Templates(){ 
  const applyPesebre = ()=>{ const pes = {pesebreChecklist:[{item:'Niño Jesús',done:false},{item:'María',done:false},{item:'José',done:false}]}; localStorage.setItem('bj_christmas', JSON.stringify(pes)); alert('Plantilla aplicada'); }
  return (
    <div>
      <h2 className="text-xl">Plantillas</h2>
      <div className="mt-3 small italic">Aplica plantillas pre-llenadas.</div>
      <div className="mt-4"><button className="btn" onClick={applyPesebre}>Aplicar plantilla Pesebre</button></div>
    </div>
  )
}