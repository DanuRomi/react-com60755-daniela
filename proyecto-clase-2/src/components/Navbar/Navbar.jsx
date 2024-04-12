import logo from './../../assets/react.svg'
import styles from './navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {

    return (
        <>
            <nav className={styles.background}>
                <img src={logo} className='navbar-logo'/>
                <ul>
                    <li>
                        Category 1
                    </li>
                </ul>
            </nav>
            <CartWidget></CartWidget>
        </>
    )

}

export default Navbar