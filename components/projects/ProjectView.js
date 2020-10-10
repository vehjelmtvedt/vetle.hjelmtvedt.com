import Jumbotron from 'react-bootstrap/Jumbotron'
import styles from './projectview.module.css'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import { CardDeck, Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'



export default function ProjectView() {
    return (
        <>
            <Jumbotron fluid className={styles.jumbotron}>
                <Container className={styles.container}>
                    <div id={styles.firstcard} className={styles.cardcontainer}>
                        <h2>Ludo - an online game</h2>
                        <CardDeck className={styles.card}>
                            <Card className={styles.cardsection1}>
                            </Card>
                            <Card className={styles.cardsection2}>
                                <p className={styles.p}>A node.js project which implements the old board game Ludo. Contains both server- and client-side code
                                    Server and client communicates through websockets. Once you join you will be placed in 
                                    a random lobby to play with others
                                </p>
                                <Button className={styles.button}><Link className={styles.link} href="/projects/Ludo">Read more</Link> &nbsp; <FontAwesomeIcon icon="glasses" /></Button>
                                <Button className={styles.button}><a className={styles.link} href="https://github.com/vehjelmtvedt/online-ludo.git">See on github </a> <FontAwesomeIcon icon={["fab", "github"]} /></Button>
                                <Button className={styles.button}>Live demo <FontAwesomeIcon icon={faLongArrowAltRight} /></Button>
                            </Card>
                        </CardDeck>
                    </div>
                    <div className={styles.cardcontainer}>
                    <h2>Algorithms Visualized</h2>
                        <CardDeck className={styles.card}>
                            <Card className={styles.cardsection3}>
                            </Card>
                            <Card className={styles.cardsection2}>
                                <p className={styles.p}>A p5.js project aiming to visualize the most commonly-used sorting algorithms. 
                                 I have currently implemented Bubble and Selection sort. This is a work in progress and I am planning to publish this soon to a website.
                                  </p>
                                <Button className={styles.button}><Link className={styles.link} href="/projects/Visualgo">Read more </Link> &nbsp; <FontAwesomeIcon icon="glasses" /></Button>
                                <Button className={styles.button}><a className={styles.link} href="https://github.com/vehjelmtvedt/visualgo.git">See on github </a> <FontAwesomeIcon icon={["fab", "github"]} /></Button>
                                <Button className={styles.button}>Live demo <FontAwesomeIcon icon={faLongArrowAltRight} /></Button>
                            </Card>
                        </CardDeck>
                    </div>
                    <div className={styles.cardcontainer}>
                    <h2>GoGreen</h2>
                        <CardDeck className={styles.card}>
                            <Card className={styles.cardsection4}>
                            </Card>
                            <Card className={styles.cardsection2}>
                                <p className={styles.p}>A GUI application + server written in Java. Made as a group assignment in the first year 
                                of university. It functions as a social media in which you can log activities that saves CO2 emissions and
                                compare your emission savings with friends.</p>
                                <Button className={styles.button}><Link className={styles.link} href="/projects/GoGreen">Read more </Link> &nbsp; <FontAwesomeIcon icon="glasses" /></Button>
                                <Button className={styles.button}><a className={styles.link} href="https://github.com/vehjelmtvedt/GoGreen.git">See on github </a><FontAwesomeIcon icon={["fab", "github"]} /></Button>
                                <Button className={styles.button}>Live demo <FontAwesomeIcon icon={faLongArrowAltRight} /></Button>
                            </Card>
                        </CardDeck>
                    </div>
                    
                </Container>
            </Jumbotron>
        </>
    )
}