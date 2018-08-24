export function toggleCard(id, index) {
    return dispatch => {
        dispatch({
            type: 'CARD_CLICK',
            id: id,
            node_id: index
        });
    }
}

