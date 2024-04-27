import React from 'react';
import topElliplse from "../../assets/main/step1/top_ellipse.png";
import bottomElliplse from "../../assets/main/step1/bottom_ellipse.png";

const Ellipses = () => {
    return (
        <>
            <img
                width={"100%"}
                style={{position: 'absolute', bottom: 265, zIndex: 0}}
                src={topElliplse}
                alt={'top ellipse'}
            />
            <img
                width={"100%"}
                style={{position: 'absolute', bottom: 110, zIndex: 0}}
                src={bottomElliplse}
                alt={'bottom ellipse'}
            />
        </>
    )
        ;
};

export default Ellipses;