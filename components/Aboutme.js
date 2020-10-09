import styles from './aboutme.module.css'
import Jumbotron from 'react-bootstrap/Jumbotron'

export default function Aboutme() {
    return (
        <>
            <Jumbotron fluid className={styles.jumbotron}>
                <h1 className={styles.heading}>A B O U T  &nbsp;  <span className={styles.secondName}>M E</span></h1>
            </Jumbotron>
        </>
    )
}