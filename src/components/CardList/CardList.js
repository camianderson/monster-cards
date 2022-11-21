import React, {Component} from "react";
import './CardList.css';

class CardList extends Component {
  render(){
    const {monsters} = this.props;
    
    return (
      <div className="card-list">
        {monsters.map(monster => {
          const{name, email, id } = monster;
          return (
            <div className="card-container" key={id}>
              <img all={`monster ${name}`} src={`https://robohash.org/1${id}?set=set2&size=180x180`}/>
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default CardList;
