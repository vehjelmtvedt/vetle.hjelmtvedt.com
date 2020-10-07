import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styles from './header.module.css'
import React, { useState, useRef, useEffect} from 'react';



export default function Header() {

    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setIsScrolled(window.scrollY > 100);
        });
    }, []); 


    
    return (
        <>
            <Navbar collapseOnSelect expand="md" fixed="top" id={styles.navbar} className={isScrolled ? styles.isScrolledSection : styles.notScrolledSection} style={{transition: '0.3s ease'}}>
                <Link href="/"><Navbar.Brand href="/"><p className={isScrolled ? styles.isScrolledText : styles.notScrolledText} style={{transition: '0.3s ease'}}>Vetle Hjelmtvedt</p></Navbar.Brand></Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className={styles.navitems}>
                        <Link href="/"><Nav.Link href="/"><p className={isScrolled ? styles.isScrolledText : styles.notScrolledText} style={{transition: '0.3s ease'}}>Home</p></Nav.Link></Link>
                        <Link href="/projects"><Nav.Link href="/projects"><p className={isScrolled ? styles.isScrolledText : styles.notScrolledText}  style={{transition: '0.3s ease'}}>Projects</p></Nav.Link></Link>
                        <Link href="/about"><Nav.Link href="/about"><p className={isScrolled ? styles.isScrolledText : styles.notScrolledText}  style={{transition: '0.3s ease'}}>About</p></Nav.Link></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
    
}

