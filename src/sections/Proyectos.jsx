import React, { useState } from 'react'
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import Lightbox from '../components/Lightbox'


export default function Proyectos(){
  const base = import.meta.env.BASE_URL
  const [open, setOpen] = useState(false)
  const [img, setImg] = useState('')
  const [alt, setAlt] = useState('')

  const projects = [
    { title:'Mantenimiento Evolutivo – Banca', 
      img: `${base}ProyectoSCRUM.png`,
      bullets:['Mantenimiento evolutivo de Sistemas Core Banking: Plataforma Comercial, Tarjetas de Crédito, Tarjetas de Debito, Delivery, PMO.','Implementación de metodología SCRUM.','Gestión de equipos Front End y Backend, hasta 30 personas.','Mejoras en la calidad, entrega de valor y cumplimiento de objetivos.'] },
    { title:'Integración Core Bancario con SAP Banking', 
      img: `${base}PoyectoSAP.png`, 
      bullets:['Focal Point entre equipos de SAP Banking y Core Bancario, gestionando prioridades, defectos y riesgos.','Definición de procesos para mejorar la comunicación del proyecto.','Mejoras en la calidad, entrega de valor y cumplimiento de objetivos.'] },
    { title:'Mantenimiento Evolutivo & Correctivo – Seguros', 
      img: `${base}ProyectoSF.png`,
      bullets:['Mantenimiento evolutivo y correctivo de Sistema AIS para la industria de Seguros.','Resultados sobresalientes en calidad, costos y plazos de entrega.','Certificación CMMI nivel 3.','Gestión de Software Factory de 25–30 integrantes, en tecnologías Cobol AS400, .NET y Doc1.'] }
  ]

  return (
    <Section id="proyectos" title="Proyectos Relevantes">
      <div className="grid projects">
        {projects.map((p,i)=>
          <ProjectCard key={i} title={p.title} imgSrc={p.img} bullets={p.bullets} onOpen={()=>{setImg(p.img);setAlt(p.title);setOpen(true)}} />
        )}
      </div>
      <Lightbox open={open} src={img} alt={alt} onClose={()=>setOpen(false)} />
    </Section>
  )
}
