import React, { Component } from 'react';
import './App.css'
import CardList from '../CardList/CardList.js'
import CardData from '../Card/CardData';
import UserForm from '../UserForm/UserForm';

class App extends Component {
  state = {
    cards: [
      new CardData('Paul O’Shannessy', 'Facebook', 'https://avatars1.githubusercontent.com/u/8445?v=4', 1),
    ]
  }

  addNewCard = (fullCardData) => {
    const newCard = new CardData(fullCardData.name, fullCardData.company, fullCardData.avatar_url, fullCardData.id)
    this.setState((prevState) => ({
      cards: prevState.cards.concat(newCard)
    }))
  }

  render() {
    return <div>
      <UserForm onSubmit={this.addNewCard} />
      <CardList cards={this.state.cards} />
    </div>
  }
}



export default App;
