import React from 'react'
export default function Start(){
  const today = new Date().toLocaleDateString()
  return (
    <div id="start-screen">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl">Bullet Journal Vintage de Marce</h2>
          <div className="small italic mt-1">«Organiza con calma, cuida los pequeños detalles»</div>
          <div className="mt-3 small">Hoy: {today}</div>
        </div>
        <div>
          <button className="btn" onClick={()=>{ const el = document.getElementById('start-screen'); import('html2canvas').then(hc=>hc.default(el).then(canvas=>{ const img=canvas.toDataURL('image/png'); const a=document.createElement('a'); a.href=img; a.download='start.png'; a.click(); }))}}>Exportar esta pantalla a imagen</button>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="p-4 vintage-panel">
          <h3 className="font-serif">Resumen rápido</h3>
          <p className="small italic mt-2">Accede a Calendario Académico y Parciales para planificar tu semestre.</p>
        </div>
        <div className="p-4 vintage-panel">
          <h3 className="font-serif">Sugerencia</h3>
          <p className="small italic mt-2">Aplica plantillas si deseas ejemplos pre-llenados. Luego edita a tu gusto.</p>
        </div>
      </div>
    </div>
  )
}