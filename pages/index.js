import Intro from '../components/index/Intro'
import Footer from '../components/global/Footer'
import Header from '../components/global/Header'
import Head from 'next/head'


function Home() {
  return (
    <>
      <Head>
        <title>Vetle Hjelmtvedt - Home</title>
      </Head>
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