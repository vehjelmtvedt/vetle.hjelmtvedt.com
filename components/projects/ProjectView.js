import styles from './projectview.module.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

export default function ProjectView() {
    return (
        <>
            <Jumbotron fluid className={styles.jumbotron}>
                <div className={styles.projectContainer} id={styles.firstContainer}>
                    <h1 className={styles.heading}>Ludo - an online game</h1>
                    <p className={styles.description}>A node.js project which implements the old board game Ludo. Contains both server- and client-side code
                                    Server and client communicates through websockets. Once you join you will be placed in 
                                    a random lobby to play with others.</p>
                    <img className={styles.image} src="/splashscreen.png"></img>
                    <ButtonToolbar className="justify-content-around" id={styles.buttongroup}>
                        <Button className={styles.button}><a className={styles.link} href="https://github.com/vehjelmtvedt/online-ludo.git">See on github &nbsp;  <FontAwesomeIcon icon={["fab", "github"]} /></a></Button>
                        <Button className={styles.button}>Live demo &nbsp; <FontAwesomeIcon icon={faLongArrowAltRight} /></Button>
                    </ButtonToolbar>
                </div>
                <div className={styles.projectContainer}>
                    <h1 className={styles.heading}>Algorithms Visualized</h1>
                    <p className={styles.description}>A p5.js project aiming to visualize the most commonly-used sorting algorithms. 
                                 I have currently implemented Bubble and Selection sort. This is a work in progress and I am planning to publish this soon to a website.
                                  </p>
                    <img className={styles.image} src="/algo.gif"></img>
                    <ButtonToolbar className="justify-content-around" id={styles.buttongroup}>
                        <Button className={styles.button}><a className={styles.link} href="https://github.com/vehjelmtvedt/Visualize-Algorithms.git">See on github &nbsp;  <FontAwesomeIcon icon={["fab", "github"]} /></a></Button>
                        <Button className={styles.button}>Live demo &nbsp; <FontAwesomeIcon icon={faLongArrowAltRight} /></Button>
                    </ButtonToolbar>
                </div>
                <div className={styles.projectContainer}>
                    <h1 className={styles.heading}>GoGreen</h1>
                    <p className={styles.description}>A GUI application + server written in Java. Made as a group assignment in the first year 
                                of university. It functions as a social media in which you can log activities that saves CO2 emissions and
                                compare your emission savings with friends.</p>
                    <img className={styles.image} src="/gogreen.png"></img>
                    <ButtonToolbar className="justify-content-around" id={styles.buttongroup}>
                        <Button className={styles.button}><a className={styles.link} href="https://github.com/vehjelmtvedt/GoGreen.git">See on github &nbsp;  <FontAwesomeIcon icon={["fab", "github"]} /></a></Button>
                        <Button className={styles.button}>Live demo &nbsp; <FontAwesomeIcon icon={faLongArrowAltRight} /></Button>
                    </ButtonToolbar>
                </div>
                
            </Jumbotron>
        </>
    )
}