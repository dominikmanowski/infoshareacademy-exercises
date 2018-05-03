import React, {Component} from 'react'

class ContactsList extends Component {
    render() {
        const {contacts, removeContact} = this.props;
        return (
            <ul>
                {contacts.map(contact =>
                    <li key={contact.id}>
                        <div>
                            <strong>
                                {contact.name}
                            </strong>
                            <button onClick={() => removeContact(contact.id)}>X</button>
                        </div>
                        <div>
                            {contact.phoneNumber}, {contact.email}
                        </div>
                        <span>
                            {contact.categories.map(category => `[${category.trim()}]`).join(', ')}
                        </span>
                    </li>
                )}
            </ul>
        )
    }
}

export default ContactsList