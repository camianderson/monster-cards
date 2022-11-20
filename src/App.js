import React, {Component} from 'react';
import ReactDOM  from 'react-dom';
import './App.css';

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
       {filteredMonsters.map(monster => {
        return (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        )
       })}
      </div>
    );
  }
}

export default App;
