const initialState = {
    data: {
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
    }
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return {
                ...state,
                data: state.data.concat({
                    id: Date.now().toString(32),
                    name: action.ContactName,
                    phone: action.contactPhone,
                    email: action.contactEmail,
                    category: action.contactCategory
                })
            };
        case 'REMOVE_CONTACT':
            return {
                ...state,
                data: state.data.filter(
                    contact => contact.id !== action.contactId)
            };
        default:
            return state
    }
}