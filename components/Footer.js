import Jumbotron from 'react-bootstrap/Jumbotron'
import styles from './footer.module.css'
import Container from 'react-bootstrap/Container'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'


export default function Footer() {

    return (
        <>
            <Jumbotron fluid className={styles.jumbotron} sticky='bottom'>
                <Container className={styles.container}>
                    <p className={styles.p}>S T A Y &nbsp; &nbsp; <span className={styles.secondName}>C O N N E C T E D</span></p>
                    <FontAwesomeIcon className={styles.icons} icon={faEnvelope} size="2x"/>
                    <FontAwesomeIcon icon={["fab", "github"]} className={styles.icons} size="2x"/>
                </Container>
                <Link href="/"><FontAwesomeIcon className={styles.scrollicon} icon={faArrowCircleUp} size="4x"/></Link>
            </Jumbotron>
        </>
    )
}