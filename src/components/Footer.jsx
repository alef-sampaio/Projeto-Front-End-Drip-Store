import Logo from './Logo'
import FooterInfo from './FooterInfo'

const info = [
  { text: 'Sobre Drip Store', link: '/about' }, { text: 'Segurança', link: '/security' },
  { text: 'Wishlist', link: '/wishlist' }, { text: 'Blog', link: '/blog' },
  { text: 'Trabalhe conosco', link: '/jobs' }, { text: 'Meus Pedidos', link: '/orders' },
]
const cats = ['Camisetas', 'Calças', 'Bonés', 'Headphones', 'Tênis'].map((t) => ({ text: t, link: '/products' }))

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo white />
          <p>Moda esportiva e streetwear com os melhores preços. Tênis, camisetas e acessórios das marcas que você gosta, com entrega para todo o Brasil.</p>
          <div className="social">
            <a href="https://facebook.com" aria-label="Facebook">f</a>
            <a href="https://instagram.com" aria-label="Instagram">ig</a>
            <a href="https://twitter.com" aria-label="Twitter">tw</a>
          </div>
        </div>
        <FooterInfo title="Informação" informations={info} />
        <FooterInfo title="Categorias" informations={cats} />
        <div className="footer-info">
          <h4>Contato</h4>
          <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
          <p>(85) 3051-3411</p>
        </div>
      </div>
      <div className="container"><hr /><p className="copy">© {new Date().getFullYear()} Digital Store</p></div>
    </footer>
  )
}
