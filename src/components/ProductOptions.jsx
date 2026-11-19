import { useState } from 'react'
export default function ProductOptions({ options, radius = '4px', shape = 'square', type = 'text' }) {
  const [sel, setSel] = useState(type === 'text' ? 2 : 1)
  return (
    <div className="options">
      {options.map((o, k) => (
        <button key={o} onClick={() => setSel(k)} aria-label={o}
          className={`opt ${shape} ${type} ${k === sel ? 'on' : ''}`}
          style={{ borderRadius: shape === 'square' ? radius : '50%', ...(type === 'color' ? { background: o } : {}) }}>
          {type === 'text' ? o : ''}
        </button>
      ))}
    </div>
  )
}
