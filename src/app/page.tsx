'use client'
import Highlight from '../components/Highlights/Highlights'
import Header from '../components/Header/Header'
import Filter from '../components/Filter/Filter'
import  Main  from '../components/Main/Main'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Header/>
      <Highlight/>
      {/* <Filter/> */}
      <main >
        <Main/>
      </main>
      <Footer/>
    </>
  )
}
