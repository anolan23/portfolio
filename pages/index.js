import Head from 'next/head';
import Link from 'next/link';

import styles from '../sass/pages/Home.module.scss';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home · Aaron Nolan</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className={styles['home__main']}>
        <h1>Hi, I'm Aaron 👋</h1>
        <div className={`${styles['home__main__text--goal']}`}>
          A web developer looking to join a team.
        </div>
        <Link href="/projects">
          <a className={'link'}>See some of my past projects</a>
        </Link>
        <div className={styles['home__main__text--tech']}>
          Here are the technologies I use:
        </div>
        <ol className={styles['home__main__skills']}>
          <li className={styles['home__main__skills__skill']}>Git/Github</li>
          <li className={styles['home__main__skills__skill']}>HTML</li>
          <li className={styles['home__main__skills__skill']}>CSS</li>
          <li className={styles['home__main__skills__skill']}>Javascript</li>
          <li className={styles['home__main__skills__skill']}>
            React & Nextjs
          </li>
          <li className={styles['home__main__skills__skill']}>Redux</li>
          <li className={styles['home__main__skills__skill']}>Node</li>
          <li className={styles['home__main__skills__skill']}>PostgreSQL</li>
          <li className={styles['home__main__skills__skill']}>MongoDB</li>
          <li className={styles['home__main__skills__skill']}>GraphQL</li>
          <li className={styles['home__main__skills__skill']}>Web3js</li>
          <li className={styles['home__main__skills__skill']}>Solidity</li>
        </ol>
        <hr className={styles['home__hr']} />
        <div className={styles['home__main__text--sides']}>
          A few side projects I am working on:
        </div>
        <div className={styles['home__main__projects']}>
          <div className={styles['home__main__projects__project']}>
            <a
              href="https://twitleague-next-js.vercel.app"
              className={`${styles['home__main__projects__project__title']} link`}
            >
              Twitleague
            </a>
            <p className={styles['home__main__projects__project__text']}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              ut odit accusamus eveniet sequi animi nesciunt, praesentium, amet
              quos fuga esse.
            </p>
          </div>
          <div className={styles['home__main__projects__project']}>
            <a
              className={`${styles['home__main__projects__project__title']} link`}
            >
              Yesla
            </a>
            <p className={styles['home__main__projects__project__text']}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              ut odit accusamus eveniet sequi animi nesciunt, praesentium, amet
              quos fuga esse.
            </p>
          </div>
        </div>
        <hr className={styles['home__hr']} />
      </main>
    </div>
  );
}
