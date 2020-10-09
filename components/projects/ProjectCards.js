import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import styles from './projectcards.module.css'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'


export default function Projects() {
    return (
        <>
            <Jumbotron fluid className={styles.container}>
                <h1 className={styles.heading}>M Y  &nbsp;  <span className={styles.secondName}>P R O J E C T S</span></h1>
                <CardDeck className={styles.carddeck}>
                    <Card text="white" className={styles.card}>
                        <Card.Img variant="top" src="https://via.placeholder.com/150x50"/>
                        <Card.Body>
                            <Card.Title>Algorithms Visualizer</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            <ButtonToolbar className="justify-content-between">
                                <Button className={styles.button} variant='primary'>Read more <FontAwesomeIcon icon="glasses" /></Button>
                                <Button className={styles.button} variant='primary'>Github <FontAwesomeIcon icon={["fab", "github"]} /></Button>
                            </ButtonToolbar>
                        </Card.Body>
                    </Card>
                    <Card text="white" className={styles.card}>
                        <Card.Img variant="top" src="https://via.placeholder.com/150x50" />
                        <Card.Body>
                            <Card.Title>GoGreen</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            <ButtonToolbar className="justify-content-between">
                                <Button className={styles.button} variant='primary'>Read more <FontAwesomeIcon icon="glasses" /></Button>
                                <Button className={styles.button} variant='primary'>Github <FontAwesomeIcon icon={["fab", "github"]} /></Button>
                            </ButtonToolbar>
                        </Card.Body>
                    </Card>
                    <Card text="white" className={styles.card}>
                        <Card.Img variant="top" src="https://via.placeholder.com/150x50" />
                        <Card.Body>
                            <Card.Title>Ludo Game</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            <ButtonToolbar className="justify-content-between">
                                <Button className={styles.button} variant='primary'>Read more <FontAwesomeIcon icon="glasses" /></Button>
                                <Button className={styles.button} variant='primary'>Github <FontAwesomeIcon icon={["fab", "github"]} /></Button>
                            </ButtonToolbar>
                        </Card.Body>
                    </Card>
                </CardDeck>
                <Link href='/projects'><Button className={styles.nextbutton}>See all projects &nbsp;  <FontAwesomeIcon icon={faArrowRight} /></Button></Link>
            </Jumbotron>
        </>
    )
}