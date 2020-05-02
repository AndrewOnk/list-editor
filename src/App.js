import React from 'react';
import './App.css';
import List from "./components/List";

const defaultFoodList = [
  {name: 'Coffee'},
  {name: 'Tea'},
  {name: 'Milk'},
]

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>A Nested List Editor</h2>
        <List items={defaultFoodList}/>
      </div>
    );
  }
}

export default App;
