import MyAccount from './MyAccount'
import SavedEvents from './SavedEvents'
import { Center, DivCards, UlCards, liCards } from '../../../styles/profileCards.styled'

export default function ProfileCards() {
    return(
    <DivCards>
        <Center>
            <MyAccount/>
            <UlCards>
                <SavedEvents/>
            </UlCards>    
        </Center>
    </DivCards>
    )
}