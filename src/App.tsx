import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import Footer from './components/footer/footer.component'
import {useState, useEffect, ChangeEvent } from 'react'
import './App.css';
import video from "./videos/Colorful-18899.mp4"

import { getData } from './utils/data.utils'

export type Cat = {
  id: string;
  username: string;
  email: string;
}

const App = () => {

  const [searchField, setSearchField] = useState('')
  const [cats, setCats] = useState<Cat[]>([]);
  const [filteredCats, setFilteredCats] = useState(cats)

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => 
    //   response.json())
    // .then(users => setCats(users))
    const fetchUsers = async () => {
      //A promise with a result value of a Cat array
      const users = await getData<Cat[]>('https://jsonplaceholder.typicode.com/users')
      //type never: opposite of any 
      //force me to give a type
      setCats(users);
    }
    fetchUsers();
  }, [])

  useEffect(() => {
    const newFilteredCats = cats.filter((cat) => {
      return cat.username.toLocaleLowerCase().includes(searchField);
    });
    setFilteredCats(newFilteredCats);
  }, [cats, searchField])

  //void , because no explicit returns inside the function itself
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
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
