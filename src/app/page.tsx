import Image from 'next/image'
import styles from './page.module.css'
import CreateEvent from '../components/CreateEvent'
import ContentEvent from '../components/ContentEvent'
import Register from '../components/register/Register'
import Header from '../components/header/menu'

export default function Home() {
  return (
    <>
      {/* <CreateEvent/> */}
      {/* <ContentEvent/> */}
      <Header></Header>
      <Register></Register>
    </>
  )
}
