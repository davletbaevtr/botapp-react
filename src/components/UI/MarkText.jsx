import React from 'react';
import mark from "../../assets/main/step4/mark.svg";
import {WHITE45} from "../../utils/colors";

const MarkText = ({text}) => {
    return (
        <div style={{display: "flex", alignItems: "center", fontSize: 14,}}>
            <img src={mark} alt={'mark'}
                 style={{backgroundColor: WHITE45, borderRadius: 5, padding: 2, marginRight: 10, marginTop: 2}}
                 width={20} height={20}
            />
            {text}
        </div>
    );
};

export default MarkText;