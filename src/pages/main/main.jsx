import React, {useState} from 'react';
import Step1 from "./steps/step1";
import {BACKGROUND_BLUE, LIGHT_GRAY} from "../../utils/colors";

const Main = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const goToStep = (page) => {
        setCurrentPage(page);
    };

    const renderCurrentPage = () => {
        switch (currentPage) {
            case 1:
                return <Step1 goToStep={goToStep}/>;
            // case 2:
            //     return <Step2 goToStep={goToStep}/>;
            // case 3:
            //     return <Step3 goToStep={goToStep}/>;
            // case 4:
            //     return <Step4 goToStep={goToStep}/>;
            // case 5:
            //     return <Step5 goToStep={goToStep}/>;
            // case 6:
            //     return <Step6 goToStep={goToStep}/>;
            // case 7:
            //     return <Step7 goToStep={goToStep}/>;
            default:
                return <div>Page not found</div>;
        }
    };

    return (
        <div style={{
            background: `linear-gradient(${LIGHT_GRAY} 0%, ${LIGHT_GRAY} 30%,  ${BACKGROUND_BLUE} 80%, ${BACKGROUND_BLUE} 100%)`,
            minHeight: "100vh",
        }}>
            <div style={{maxHeight: "calc(100svh - 60px)", height: "calc(100svh - 60px)"}}>
                {renderCurrentPage()}
            </div>
        </div>
    );
};

export default Main;