import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styles from './header.module.css'


export default function Header() {
    return (
        <>
            <Navbar collapseOnSelect scrolling="true" expand="md" fixed="top" id={styles.navbar}>


                <Link href="/"><Navbar.Brand href="/"><p id={styles.brandText}>Vetle Hjelmtvedt</p></Navbar.Brand></Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className={styles.navitems}>
                        <Link href="/"><Nav.Link href="/"><p className={styles.navHeading}>Home</p></Nav.Link></Link>
                        <Link href="/projects"><Nav.Link href="/projects"><p className={styles.navHeading}>Projects</p></Nav.Link></Link>
                        <Link href="/about"><Nav.Link href="/about"><p className={styles.navHeading}>About</p></Nav.Link></Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </>
    )
}