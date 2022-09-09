import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import Footer from './components/footer/footer.component'
import {useState, useEffect } from 'react'
import './App.css';
import video from "./videos/Colorful-18899.mp4"

const App = () => {

  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => 
      response.json())
    .then(users => setMonsters(users))
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.username.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])


  const onSearchChange = (event) => {
    console.log(event.target.value)
    
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  }

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
      <Footer />
    </div>
    </>
  )
}

export default App;
