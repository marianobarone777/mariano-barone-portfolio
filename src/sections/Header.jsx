import React from 'react'
import profile from '../assets/MarianoBarone.jpg'

export default function Header(){
  return (
    <header className="header container" id="top">
      <img src={profile} alt="Foto de perfil de Mariano Barone" />
      <div>
        <h1>Mariano Barone</h1>
        <h2>Ingeniero en Informática</h2>
        <h3>Financial Services – Software Delivery Manager</h3>
      </div>
    </header>
  )
}
