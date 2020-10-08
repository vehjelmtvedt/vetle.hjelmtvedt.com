import Jumbotron from 'react-bootstrap/Jumbotron'
import styles from './projectview.module.css'
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
                                <p>A node.js project which implements the old board game Ludo. Contains both server- and client-side code
                                    Server and client communicates through websockets. Once you join you will be placed in 
                                    a random lobby to play with others
                                </p>
                                <Button className={styles.button}>Read more <FontAwesomeIcon icon="glasses" /></Button>
                                <Button className={styles.button}>See on github <FontAwesomeIcon icon={["fab", "github"]} /></Button>
                                <Button className={styles.button}>Live demo <FontAwesomeIcon icon={faLongArrowAltRight} /></Button>
                            </Card>
                        </CardDeck>
                    </div>
                    <div className={styles.cardcontainer}></div>
                    <div className={styles.cardcontainer}></div>
                    <div className={styles.cardcontainer}></div>
                    <div className={styles.cardcontainer}></div>
                    <div className={styles.cardcontainer}></div>
                    <div className={styles.cardcontainer}></div>
                </Container>
            </Jumbotron>
        </>
    )
}