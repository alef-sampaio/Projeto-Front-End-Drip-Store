import logo from '../assets/logo.svg'
export default function Logo({ white = false }) {
  return <img src={logo} width="253" height="44" alt="Digital Store" className={white ? 'logo logo-white' : 'logo'} />
}
