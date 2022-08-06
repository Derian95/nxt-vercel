import Link from 'next/link'
import MainLayout from '../components/layouts/MainLayout'
export default function Home() {
  return (
    <MainLayout>
       <Link href="/about">
        <span>about</span>
        </Link>
        <p >
          Get started by editing{' '}
          <code >pages/home.js</code>
        </p>
    </MainLayout>
  )
}
