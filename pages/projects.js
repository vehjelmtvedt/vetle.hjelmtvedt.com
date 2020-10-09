import Header from '../components/global/Header'
import Footer from '../components/global/Footer'
import ProjectView from '../components/projects/ProjectView'

function Projects() {
    return (
        <>
            <Header threshold={0}/>
            <ProjectView />
            <Footer/>
        </>
    )
}

export default Projects