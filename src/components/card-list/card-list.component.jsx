import './card-list.styles.css'
import Card from '../card/card.component'
import { v4 as uuidv4 } from 'uuid';

const CardList= ({cats}) => {
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