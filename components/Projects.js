import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import styles from './projects.module.css'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Projects() {
    return (
        <>
            <h1 className={styles.heading}>My Projects</h1>
            <CardDeck className={styles.container}>
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
        </>
    )
}