import { nanoid } from "nanoid";
import { Component } from "react";


const INITIAL_STATE = {
  name: "",
  number: "",
};
export class ContactForm  extends Component {
  state = INITIAL_STATE

  handleChange = (evt) => {
      const { name, value } = evt.target;
      this.setState({ [name]: value })
  };

  handleSubmitForm = evt => {
    evt.preventDefault();
    const {name, number} = this.state
      const { addContact } = this.props;
      const checkingUniqueContacts = this.checkUnique();
      if (!checkingUniqueContacts) return 
    addContact({ id: nanoid(), name, number });
    this.reset();
  };
  
  checkUnique = () => { 
        const { name } = this.state;
        const { onCheckUnique } = this.props;
        if (!name) {
            return false
        }
        return onCheckUnique(name);
  }
  
  reset = () => this.setState(INITIAL_STATE);

  render() {
    const { name, number } = this.state;
  return (
    <>
      <form onSubmit={this.handleSubmitForm} key={this.id}>
        <div className="AddContactLabel">
          Name
          <input div className="AddContactInput"
            name="name"
            type="text"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div className="AddContactLabel">
          Number
          <input className="AddContactInput"
            name="number"
            type="tel"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handleChange}
            required
         />
        </div>
        <button className="AddContactButton" type="submit">Add contact</button>
      </form>
    </>
    );
  }
}