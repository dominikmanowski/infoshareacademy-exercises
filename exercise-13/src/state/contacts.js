const initialState = {
    contact: []
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case 'ADD_PROFILE':
            return {
                ...state,
                data: state.data.concat({
                    id: Date.now().toString(32),
                    name: action.nameProfile,
                    phone: action.phoneProfile,
                    email: action.emailProfile,
                    category: action.categoryProfile
                })
            }
        case 'REMOVE_PROFILE':
            return {
                ...state,
                data: state.data.filter(
                    profile => profile.id !== action.removedProfileId
                )
            }
        default:
            return state
    }
}