import Head from 'next/head'
import styles from '../styles/About.module.css'

const About = () => {
    
    return (
        <>
            <Head>
            <title>Ninja List | About </title>
            </Head>
            <div className={styles.about}>
                <h1 className={styles.title}>About</h1>
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum numquam itaque quisquam sed beatae quam cum optio soluta aliquam placeat quasi voluptas ea aut eaque officia, voluptatum nihil asperiores? Perspiciatis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit consequatur assumenda maiores, placeat officia, commodi fugit delectus quasi modi officiis vel? Mollitia, ipsum saepe ut iure esse nesciunt totam sed.</p>
            </div>
        </>
    );
}
 
export default About;