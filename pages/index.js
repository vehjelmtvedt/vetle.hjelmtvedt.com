import Link from 'next/link'
import Intro from '../components/Intro'
import Projects from '../components/ProjectCards'
import Footer from '../components/Footer'
import Header from '../components/Header'


function Home() {
  return (
    <>
      < Header threshold={200}/>
      < Intro />
      <Footer/>
    </>
  )
}

export default Home