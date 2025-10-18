import React from 'react'
export default function Data(){
  const exportJSON = ()=>{ const data = {}; ['bj_parciales','bj_calendar','bj_subjects'].forEach(k=> data[k]=localStorage.getItem(k)); const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='bj_backup.json'; a.click(); }
  const importJSON = (file)=>{ const r=new FileReader(); r.onload=e=>{ try{ const obj=JSON.parse(e.target.result); Object.entries(obj).forEach(([k,v])=> localStorage.setItem(k, v)); alert('Importado. Recarga la página.'); }catch(err){ alert('JSON inválido'); } }; r.readAsText(file); }
  return (
    <div>
      <h2 className="text-xl">Export / Import</h2>
      <div className="mt-3 flex gap-2 items-center">
        <button className="btn" onClick={exportJSON}>Exportar JSON</button>
        <label className="btn cursor-pointer">Importar JSON<input type="file" accept="application/json" style={{display:'none'}} onChange={e=>e.target.files && importJSON(e.target.files[0])} /></label>
      </div>
    </div>
  )
}