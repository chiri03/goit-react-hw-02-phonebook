import './ContactsList.css'
export const SingleContact = ({ id, name, number, onRemove }) => { 
    return (
        <div className="ContactsLi">
            - {name}: {number}
            <button className="ContactsButton" onClick={() => onRemove(id)}>Remove</button>
        </div>
    )
}
export const ContactsList = ({contacts, onRemove}) => { 
    return (
        <ul className="ContactsUl">
            {contacts.map((contact, id) => (
                <SingleContact {...contact} key={id}
                onRemove={onRemove}/>
            ))}
        </ul>
    )
}