import React, {Component} from 'react'

const initialState = {
    contactName: '',
    contactPhoneNumber: '',
    contactEmail: '',
    contactCategories: []
};

class AddContactForm extends Component {

    state = initialState;

    handleChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    };

    handleSubmit = event => {
        event.preventDefault();

        this.props.addContact(this.state);

        this.setState(initialState)
    };

    render() {
        const {contactName, contactPhoneNumber, contactEmail, contactCategories} = this.state;
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name="contactName"
                        value={contactName}
                        onChange={this.handleChange}
                        placeholder={"name"}/>
                    <input
                        name="contactPhoneNumber"
                        value={contactPhoneNumber}
                        onChange={this.handleChange}
                        placeholder={"phone number"}/>
                    <input
                        name="contactEmail"
                        value={contactEmail}
                        onChange={this.handleChange}
                        placeholder={"e-mail address"}/>
                    <input
                        name="contactCategories"
                        value={contactCategories}
                        onChange={this.handleChange}
                        placeholder={"categories (comma separated)"}/>
                    <button>Add contact</button>
                </form>
            </React.Fragment>
        )
    }
}

export default AddContactForm