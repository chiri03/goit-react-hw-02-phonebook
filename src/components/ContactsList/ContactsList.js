import './ContactsList.css';

export const SingleContact = ({ id, name, number, onRemove }) => { 
    return (
        <div className="ContactsLi">
            - {name}: {number}
            <button className="ContactsButton" onClick={() => onRemove(id)}>Remove</button>
        </div>
    );
};

export const ContactsList = ({ contacts, onRemove }) => { 
    return (
        <ul className="ContactsUl">
            {contacts.map((contact) => (
                <SingleContact
                    key={contact.id} // Use a unique identifier as the key
                    {...contact}
                    onRemove={onRemove}
                />
            ))}
        </ul>
    );
};