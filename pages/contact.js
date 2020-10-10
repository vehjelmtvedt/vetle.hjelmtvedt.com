import Header from '../components/global/Header'
import Footer from '../components/global/Footer'
import ContactForm from '../components/contact/ContactForm'
import Head from 'next/head'

function Contact() {
    return (
        <>
            <Head>
                <title>Vetle Hjelmtvedt - Contact</title>
            </Head>
            <Header threshold={0} />
            <ContactForm />
            <Footer/>
        </>
    )
}

export default Contact