import React, {Component} from 'react'

import AddContactForm from "./AddContactForm";
import ContactsList from "./ContactsList";

class ViewContactList extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: "John McClane",
                phoneNumber: "555-555-555",
                email: "diehard@example.com",
                categories:
                    [
                        "work",
                        "friend",
                        "basketball"
                    ]
            },
            {
                id: 2,
                name: "Max Rockatansky",
                phoneNumber: "555-555-123",
                email: "interceptor@example.com",
                categories:
                    [
                        "family",
                        "brother"
                    ]
            },
            {
                id: 3,
                name: "Ellen Ripley",
                phoneNumber: "555-555-456",
                email: "alien79@example.com",
                categories:
                    [
                        "family",
                        "sister"
                    ]
            },
        ]
    };

    addContact = ({ contactName, contactPhoneNumber, contactEmail, contactCategories }) => {
        this.setState({
            contacts: this.state.contacts.concat({
                id: Date.now().toString(32),
                name: contactName,
                phoneNumber: contactPhoneNumber,
                email: contactEmail,
                categories: contactCategories.split(',').map(contact => contact.trim())
            })
        })
    };

    removeContact = contactId => {
        this.setState({
            contacts: this.state.contacts.filter(contact => contact.id !== contactId)
        })
    };

    render() {
        return (
            <React.Fragment>
                <h1>Contact list</h1>
                <h2>Add contact:</h2>
                <AddContactForm addContact={this.addContact}/>
                <h2>Contacts:</h2>
                <ContactsList contacts={this.state.contacts} removeContact={this.removeContact}/>
            </React.Fragment>
        )
    }
}

export default ViewContactList