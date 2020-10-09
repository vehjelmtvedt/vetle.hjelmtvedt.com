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
      < Footer style={{position:'absolute',
left:0,
bottom:0,
right:0}}/>
    </>
  )
}

export default Home