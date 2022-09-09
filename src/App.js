import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [
        {
         name: 'Linda',
         id: uuidv4()
        },
         {
         name: 'Frank',
         id: uuidv4()
        },
         {
         name: 'Jacky',
         id: uuidv4()
        }
      ]
    }
  }
  render(){
    return (
      <>
      <div>
          {
            this.state.monsters.map((monster) => {
              return <h1 key={monster.id}>{monster.name}</h1>
            })
          }
      </div>
      </>
    )
  }
}

export default App;
