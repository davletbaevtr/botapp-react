import React, {useEffect, useState} from 'react';
import Step1 from "./steps/Step1";
import {BACKGROUND_BLUE, LIGHT_GRAY} from "../../utils/colors";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import Step6 from "./steps/Step6";
import Step7 from "./steps/Step7";
import Step8 from "./steps/Step8";
import {useTelegram} from "../../hooks/useTelegram";

const Main = () => {
    const {tg} = useTelegram();
    const [currentPage, setCurrentPage] = useState(1);
    const [history, setHistory] = useState([1])
    const [needShow, setNeedShow] = useState(true);

    const goBack = () => {
        const newHistory = history.slice(0, -1);
        setHistory(newHistory);
        setCurrentPage(newHistory[newHistory.length - 1]);
    };


    const goToStep = (page) => {
        setHistory([...history, page]);
        setCurrentPage(page);
    };

    useEffect(() => {
        if (history.length > 1) {
            console.log('>lenght 1')
            if (needShow) {
                console.log('show')
                tg.BackButton.show();
                tg.BackButton.onClick(goBack);
                setNeedShow(false);
            }
        } else if (history.length === 1) {
            console.log('hide')
            tg.BackButton.hide();
            setNeedShow(true);
        }

        return () => {
            console.log('ofclick')
            tg.BackButton.offClick(goBack);
            tg.BackButton.hide();
        };
    }, [history]);

    const renderCurrentPage = () => {
        switch (currentPage) {
            case 1:
                return <Step1 goToStep={goToStep}/>;
            case 2:
                return <Step2 goToStep={goToStep}/>;
            case 3:
                return <Step3 goToStep={goToStep}/>;
            case 4:
                return <Step4 goToStep={goToStep}/>;
            case 5:
                return <Step5 goToStep={goToStep}/>;
            case 6:
                return <Step6 goToStep={goToStep}/>;
            case 7:
                return <Step7 goToStep={goToStep}/>;
            case 8:
                return <Step8 goToStep={goToStep}/>;
            default:
                return <div>Page not found</div>;
        }
    };

    return (
        <div style={{
            background: `linear-gradient(${LIGHT_GRAY} 0%, ${LIGHT_GRAY} 30%,  ${BACKGROUND_BLUE} 80%, ${BACKGROUND_BLUE} 100%)`,
            minHeight: "100vh",
        }}>
            <div style={{maxHeight: "calc(100svh - 87px)", height: "calc(100svh - 87px)"}}>
                {renderCurrentPage()}
            </div>
        </div>
    );
};

export default Main;