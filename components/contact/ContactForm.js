import Jumbotron from 'react-bootstrap/Jumbotron'
import styles from './contactform.module.css'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function ContactForm() {
    return (
        <>
            <Jumbotron fluid className={styles.jumbotron}>
                <Container className={styles.container}>
                    <Container className={styles.formcontainer}>
                        <p className={styles.heading}>M E S S A G E &nbsp; &nbsp; <span className={styles.secondName}>M E</span></p>
                        <Form className={styles.form}>
                            <Form.Group controlId="formGroupName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email"/>
                            </Form.Group>
                            <Form.Group controlId="formGroupSubject">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>
                            <Form.Group controlId="formGroupReason">
                                <Form.Label>Reason</Form.Label>
                                <Form.Control size="sm" as="select">
                                    <option>Just to say Hi</option>
                                    <option>Software</option>
                                    <option>Business</option>
                                    <option>Other</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formGroupMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                        <Button className={styles.button}>Send</Button>
                    </Container>
                </Container>
            </Jumbotron>
        </>
    )
}