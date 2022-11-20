import React, {Component} from 'react';
import './App.css';

import CardList from './components/CardList/CardList';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => 
      this.setState(
        () => {
          return { monsters: users }
        }
      ));
  }

  handleEventChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {searchField};
    });
  }

  render(){

    const {monsters, searchField} = this.state;
    const {handleEventChange} = this;

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    }); 

    return (
      <div className="App">
        <input 
          className='search-box'
          type='search'
          placeholder='search monster'
          onChange={handleEventChange}
        />
       <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
