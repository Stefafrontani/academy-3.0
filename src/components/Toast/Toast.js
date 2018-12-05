import React from "react";
import { connect } from "react-redux";
import "./Toast.css";

const Toast = ({ store }) => {
    return (
        <div
            className={
                store.toastShow ? "container_show_toast" : "toast_container"
            }
        >
            <div className="toast">
                <img
                    height="32"
                    width="32"
                    src={store.toastIcon}
                    alt="Warning"
                />
                <span>{store.toastMessage}</span>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        store: state.toast
    };
}

export default connect(mapStateToProps)(Toast);
