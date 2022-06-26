import './ContactList.module.css'

const Contactlist = ({ contacts, onDeleteContact }) => {
    return (
        <ul>{contacts.map(({ id, name, number }) => (<li key={id} >
            <p>{name}:{number}</p>
            <button type="button" onClick={(()=>onDeleteContact(id))}>delete</button>
       </li>))}</ul> 

    )
    
}
export default Contactlist