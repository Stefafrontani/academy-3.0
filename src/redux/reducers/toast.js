const initialState = {
    toastShow: true,
    toastIcon: "./assets/images/warning.svg",
    toastMessage: "Fuertes tormentas al sur de la capital federal"
};

const toast = (state = initialState, action) => {
    switch (action.type) {
        case "TOAST_SHOW":
            return Object.assign({}, state, {
                toastShow: true,
                toastMessage: action.payload.msg,
                toastIcon: action.payload.icon
            });
        case "TOAST_HIDE":
            return Object.assign({}, state, {
                toastShow: false,
                toastMessage: ""
            });
        default:
            return state;
    }
};

export default toast;
