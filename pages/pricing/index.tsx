import MainLayout from '../../components/layouts/MainLayout'
import Link from 'next/link'
export default function IndexPricing() {
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
