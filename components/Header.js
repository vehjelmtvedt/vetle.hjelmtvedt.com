import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styles from './header.module.css'
import React, { useState, useEffect} from 'react';



export default function Header(props) {

    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        if (props.threshold === 0) {
            setIsScrolled(true)
        } else {
            window.addEventListener("scroll", () => {
                setIsScrolled(window.scrollY > props.threshold);
            });
        }
        
    }, []);
    
    return (
        <>
            <Navbar collapseOnSelect expand="md" fixed="top" id={styles.navbar} className={isScrolled ? styles.isScrolledSection : styles.notScrolledSection} style={{transition: '0.3s ease'}}>
                <Link href="/"><Navbar.Brand href="/"><p id={styles.navbrand} className={isScrolled ? styles.isScrolledBrand : styles.notScrolledBrand} style={{transition: '0.3s ease'}}>V E T L E &nbsp; &nbsp; <span className={styles.secondName}>H J E L M T V E D T</span></p></Navbar.Brand></Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className={styles.navitems}>
                        <Link href="/"><Nav.Link href="/"><p id={styles.testing} className={isScrolled ? styles.isScrolledText : styles.notScrolledText} style={{transition: '0.3s ease'}}>H O M E</p></Nav.Link></Link>
                        <Link href="/projects"><Nav.Link href="/projects"><p className={isScrolled ? styles.isScrolledText : styles.notScrolledText}  style={{transition: '0.3s ease'}}>P R O J E C T S</p></Nav.Link></Link>
                        <Link href="/contact"><Nav.Link href="/contact"><p className={isScrolled ? styles.isScrolledText : styles.notScrolledText}  style={{transition: '0.3s ease'}}>C O N T A C T</p></Nav.Link></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
    
}

