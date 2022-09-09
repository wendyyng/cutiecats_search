import { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
    console.log(constructor)
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => 
    response.json())
  .then(users => this.setState(() => {
    return {monsters: users}
  },
  () => {
    console.log(this.state)
  }))
} 

onSearchChange = (event) => {
  console.log(event.target.value)
  const searchField = event.target.value.toLocaleLowerCase();
  

  this.setState(() => {
    return {searchField};
  })
}

  render(){

    const {monsters, searchField } = this.state;
    const {onSearchChange} =this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <>
      <div className="App">
        <SearchBox 
        onChangeHandler={onSearchChange} 
        placeholder="Search Monsters" 
        className="search-box"
        />
        <CardList 
        monsters={filteredMonsters}
        />
      </div>
      </>
    )
  }
}

export default App;
