import Header from '../components/global/Header'
import Footer from '../components/global/Footer'
import ProjectView from '../components/projects/ProjectView'
import Head from 'next/head'

function Projects() {
    return (
        <>
            <Head>
                <title>Vetle Hjelmtvedt - Projects</title>
            </Head>
            <Header threshold={0}/>
            <ProjectView />
            <Footer/>
        </>
    )
}

export default Projects