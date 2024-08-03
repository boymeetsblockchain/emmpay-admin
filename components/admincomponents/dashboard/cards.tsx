;
import { Card } from '../card';
import { CardSec } from '../cardsec';
import CardSecondary from './cardSecond';
export const Cards = () => {
    return (
      <div className="grid gap-4 grid-cols-4">
        <CardSecondary/>
    <CardSec
            color="#3E9850"
            src='download.png'
                   text="Total Balance"
            number="N212,720"
       />
       <CardSec
            color="#3E9850"
            src='down.jpeg'
                   text="Total Balance"
            number="N212,720"
       />
      </div>
    );
};
