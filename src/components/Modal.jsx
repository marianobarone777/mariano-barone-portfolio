import React from 'react'

export default function Modal({open, title, children, onClose}){
  if(!open) return null
  return (
    <div className="lightbox-backdrop" role="dialog" aria-modal="true">
      <div className="card" style={{maxWidth:520, width:'92vw'}}>
        <h3 style={{marginTop:0}}>{title}</h3>
        <div style={{margin:'12px 0'}}>{children}</div>
        <div style={{display:'flex', justifyContent:'flex-end', gap:10}}>
          <button className="btn btn-muted" onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  )
}
