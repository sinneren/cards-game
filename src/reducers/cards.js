
export default (state = [], action) => {
    switch (action.type) {
        case 'CARD_CLICK':
            return {
                ...state,
                id: action.id
            }
        case 'CARD_ADD':
            return {
                ...state,
                node_id: action.node_id
            }
        default:
            return state;
    }
}
