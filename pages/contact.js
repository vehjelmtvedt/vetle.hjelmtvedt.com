import Header from '../components/global/Header'
import Footer from '../components/global/Footer'
import ContactForm from '../components/contact/ContactForm'

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