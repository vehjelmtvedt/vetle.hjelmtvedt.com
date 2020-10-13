import Jumbotron from 'react-bootstrap/Jumbotron'
import styles from './contactform.module.css'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

export default function ContactForm() {

    const nameRef = useRef();
    const emailRef = useRef();
    const subjectRef = useRef()
    const reasonRef = useRef();
    const messageRef = useRef();

    function handleClick(e) {
        console.log("i was clicked");
        emailjs.send("service_r0p6ua6","template_req80pj",{
            form_email: emailRef.current.value,
            name: nameRef.current.value,
            message: messageRef.current.value,
            subject: subjectRef.current.value,
        });
    }
    



    return (
        <>
            <Jumbotron fluid className={styles.jumbotron}>
                <Container className={styles.container}>
                    <Container className={styles.formcontainer}>
                        <p className={styles.heading}>M E S S A G E &nbsp; &nbsp; <span className={styles.secondName}>M E</span></p>
                        <Form className={styles.form}>
                            <Form.Group controlId="formGroupName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" ref={nameRef} name="name"/>
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" ref={emailRef} placeholder="name@example.com" name="form_email"/>
                            </Form.Group>
                            <Form.Group controlId="formGroupSubject">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control type="text" ref={subjectRef} name="subject"/>
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
                                <Form.Control as="textarea" rows={3} ref={messageRef} name="message"/>
                            </Form.Group>
                        </Form>
                        <Button as="input" type="submit" value="Submit" onClick={handleClick}/>
                    </Container>
                </Container>
            </Jumbotron>
        </>
    )
}