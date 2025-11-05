import React from 'react'

const NavItem = ({href, children}) => (
  <a href={href} className="nav-item" style={{padding:'14px 10px', display:'inline-block'}}>
    {children}
  </a>
)

export default function Navbar(){
  return (
    <nav className="navbar">
      <div className="container" style={{display:'flex', gap:18, alignItems:'center', justifyContent:'space-between'}}>
        <a href="#top" style={{display:'flex',alignItems:'center',gap:10,fontWeight:800, color:'#e5e7eb', textDecoration:'none'}}>
          <span style={{border:'2px solid var(--blue-500)',borderRadius:8,padding:'4px 8px'}}>MB</span>
        </a>
        <div style={{display:'flex',gap:14,flexWrap:'wrap'}}>
          <NavItem href="#resumen">Resumen</NavItem>
          <NavItem href="#experiencia">Experiencia</NavItem>
          <NavItem href="#formacion">Formación</NavItem>
          <NavItem href="#habilidades">Habilidades</NavItem>
          <NavItem href="#proyectos">Proyectos</NavItem>
          <NavItem href="#automatizacion">Automatización IA</NavItem>
          <NavItem href="#contacto">Contacto</NavItem>
          <NavItem href="#cv">Descargar CV</NavItem>
        </div>
      </div>
    </nav>
  )
}
