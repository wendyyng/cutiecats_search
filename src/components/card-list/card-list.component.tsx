import './card-list.styles.css'
import Card from '../card/card.component'
import { v4 as uuidv4 } from 'uuid';
import { Cat } from '../../App';

type CardListProps = {
    cats: Cat[];
}

const CardList= ({cats}: CardListProps) => {
        return (
            <div className='card-list' key={uuidv4()} >
                {cats.map((cat) => {
                    return(
                    <Card cat={cat} key={cat.id} />
                    )
                    })}
            </div>
        )
}

export default CardList;