import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import styles from './projects.module.css'
import Button from 'react-bootstrap/Button'

export default function Projects() {
    return (
        <>
            <CardDeck className={styles.container}>
                <Card bg='dark' text="white" className={styles.card}>
                    <Card.Img variant="top" src="https://via.placeholder.com/150x50"/>
                    <Card.Body>
                        <Card.Title>Algorithms Visualizer</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    <Button className={styles.button} variant='primary'>Read more</Button>
                    <Button variant='primary'>Github</Button>
                    </Card.Body>
                </Card>
                <Card bg='dark' text="white" className={styles.card}>
                    <Card.Img variant="top" src="https://via.placeholder.com/150x50" />
                    <Card.Body>
                        <Card.Title>GoGreen</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card bg='dark' text="white" className={styles.card}>
                    <Card.Img variant="top" src="https://via.placeholder.com/150x50" />
                    <Card.Body>
                        <Card.Title>Ludo Game</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
    
            </CardDeck>
        </>
    )
}