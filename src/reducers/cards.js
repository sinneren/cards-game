
export default (state = [], action) => {
    switch (action.type) {
        case 'CARD_CLICK':
            return {
                ...state,
                id: action.id,
                node_id: action.node_id
            }
        case 'CARD_FLUSH':
            return {
                ...state,
                old: action.old,
                new: action.new
            }
        default:
            return state;
    }
}
