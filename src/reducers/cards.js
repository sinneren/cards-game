const defaultState = {
    id: '',
    node_id: '',
    cards_matched: 0,
    finish: false,
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case 'CARD_CLICK':
            return {
                ...state,
                id: action.payload.id,
                node_id: action.payload.node_id,
            }
        case 'CARD_MATCH':
            return {
                ...state,
                cards_matched: ++state.cards_matched,
            }
        case 'CARD_WIN':
            return {
                ...state,
                finish: true,
            }
        default:
            return state;
    }
}
