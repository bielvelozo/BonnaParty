import Image from 'next/image'

import styles from './page.module.css'
import CreateEvent from '../components/CreateEvent'
import ContentEvent from '../components/ContentEvent'
import Register from '../components/FormUser/Register'
import Login from '../components/FormUser/Login'
import Highlight from '../components/Highlights/Highlights'
import Header from '../components/header/Header'

export default function Home() {
  return (
    <>
      <Header></Header>
      <Highlight/>
    </>
  )
}
