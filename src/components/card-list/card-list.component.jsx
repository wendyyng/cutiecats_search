import './card-list.styles.css'
import Card from '../card/card.component'
import { v4 as uuidv4 } from 'uuid';

const CardList= ({monsters}) => {
        return (
            <div className='card-list' key={uuidv4()} >
                {monsters.map((monster) => {
                    return(
                    <Card monster={monster} key={monster.id} />
                    )
                    })}
            </div>
        )
}

export default CardList;