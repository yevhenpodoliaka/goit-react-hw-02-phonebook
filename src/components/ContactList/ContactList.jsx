const Contactlist = ({ contacts }) => {
    return (
        <ul>{contacts.map(({ id, name, number }) => (<li key={id}>
            <p>{name}:{ number}</p>
       </li>))}</ul> 

    )
    
}
export default Contactlist