
import Highlight from '../components/Highlights/Highlights'
import Header from '../components/Header/Header'
import Filter from '../components/Filter/Filter'
import  Main  from '../components/Main/Main'

export default function Home() {
  return (
    <>
      <Header/>
      <Highlight/>
      <Filter/>
      <main style={{background:`#fafafa`}}>
        <Main/>
      </main>
    </>
  )
}
