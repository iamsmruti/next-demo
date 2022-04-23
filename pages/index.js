import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home </title>
      </Head>
      <div className={styles.home}>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa fuga earum nihil? Repellat obcaecati laborum, rerum, sunt, enim magnam quisquam non dolorem ea dignissimos atque officia eaque in corrupti quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iure repellendus excepturi in, fugit sapiente incidunt est blanditiis neque fugiat quasi illum quis voluptatibus minus qui impedit voluptatem consequatur commodi.</p>
        <Link href='/scientists'>
          <a className={styles.btn}>See All Scientists</a>
        </Link>
      </div>
    </>
  )
}
