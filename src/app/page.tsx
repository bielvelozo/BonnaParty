import Image from 'next/image'
import styles from './page.module.css'
import CreateEvent from '../components/CreateEvent'
import ContentEvent from '../components/ContentEvent'
import Register from '../components/register/Register'

export default function Home() {
  return (
    <>
      {/* <CreateEvent/> */}
      {/* <ContentEvent/> */}
      <Register></Register>
    </>
  )
}
