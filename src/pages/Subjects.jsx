import React, {useState} from 'react'
export default function Subjects(){
  const [subs, setSubs] = useState(()=> JSON.parse(localStorage.getItem('bj_subjects')||'{}'))
  const [name, setName] = useState('')
  const add = ()=>{ if(!name) return; const copy = {...subs}; copy[name]={profile:'', schedule:[], tasks:[]}; setSubs(copy); localStorage.setItem('bj_subjects', JSON.stringify(copy)); setName(''); }
  return (
    <div>
      <h2 className="text-xl">Materias</h2>
      <div className="mt-3 small italic">Crea perfiles por materia y añade tareas.</div>
      <div className="mt-3 flex gap-2"><input value={name} onChange={e=>setName(e.target.value)} className="p-2 rounded border flex-1" placeholder="Nombre materia" /><button className="btn" onClick={add}>Añadir</button></div>
      <div className="mt-4 space-y-3">{Object.keys(subs).length===0 && <div className="italic small">Sin materias</div>}{Object.entries(subs).map(([k,v])=>(
        <div key={k} className="p-3 vintage-panel"><div className="flex items-center gap-2"><strong>{k}</strong></div><div className="mt-2 small italic">Perfil:</div><textarea className="w-full p-2 rounded" rows="2" value={v.profile} onChange={e=>{ const c={...subs}; c[k].profile=e.target.value; setSubs(c); localStorage.setItem('bj_subjects', JSON.stringify(c)); }} /></div>
      ))}</div>
    </div>
  )
}