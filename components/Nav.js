import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/groupcost'>Group Cost</Link>
        </li>
        <li>
          <Link href='/user'> User </Link>
        </li>
        <li>
          <Link href='/expense'> Expense </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
