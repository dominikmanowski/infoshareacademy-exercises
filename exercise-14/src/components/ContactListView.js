import React, {Component} from 'react'

import AddContactForm from "./AddContactForm";
import ContactsList from "./ContactsList";

class ViewContactList extends Component {

    render() {
        return (
            <React.Fragment>
                <h1>Contact list</h1>
                <h2>Add contact:</h2>
                <AddContactForm/>
                <h2>Contacts:</h2>
                <ContactsList/>
            </React.Fragment>
        )
    }
}

export default ViewContactList