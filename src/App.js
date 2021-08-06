// Libraries
import React, { Component } from 'react';

// styles
import './App.css';

// components
import {CardList} from "./components/card-list/card-list.component";
import {Search} from "./components/search/search.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: ""
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => this.setState({monsters: data}))
    .catch(error => console.log(error));
  }

  render() {
    const {monsters, search} = this.state;
    const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(search.toLocaleLowerCase()));
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search placeholder="Search Monsters" filter={(event) => this.setState({search: event.target.value})} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
