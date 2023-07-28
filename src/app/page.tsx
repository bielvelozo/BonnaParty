import Image from 'next/image'
import styles from './page.module.css'
import CreateEvent from '../components/CreateEvent'
import ContentEvent from '../components/ContentEvent'

export default function Home() {
  return (
    <>
      <CreateEvent/>
      {/* <ContentEvent/> */}
    </>
  )
}
