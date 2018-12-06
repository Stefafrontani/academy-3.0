import {
    WEATHERCARDS_INITIAL_STATE,
    SET_WEATHERCARDS
} from "../../commons/constants";

const weatherCards = (state = WEATHERCARDS_INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_WEATHERCARDS:
            return Object.assign({}, state, {
                weatherCards: action.payload
            });
        default:
            return state;
    }
};

export default weatherCards;
