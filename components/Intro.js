import styles from './intro.module.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Header from '../components/Header'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Projects from './Projects'
import React, { useRef } from 'react'



 


export default function Intro() {

    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
    const myRef = useRef(Projects)
    const executeScroll = () => scrollToRef(myRef)

    
        return (
            <>
                <Jumbotron fluid className={styles.jumbotron}>
                    <Container className={styles.container} style={{display: 'flex', justifyContent: 'center'}}>
                        <div className={styles.textdiv}>
                          <h1 className={styles.heading}>V E T L E &nbsp;  <span className={styles.secondName}>H J E L M T V E D T</span></h1>
                          <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus dui eget ante hendrerit efficitur. Quisque libero nulla, porttitor ac luctus ac, tempus ut augue. Donec mollis ut odio eget consequat. Vestibulum ante ipsum primis in faucibus orci luctus et</p>
                        </div>
                    </Container>
                    <div className={styles.div} onClick={executeScroll}>
                        <p id={styles.p}>Read more</p>
                        <FontAwesomeIcon icon={faArrowDown} size="2x" style={{color: 'white'}}/>
                    </div>
                </Jumbotron>
                <div ref={myRef}><Projects/></div>
            </>
        )
        
    
}

