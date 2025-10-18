import React, { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import Start from './pages/Start'
import Calendar from './pages/Calendar'
import Parciales from './pages/Parciales'
import Subjects from './pages/Subjects'
import Templates from './pages/Templates'
import Data from './pages/Data'

export default function App(){
  const [section, setSection] = useState('start')
  const [night, setNight] = useState(()=> localStorage.getItem('bj_night') === '1')
  useEffect(()=>{ localStorage.setItem('bj_night', night ? '1' : '0') }, [night])

  useEffect(()=>{
    if('serviceWorker' in navigator){
      navigator.serviceWorker.register('/service-worker.js').catch(()=>{})
    }
  },[])

  return (
    <div className={night ? 'night' : ''}>
      <div className="min-h-screen p-6 font-serif">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">
          <aside className="col-span-3 p-4 vintage-panel sidebar-anim sidebar-open">
            <Sidebar onNavigate={setSection} night={night} setNight={setNight} />
          </aside>
          <main className="col-span-9 p-6 vintage-panel">
            {section==='start' && <Start />}
            {section==='calendar' && <Calendar />}
            {section==='parciales' && <Parciales />}
            {section==='subjects' && <Subjects />}
            {section==='templates' && <Templates />}
            {section==='data' && <Data />}
          </main>
        </div>
      </div>
    </div>
  )
}