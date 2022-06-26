import React, { Component } from "react";
import ContactForm from './ContactForm/ContactForm'
import Contactlist from './ContactList/ContactList'
class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
}
  
  handlerFormSubmit = e => {
    e.preventdefault();
    console.log(e);
  }
  render() {
      return (
        <div>
          <h1>Phonebook</h1>
          <ContactForm handler={this.handlerFormSubmit} />
          <h2>Contacts</h2>
          <Contactlist contacts={this.state.contacts}/>
    </div>
  );
  }

};

export default App