import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="logo">
                <Image src='/Scientist.png' width={128} height={64}/>
            </div>
            <div className='menu'>
                <Link href='/'><a>Home</a></Link>
                <Link href='/about'><a>About</a></Link>
                <Link href='/scientists'><a>All Scientists</a></Link>
            </div>
        </nav>
    );
}
 
export default Navbar;