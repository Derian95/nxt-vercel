import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../Navbar'
import styles from './MainLayout.module.css'

interface Props {
    children: React.ReactNode;
}
export default function MainLayout({ children }:Props) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name='description' content='Initital demo' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Navbar />

            <main className={styles.main}>{children}</main>
        </div>
    )
}
