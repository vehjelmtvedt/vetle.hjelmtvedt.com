import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faGlasses, faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'

// Add Font Awesome icons to library
library.add(fab, faGlasses, faArrowDown, faArrowRight)


//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
