import Link from "next/link"
import MainLayout from "../components/layouts/MainLayout"
import DarkLayout from "../components/layouts/DarkLayout"

export default function About() {
  return (
   <>
    <Link href="/about">
        <span>Contact</span>
        </Link>
        <p >
          Get started by editing{' '}
          <code >pages/about.js</code>
        </p>
    
   </>
  )
}

About.getLayout= function getLayout(page:JSX.Element){
  return(
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}