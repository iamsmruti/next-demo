import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter()
    useEffect(()=>{
        setTimeout(() => {
            router.push('/')
        }, 4000)
    }, [])

    return (
        <div className="not-found">
            <h1>Ooops...</h1>
            <h2>Requested Page not found.</h2>
            <p>Go back to <Link href='/'><a>Homepage</a></Link></p>
        </div>
    );
}
 
export default NotFound;