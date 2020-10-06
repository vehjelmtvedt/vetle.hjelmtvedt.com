import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styles from './navbar.module.css'


export default function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" id={styles.navbar}>


                <Link href="/"><Navbar.Brand href="/">Vetle Hjelmtvedt</Navbar.Brand></Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className={styles.navitems}>
                        <Link href="/"><Nav.Link href="/">Home</Nav.Link></Link>
                        <Link href="/projects"><Nav.Link href="/projects">Projects</Nav.Link></Link>
                        <Link href="/about"><Nav.Link href="/about">About</Nav.Link></Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </>
    )
}