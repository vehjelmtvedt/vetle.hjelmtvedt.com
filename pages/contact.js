import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

function Contact() {
    return (
        <>
            <Header threshold={0} />
            <ContactForm />
            <Footer/>
        </>
    )
}

export default Contact