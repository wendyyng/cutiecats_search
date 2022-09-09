import './card.styles.css'

const Card = ({cat}) =>  {
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