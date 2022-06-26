import PropTypes from 'prop-types';
import './ContactList.module.css'

const Contactlist = ({ contacts, onDeleteContact }) => {
    return (
        <ul>{contacts.map(({ id, name, number }) => (<li key={id} >
            <p>{name}:{number}</p>
            <button type="button" onClick={(()=>onDeleteContact(id))}>delete</button>
       </li>))}</ul> 

    )
    
}
Contactlist.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    onDeleteContact:PropTypes.func,
}

export default Contactlist