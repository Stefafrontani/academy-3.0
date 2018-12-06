import React from "react";
import { connect } from "react-redux";
import "./Toast.css";

const Toast = ({ toastShow, toastIcon, toastMessage }) => {
    return (
        <div
            className={`toast_container${
                toastShow ? " container_show_toast" : ""
            }`}
        >
            <div className="toast">
                <img height="32" width="32" src={toastIcon} alt="Warning" />
                <span>{toastMessage}</span>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        toastShow: state.toast.toastShow,
        toastIcon: state.toast.toastIcon,
        toastMessage: state.toast.toastMessage
    };
}

export default connect(mapStateToProps)(Toast);
