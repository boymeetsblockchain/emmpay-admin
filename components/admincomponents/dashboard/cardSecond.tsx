import { Card } from "../card";
import { Banknote,HandCoins,UsersRound,User} from 'lucide-react'

const CardSecondary = () => {
    return ( 
        <>
                <Card
            icon={<Banknote color="black" />}
            color="#3E9850"
            background="#FFF5D9"
            text="Total Balance"
            number="N212,720"
        />
         <Card
            icon={<HandCoins color="black" />}
            color="#3E9850"
            background="#E7EDFF"
            text="income"
            number="N5,600"
        />
         <Card
            icon={<UsersRound color="black" />}
            color="#3E9850"
            background="#FFF5D9"
            text="Total User"
            number="13,640"
        />
         <Card
            icon={<HandCoins color="black" />}
            color="#3E9850"
            background="#E7EDFF"
            text="Active Users"
            number="7,920"
        />
            
        </>
     );
}
 
export default CardSecondary;