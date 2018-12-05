const toastShow = payload => ({ type: "TOAST_SHOW", payload: payload });
const toastHide = () => ({ type: "TOAST_HIDE" });

export { toastShow, toastHide };
