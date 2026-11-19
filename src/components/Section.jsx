import { Link } from 'react-router-dom'
export default function Section({ title, titleAlign = 'left', link, children }) {
  return (
    <section className="section">
      <div className={`section-head ${titleAlign}`}>
        <h2>{title}</h2>
        {link && <Link to={link.href} className="section-link">{link.text} →</Link>}
      </div>
      {children}
    </section>
  )
}
