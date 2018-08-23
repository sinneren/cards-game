
export default (state = [], action) => {
    switch (action.type) {
        case 'CARD_CLICK':
            return {
                ...state,
                id: action.id
            }
        default:
            return state;
    }
}
