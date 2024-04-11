import React from 'react';
import {DEEP_BLUE, LIGHT_BLUE} from "../../utils/colors";

const TgNickname = ({nickname}) => {
    return (
        <div style={{borderRadius: 25, fontSize: 28, backgroundColor: LIGHT_BLUE, padding: '0 14px 4px 14px', fontWeight: 600, color: DEEP_BLUE}}>
            @{nickname}
        </div>
    );
};

export default TgNickname;