import Link from 'next/link'

function Navbar() {
    return (
        <>
            <ul>
                <Link href="/"><a><li>Home</li></a></Link>
                <Link href="/projects"><a><li>Projects</li></a></Link>
                <Link href="/about"><a><li>About</li></a></Link>
                <a href="/">Home</a>
            </ul>
        </>
    )
}

export default Navbar