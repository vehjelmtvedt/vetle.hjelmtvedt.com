import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styles from './navbar.module.css'


export default function Header() {
    return (
        <>
            <Navbar sticky="top" className="justify-content-between" id={styles.navbar}>

                <Link href="/"><Navbar.Brand href="/">Vetle Hjelmtvedt</Navbar.Brand></Link>

                <Nav className="mr-sm-2">
                    <Link href="/"><Nav.Link href="/">Home</Nav.Link></Link>
                    <Link href="/projects"><Nav.Link href="/projects">Projects</Nav.Link></Link>
                    <Link href="/about"><Nav.Link href="/about">About</Nav.Link></Link>
                </Nav>

            </Navbar>
        </>
    )
}