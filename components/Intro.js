import styles from './intro.module.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Header from '../components/Header'

export default function Intro() {
    return (
        <>
            <Jumbotron fluid className={styles.jumbotron}>
                <Container className={styles.container}>
                    <div>
                        
                    </div>
                </Container>
            </Jumbotron>
        </>
    )
}