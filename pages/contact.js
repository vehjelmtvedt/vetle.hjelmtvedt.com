import Header from '../components/global/Header'
import Footer from '../components/global/Footer'
import ContactForm from '../components/contact/ContactForm'
import Head from 'next/head'

function Contact({ emailID, serviceID, templateID }) {
    return (
        <>
            <Head>
                <title>Vetle Hjelmtvedt - Contact</title>
            </Head>
            <Header threshold={0} />
            <ContactForm emailKey={emailID} serviceKey={serviceID} templateKey={templateID}/>
            <Footer/>
        </>
    )
}

export async function getStaticProps() {
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    const emailID = process.env.USER_ID;
    const serviceID = process.env.SERVICE_ID;
    const templateID = process.env.TEMPLATE_ID;
    return {
      props: { emailID, serviceID, templateID },
    }
}

export default Contact