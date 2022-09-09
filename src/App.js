import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import Footer from './components/footer/footer.component'
import {useState, useEffect } from 'react'
import './App.css';
import video from "./videos/Colorful-18899.mp4"

const App = () => {

  const [searchField, setSearchField] = useState('')
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState(cats)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => 
      response.json())
    .then(users => setCats(users))
  }, [])

  useEffect(() => {
    const newFilteredCats = cats.filter((cat) => {
      return cat.username.toLocaleLowerCase().includes(searchField);
    });
    setFilteredCats(newFilteredCats);
  }, [cats, searchField])


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
      cats={filteredCats}
      />
      <Footer />
    </div>
    </>
  )
}

export default App;
