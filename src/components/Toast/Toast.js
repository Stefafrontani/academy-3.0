import React from "react";
import "./Toast.css";

const Toast = ({ show, icon, message }) => {
    return (
        <div className={show ? "container_show_toast" : "toast_container"}>
            <div className="toast">
                <img height="32" width="32" src={icon} alt="Warning" />
                <span>{message}</span>
            </div>
        </div>
    );
};

export default Toast;
