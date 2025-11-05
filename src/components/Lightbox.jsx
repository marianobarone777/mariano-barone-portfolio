import React from 'react'

export default function Lightbox({open, src, alt, onClose}){
  if(!open) return null
  return (
    <div className="lightbox-backdrop" role="dialog" aria-modal="true" onClick={onClose}>
      <img className="lightbox-img" src={src} alt={alt} />
    </div>
  )
}
