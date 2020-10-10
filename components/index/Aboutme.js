import styles from './aboutme.module.css'
import Jumbotron from 'react-bootstrap/Jumbotron'

export default function Aboutme() {
    return (
        <>
            <Jumbotron fluid className={styles.jumbotron}>
                <h1 className={styles.heading}>A B O U T  &nbsp;  <span className={styles.secondName}>M E</span></h1>
                <p className={styles.subheading}>I’m a computer science student at the University of Bergen, which means I am fortunate enough to study that which is also my hobby.  
                </p>
                <div className={styles.textcontainer}>
                    
                    <div className={styles.text}>
                        <h3>Web development</h3>
                        <p>I mostly work with full stack web development using the node.js framework, although I prefer working with the backend components. This website is built using the next.js framework for React. Next.js pre-renders pages at build-time (SSG), which means lightning fast loading time, try it out yourself!
                        </p>
                    </div>
                    <div className={styles.text}>
                        <h3>Java and Python</h3>
                        <p>I’ve also completed various projects in Java such as the GUI application GoGreen. Similar to web development, I prefer working the backend of these applications. In addition, I am quite proficient in Python.
                        </p>
                    </div>
                </div>
                <div className={styles.textcontainer2}>
                    <div className={styles.text}>
                        <h3>IOT</h3>
                        <p>Along with my love of web development is IOT. By far, my coolest project must be my homebuilt Magic Mirror (pictures can be found on the projects page). It utilises a node.js application, which is highly modularised and as such allows a huge community to contribute to this project. You can check out my own module on the projects page.
                        </p>
                    </div>
                    <div className={styles.text}>
                        <h3>Future ventures and projects</h3>
                        <ul>
                            <li>Docker and kubernetes</li>
                            <li>Deploy each project in docker and run it on my own server</li>
                            <li>More projects in next.js and react</li>
                            <li>Complete the algorithms visualizer project</li>
                        </ul>
                    </div>
                </div>
            </Jumbotron>
        </>
    )
}