export function toggleCard(id, index) {
    return dispatch => {
        dispatch({
            type: 'CARD_CLICK',
            payload: {
                id: id,
                node_id: index,
            },
        });
    }
}
export function addMatch(id) {
    return dispatch => {
        dispatch({
            type: 'CARD_MATCH',
            payload: {
                id: id,
            },
        });
    }
}
export function finishGame() {
    return dispatch => {
        dispatch({
            type: 'CARD_WIN',
            payload: {
                finish: true,
            },
        });
    }
}