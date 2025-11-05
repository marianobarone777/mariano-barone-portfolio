import React from 'react'
import Navbar from './components/Navbar'
import Header from './sections/Header'
import Resumen from './sections/Resumen'
import Experiencia from './sections/Experiencia'
import Formacion from './sections/Formacion'
import Habilidades from './sections/Habilidades'
import Proyectos from './sections/Proyectos'
import Automatizacion from './sections/Automatizacion'
import Contacto from './sections/Contacto'

export default function App(){
  return (
    <div>
      <Navbar />
      <Header />
      <main>
        <Resumen />
        <Experiencia />
        <Formacion />
        <Habilidades />
        <Proyectos />
        <Automatizacion />
        <Contacto />
        <section id="cv" className="section">
          <div className="container">
            <div className="card">
              <h2>Descargar CV</h2>
              <p>Descarga el Curriculum Vitae resumido en PDF y actualizado.</p>
              <a href="/Mariano_Barone_CV.pdf" download className="btn btn-primary">Descargar CV</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="section">
        <div className="container" style={{textAlign:'center', color:'#94a3b8'}}>
          <small>© {new Date().getFullYear()} Mariano Barone — Todos los derechos reservados.</small>
        </div>
      </footer>
    </div>
  )
}
