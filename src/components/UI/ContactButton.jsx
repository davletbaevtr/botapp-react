import React from 'react';
import {WHITE45} from "../../utils/colors";

const ContactButton = ({img, onClick, text}) => {
    return (
        <div
            style={{
                backgroundColor: WHITE45,
                borderRadius: 14,
                width: 56,
                height: 56,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: '0 10px 0 10px',
            }}
            onClick={onClick}
        >
            {img && <img src={img} alt={'img'}/>}
            {text}
        </div>
    );
};

export default ContactButton;