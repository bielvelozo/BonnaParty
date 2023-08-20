import MyAccount from './MyAccount'
import Cards from './Cards'
import { Center, DivCards } from '../../../styles/profileCards.styled'
export default function ProfileCards() {

    return(
    <DivCards>
        <Center>
            <MyAccount/>
            <Cards/>
        </Center>
    </DivCards>
    )
}