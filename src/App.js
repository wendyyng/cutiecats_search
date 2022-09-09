import { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
import video from "./videos/Colorful-18899.mp4"

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
      return monster.username.toLocaleLowerCase().includes(searchField);
    });

    return (
      <>
      <video className='video' autoPlay loop muted>
          <source src={video} type='video/mp4' />
      </video>
      <div className="App">
        <div className="container mt-4">
          <h1 className="app-title text-bold">CutieCats Search🐈</h1>
        <SearchBox 
        onChangeHandler={onSearchChange} 
        placeholder="Search CutieCats" 
        className="search-box"
        />
        </div>
        <CardList 
        monsters={filteredMonsters}
        />
      </div>
      </>
    )
  }
}

export default App;
