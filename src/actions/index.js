// function checkData(data) {
//     if (state.length === 0) {
//         state.push(data);
//         return true;
//     } else if (state.length === 1) {
//         state.push(data);
//         if (state[0] === state[1]) {
//             state = [];
//             return true;
//         }
//         return false;
//     } else {
//         state = [];
//         return false;
//     }
// }
export function toggleCard (id) {
    return dispatch => {
        dispatch({
            type: 'CARD_CLICK',
            id: id
        });
    }
}