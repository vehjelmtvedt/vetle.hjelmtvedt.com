import styles from './intro.module.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Aboutme from './Aboutme'
import React, { useRef } from 'react'



 


export default function Intro() {

    const scrollToRef = (ref) => window.scrollTo(0, (ref.current.offsetTop-60))   
    const myRef = useRef()
    const executeScroll = () => scrollToRef(myRef)

    
        return (
            <>
                <Jumbotron fluid className={styles.jumbotron}>
                    <Container className={styles.container} style={{display: 'flex', justifyContent: 'center'}}>
                        <div className={styles.textdiv}>
                          <h1 className={styles.heading}>VETLE <span className={styles.secondName}>HJELMTVEDT</span></h1>
                          <p className={styles.p}>Hi! I'm a computer science stuent at the University of Bergen and this is 
                          my personal website containing my projects and contact information.</p>
                          <Image src="/avatar.png" className={styles.image} roundedCircle />
                        </div>
                    </Container>
                    <div className={styles.div} onClick={executeScroll}>
                        <p id={styles.p}>Read more</p>
                        <FontAwesomeIcon icon={faArrowDown} size="2x" style={{color: 'white'}}/>
                    </div>
                </Jumbotron>
                <div ref={myRef}><Aboutme/></div>
            </>
        )
        
    
}

