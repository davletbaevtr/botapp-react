import React from 'react';
import {WHITE45} from "../../utils/colors";

const PartnerCard = ({img, margin, onClick}) => {
    return (
        <div
            style={{
                backgroundColor: WHITE45,
                borderRadius: 25,
                width: '26vw',
                minWidth: '26vw',
                height: '26vw',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: margin
            }}
            onClick={onClick}
        >
            <img src={img} alt={'img'}/>
        </div>
    );
};

export default PartnerCard;