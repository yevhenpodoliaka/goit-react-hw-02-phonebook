import PropTypes from 'prop-types';
import './ContactList.module.css'
import ContactItem from 'components/ContactItem/ContactItem';

const Contactlist = ({ contacts, onDeleteContact }) => {
    return (
        <ul>{contacts.map(({ id, name, number }) => (<li key={id}><ContactItem
         name={name } number={number} onDeleteContact={(()=>onDeleteContact(id))}/></li>))}</ul> 

    )
    
}
Contactlist.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    onDeleteContact:PropTypes.func,
}

export default Contactlist