import React, { Component } from 'react';
import s from './ContactForm.module.css';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    };
    
    handleChange = e => {
        const { name, value } = e.currentTarget
        console.log(name);
        this.setState({ [name] : value})
    }
  render() {
    return (
      <form onSubmit={this.props.handler}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.handleChange}
        />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                 onChange={this.handleChange}
        />
        <button className={s.button} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
