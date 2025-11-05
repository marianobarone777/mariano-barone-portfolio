import React, { useEffect, useState } from 'react'

const STORAGE_KEY = 'mb_links'
const USER = 'MAB'
const PASS = 'mago.CORIA.09'

function isValidUrl(value){
  try {
    const u = new URL(value)
    return !!u.protocol && !!u.host
  } catch { return false }
}

function countWords(text){
  return (text || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length
}

export default function LinkManager(){
  const [links, setLinks] = useState([])
  const [url, setUrl] = useState('')
  const [desc, setDesc] = useState('')
  const [msg, setMsg] = useState('')
  const [authed, setAuthed] = useState(false)

  useEffect(()=>{
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    setLinks(saved)
  }, [])

  function save(newList){
    setLinks(newList)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newList))
  }

  function loginPrompt(){
    const user = prompt('Usuario:')
    const pass = prompt('Contraseña:')
    if(user === USER && pass === PASS){
      setAuthed(true)
      setMsg('Sesión iniciada correctamente.')
      return true
    } else {
      setMsg('Credenciales inválidas.')
      return false
    }
  }

  function logout(){
    setAuthed(false)
    setMsg('Sesión cerrada.')
  }

  function addLink(e){
    e.preventDefault()
    if(!authed){
      const ok = loginPrompt()
      if(!ok) return
    }

    const val = url.trim()
    const d = desc.trim()
    const words = countWords(d)

    if(!isValidUrl(val)){
      setMsg('Ingresá un link válido (ej: https://ejemplo.com).')
      return
    }
    if(words > 40){
      setMsg(`La descripción supera 40 palabras (${words}/40).`)
      return
    }

    const item = { id: Date.now(), url: val, desc: d }
    const newList = [item, ...links]
    save(newList)
    setUrl('')
    setDesc('')
    setMsg('Link agregado.')
  }

  function removeLink(id){
    if(!authed){
      const ok = loginPrompt()
      if(!ok) return
    }
    const newList = links.filter(x => x.id !== id)
    save(newList)
    setMsg('Link eliminado.')
  }

  const descWords = countWords(desc)

  return (
    <div style={{display:'grid', gap:16}}>
      {/* Form para agregar link y descripción */}
      <div className="card" role="region" aria-label="Agregar link">
        <form onSubmit={addLink} style={{display:'grid', gap:12}}>
          <label>
            <span>Agregar link</span>
            <input
              className="input"
              type="url"
              placeholder="https://..."
              value={url}
              onChange={e=>setUrl(e.target.value)}
              required
            />
          </label>

          <label>
            <span>Descripción (máx. 40 palabras)</span>
            <textarea
              className="input"
              rows={3}
              value={desc}
              onChange={e=>setDesc(e.target.value)}
              placeholder="Breve contexto del link…"
            />
            <small style={{color: descWords>40 ? '#fca5a5' : '#94a3b8'}}>
              {descWords}/40 palabras
            </small>
          </label>

          <div style={{display:'flex', gap:10, alignItems:'center', flexWrap:'wrap'}}>
            <button className="btn btn-primary" type="submit">
              Guardar link
            </button>
            {authed && (
              <button type="button" className="btn btn-muted" onClick={logout} title="Cerrar sesión">
                Cerrar sesión
              </button>
            )}
            {msg && <small style={{color:'#cbd5e1'}} aria-live="polite">{msg}</small>}
          </div>
        </form>
      </div>

      {/* Listado de links */}
      <div className="card" role="region" aria-label="Listado de links">
        {links.length === 0 ? (
          <p style={{margin:0, color:'#cbd5e1'}}>Aún no agregaste links.</p>
        ) : (
          <ul style={{listStyle:'none', padding:0, margin:0, display:'grid', gap:10}}>
            {links.map(item=>(
              <li key={item.id} className="card" style={{display:'grid', gap:6}}>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:10}}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', color:'#93c5fd'}}
                    title={item.url}
                  >
                    {item.url}
                  </a>
                  <button
                    className="btn btn-muted"
                    onClick={()=>removeLink(item.id)}
                    title="Eliminar link"
                  >
                    Eliminar
                  </button>
                </div>
                {item.desc && (
                  <div style={{color:'#d0d7e2', fontSize:14, whiteSpace:'pre-wrap'}}>
                    {item.desc}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
