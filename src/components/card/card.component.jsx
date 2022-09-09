import './card.styles.css'

const Card = ({monster}) =>  {
    const { username, id, email} = monster
        return (
            <div className='card-container' key={id}>
                <img alt={`monster ${username}`} src={`https://robohash.org/${id}?set=set4&size=180x180`}/>
                 <h2>{username}</h2>
                 <p> {email}</p>
            </div>

        )
}

export default Card