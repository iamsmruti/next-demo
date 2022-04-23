import styles from '../../styles/Details.module.css'

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map((scientist) => {
        return {
            params: { id: scientist.id.toString() }
        }
    })

    return {
        paths,
        fallback : false
    }
}

export const getStaticProps = async (context) =>{
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json()

    return {
        props : {scientist : data}
    }
}

const Details = ({scientist}) => {
    return (
        <div>
            <h1 className={styles.name}>{scientist.name}</h1>
            <p>{scientist.email}</p>
            <p>{scientist.website}</p>
            <p>{scientist.address.city}</p>
        </div>
    );
}
 
export default Details;