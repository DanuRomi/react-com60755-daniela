import logo from './../../../assets/react.svg'
import styles from './navbar.module.css'
import CartWidget from '../../CartWidget/CartWidget'

const Navbar = () => {

    return (
        <>
            <header className={styles.header}>
                <img src={logo} alt="" className={styles.navbar__logo}/>
                <nav className={styles.background}>
                    <ul>
                        <li>Category 1</li>
                        <li>Category 2</li>
                        <li>Category 3</li>
                    </ul>
                </nav>
                <CartWidget/>
            </header>
        </>
    )

}

export default Navbar