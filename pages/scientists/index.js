import styles from '../../styles/Scientists.module.css'
import Link from 'next/link'

export const getStaticProps = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
        props: {
            scientists : data
        }
    }
}

const Scientists = ({ scientists }) => {
    return (
        <div>
            <h1 className={styles.title}>All Scientists</h1>
            {scientists.map((scientist => (
                <Link href={'scientists/' + scientist.id} key={scientist.id}>
                    <a className={styles.name}>
                        <h3>{scientist.name}</h3>
                    </a>
                </Link>
            )))}
        </div>
    );
}
 
export default Scientists;