import React from 'react'

export default function ProjectCard({title, bullets, imgSrc, onOpen}){
  return (
    <article className="card" role="article" aria-label={title}>
      <div className="project-thumb" title="Click para ampliar imagen" onClick={onOpen} style={{cursor:'zoom-in'}}>
        <img src={imgSrc} alt={`Imagen del proyecto ${title}`} />
      </div>
      <div className="project-title">{title}</div>
      <ul className="project-body">
        {bullets.map((b, i) => <li key={i} style={{marginBottom:6, textAlign:'justify'}}>{b}</li>)}
      </ul>
    </article>
  )
}
