import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styles from './header.module.css'
import React, { useState, useRef, useEffect} from 'react';



export default function Header() {

    const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 50
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, [])

    
    return (
        <>
            <Navbar collapseOnSelect expand="md" fixed="top" id={styles.navbar} style={{ transition: '0.3s ease', backgroundColor: navBackground ? 'white' : 'transparent',
                                                                                                                  height: navBackground ? '70px' : '100px'}}>


                <Link href="/"><Navbar.Brand href="/"><p style={{color: navBackground ? 'black' : 'white'}} id={styles.brandText}>Vetle Hjelmtvedt</p></Navbar.Brand></Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className={styles.navitems}>
                        <Link href="/"><Nav.Link href="/"><p style={{color: navBackground ? 'black' : 'white'}} className={styles.navHeading}>Home</p></Nav.Link></Link>
                        <Link href="/projects"><Nav.Link href="/projects"><p style={{color: navBackground ? 'black' : 'white'}} className={styles.navHeading}>Projects</p></Nav.Link></Link>
                        <Link href="/about"><Nav.Link href="/about"><p style={{color: navBackground ? 'black' : 'white'}} className={styles.navHeading}>About</p></Nav.Link></Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </>
    )
    
}

