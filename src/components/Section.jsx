import React from 'react'
export default function Section({id, title, children}){
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <div className="card">
          <h2 id={`${id}-title`}>{title}</h2>
          <div className="content" style={{display:'grid', gap:12}}>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
