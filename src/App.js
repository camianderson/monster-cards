import React, {useEffect, useState} from 'react';
import './App.css';

import CardList from './components/CardList/CardList';
import  SearchBox from './components/SearchBox/SearchBox';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredMosnters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users))
  },[])

  useEffect(()=> {
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    }); 
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])

  const handleEventChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  }

  return (
    <div className="App">
      <h1 className='app-title'>Monster Cards</h1>
      <SearchBox 
        onChangeHandler={handleEventChange} 
        placeholder='search monsters'
        className='monster-search-box'
      />
      <CardList monsters={filteredMosnters}/>
    </div>
  );
}

export default App;
