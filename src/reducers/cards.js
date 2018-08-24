const defaultState = {
    id: '',
    node_id: '',
    card_id: []
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case 'CARD_CLICK':
            return {
                ...state,
                id: action.id,
                node_id: action.node_id
            }
        default:
            return state;
    }
}
