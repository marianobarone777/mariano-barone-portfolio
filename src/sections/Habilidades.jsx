import React from 'react'
import Section from '../components/Section'

export default function Habilidades(){
  return (
    <Section id="habilidades" title="Habilidades">
      <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit, minmax(220px,1fr))'}}>
        <div className="card">
          <strong>Gestión y Liderazgo</strong>
          <ul>
            <li>Mejora continua.</li>
            <li>Comunicació efectiva.</li>
            <li>Equipos multidisciplinarios.</li>
            <li>Experto en metodologías.</li>
            <li>Agile SCRUM, PMP, CMMI.</li>
            <li>Planificación estratégica.</li>
            <li>Gestión de riesgos.</li>
            <li>Aseguramiento de calidad.</li>
            <li>Evaluación de desempeño.</li>
            <li>Capacitación de equipo.</li>
          </ul>
        </div>
        <div className="card">
          <strong>Análisis y Datos</strong>
          <ul>
            <li>R, RStudio.</li>
            <li>SQL.</li>
            <li>BigQuery.</li>
            <li>Tableau.</li>
            <li>Excel.</li>
            <li>Herramientas de IA.</li>
          </ul>
        </div>
        <div className="card">
          <strong>Tecnologías</strong>
          <ul>
            <li>AS400, Mainframe, Natural.</li>
            <li>Cobol, JCL, DB2, SQL.</li>
            <li>Visual Studio Code.</li>
            <li>ChatGPT, Prompts, Copilot.</li>
            <li>JIRA, Trello, MS Project.</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}
