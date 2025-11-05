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
import cvPdf from './assets/Mariano_Barone_CV.pdf'   // ← importar el PDF

export default function App(){
  return (
    <div>
      <Navbar />
      <Header />

      <main role="main" aria-label="Contenido principal">
        <Resumen />
        <Experiencia />
        <Formacion />
        <Habilidades />
        <Proyectos />
        <Automatizacion />
        <Contacto />

        <section id="cv" className="section">
          <div className="container">
            <div className="card" role="region" aria-label="Descargar CV">
              <h2>Descargar CV</h2>
              <p>Descarga el CV en PDF con toda la información actualizada.</p>
              <a href={cvPdf} download className="btn btn-primary" title="Descargar archivo PDF del CV">
                Descargar CV
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

