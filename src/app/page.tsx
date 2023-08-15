import Image from 'next/image'

import styles from './page.module.css'
import CreateEvent from '../components/CreateEvent'
import ContentEvent from '../components/ContentEvent'
import Register from '../components/FormUser/Register'
import Login from '../components/FormUser/Login'
import Highlight from '../components/Highlights/Highlights'
import Header from '../components/header/Header'
import Filter from '../components/Filter/Filter'
import  Main  from '../components/Main/Main'

export default function Home() {
  return (
    <>
      <Highlight/>
      <Header/>
      <Filter/>
      <Main/>
    </>
  )
}
