import React from 'react'


export default function Header(){
  // Agrega el prefijo correcto según el base de Vite
  const base = import.meta.env.BASE_URL

  return (
    <header className="header container" id="top">
      {/* Imagen cargada desde /public usando BASE_URL */}
      <img
        src={`${base}MarianoBarone.jpg`}
        alt="Foto de perfil de Mariano Barone"
      />
      <div>
        <h1>Mariano Barone</h1>
        <h2>Ingeniero en Informática</h2>
        <h3>Financial Services – Software Delivery Manager</h3>
      </div>
    </header>
  )
}
