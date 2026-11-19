import { useState } from 'react'
export default function Gallery({ images, width, height, radius = '0px', showThumbs, className = '' }) {
  const [i, setI] = useState(0)
  return (
    <div className={`gallery ${className}`} style={{ '--w': `${parseInt(width) || 1440}px`, '--h': `${parseInt(height) || 400}px`, '--r': radius }}>
      <div className="g-view">
        <button className="g-arrow left" disabled={i === 0} onClick={() => setI(i - 1)} aria-label="Anterior">‹</button>
        <div className="g-track" style={{ transform: `translateX(-${i * 100}%)` }}>
          {images.map((im, k) => <img key={k} src={im.src} alt={`Imagem ${k + 1}`} />)}
        </div>
        <button className="g-arrow right" disabled={i === images.length - 1} onClick={() => setI(i + 1)} aria-label="Próxima">›</button>
        {!showThumbs && (
          <div className="g-dots">{images.map((_, k) => <i key={k} className={k === i ? 'on' : ''} onClick={() => setI(k)} />)}</div>
        )}
      </div>
      {showThumbs && (
        <div className="g-thumbs">
          {images.map((im, k) => <img key={k} src={im.src} alt="" className={k === i ? 'on' : ''} onClick={() => setI(k)} />)}
        </div>
      )}
    </div>
  )
}
