import React, {Component} from 'react'
import {connect} from 'react-redux'

class ContactsList extends Component {
    handleRemoveClick = event => {
        const contactId = event.target.dataset.contactId;
        this.props.removeContact(contactId)
    };

    render() {
        const {contacts} = this.props;
        return (
            <ul>
                {contacts.map(contact =>
                    <li key={contact.id}>
                        <div>
                            <strong>
                                {contact.name}
                            </strong>
                            <button
                                data-contact-id={contact.id}
                                onClick={this.handleRemoveClick}>
                            </button>
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

export default connect(
    state => ({
        contacts: state.contacts.data
    }),
    dispatch => ({
        removeContact: contactId =>
            dispatch({
                type: 'REMOVE_CONTACT',
                contactId
            })
    })
)(ContactsList);