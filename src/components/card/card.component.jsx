import { Component } from 'react'

import './card.styles.css'

class Card extends Component {
    render(){
        const { username, id, email } = this.props;
        return (
            <div className='card-container'>
                <img alt={`monster ${username}`} src={`https://robohash.org/${id}?set=set4&size=180x180`}/>
                 <h2>{username}</h2>
                 <p>{email}</p>
            </div>

        )
    }
}

export default Card