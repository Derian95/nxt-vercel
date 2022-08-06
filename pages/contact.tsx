import Link from "next/link"
import MainLayout from "../components/layouts/MainLayout"

export default function contact() {
  return (
    <MainLayout>
       <Link href="/about">
        <span>Contact</span>
        </Link>
        <p >
          Get started by editing{' '}
          <code >pages/contact.js</code>
        </p>
    </MainLayout>
  )
}
