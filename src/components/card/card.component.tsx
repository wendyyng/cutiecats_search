import './card.styles.css'
import { Cat } from '../../App'

type CardProps = {
    cat: Cat;
}

const Card = ({cat}: CardProps) =>  {
    const { username, id, email} = cat
        return (
            <div className='card-container' key={id}>
                <img alt={`cat ${username}`} src={`https://robohash.org/${id}?set=set4&size=180x180`}/>
                 <h2>{username}</h2>
                 <p> {email}</p>
            </div>

        )
}

export default Card