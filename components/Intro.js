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
                    <Container className={styles.container}>
                        <Row>
                            <Col><h1>I am here</h1></Col>
                        </Row>
                        <Row>
                            <Col><h1>I am below</h1></Col>
                        </Row>
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

