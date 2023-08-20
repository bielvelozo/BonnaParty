import MyAccount from './MyAccount'
import Cards from './Cards'
import { Center, DivCards } from '../../../styles/profileCards.styled'
import {useContext} from 'react'
export default function ProfileCards() {

    const contents = useContext(contentContext)
    console.log(contents)
    return(
    <DivCards>
        <Center>
            <MyAccount/>
            <Cards/>
        </Center>
    </DivCards>
    )
}