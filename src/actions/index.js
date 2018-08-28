export function toggleCard(id, index) {
    return dispatch => {
        dispatch({
            type: 'CARD_CLICK',
            payload: {
                id: id,
                node_id: index,
            },
        });
        setTimeout(() => {
            dispatch({
                type: 'CARD_MATCH',
                payload: {
                    id: id,
                    node_id: index,
                },
            });
        }, 700);
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
export function newGame() {
    return dispatch => {
        dispatch({
            type: 'NEW_GAME',
        });
    }
}
export function setList(list) {
    return dispatch => {
        dispatch({
            type: 'SET_LIST',
            payload: {
                list: list,
            }
        });
    }
}