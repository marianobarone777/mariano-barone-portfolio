import React, { useState } from 'react'
import Section from '../components/Section'
import Modal from '../components/Modal'

export default function Contacto(){
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({nombre:'', email:'', mensaje:''})

  function onSubmit(e){
    e.preventDefault()
    const subject = encodeURIComponent('Contacto desde Portfolio')
    const body = encodeURIComponent(`Nombre: ${form.nombre}\nEmail: ${form.email}\n\n${form.mensaje}`)
    window.location.href = `mailto:marianobarone@gmail.com?subject=${subject}&body=${body}`
    setOpen(true)
    setForm({nombre:'', email:'', mensaje:''})
  }

  return (
    <Section id="contacto" title="Información de Contacto">
      <form onSubmit={onSubmit} className="grid" style={{gap:12}}>
        <input className="input" placeholder="Tu nombre" value={form.nombre} onChange={e=>setForm({...form, nombre:e.target.value})}/>
        <input className="input" type="email" placeholder="Tu email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})}/>
        <textarea className="input" rows="5" placeholder="Mensaje..." value={form.mensaje} onChange={e=>setForm({...form, mensaje:e.target.value})}/>
        <button className="btn btn-primary">Enviar</button>
      </form>
      <Modal open={open} title="¡Mensaje enviado!" onClose={()=>setOpen(false)}>
        <p>Se abrirá tu cliente de correo para enviar el mensaje a <strong>marianobarone@gmail.com</strong>.</p>
      </Modal>
    </Section>
  )
}
