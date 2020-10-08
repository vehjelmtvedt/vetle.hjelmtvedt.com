import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectCards from '../components/ProjectCards'

function Projects() {
    return (
        <>
            <Header threshold={0}/>
            <ProjectCards />
            <Footer/>
        </>
    )
}

export default Projects