import React from 'react'
import Section from '../components/Section'
import LinkManager from '../components/LinkManager'

export default function Automatizacion(){
  return (
    <Section id="automatizacion" title="Automatización con IA Generativa">
      <p style={{marginTop:0}}>
        Guardá y administrá <strong>links</strong>. Para agregar o eliminar necesitás iniciar sesión:
      </p>
      <LinkManager />
    </Section>
  )
}
