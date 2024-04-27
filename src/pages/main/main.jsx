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
import {usePreloadImages} from "../../hooks/usePreLoadImages";
import {CircularProgress} from "@mui/material";

import step8Hand from '../../assets/main/step8/hand.png';
import step7Wa from '../../assets/main/step7/wa.svg';
import step7Money from '../../assets/main/step7/money.png';
import step7Twomoney from '../../assets/main/step7/twomoney.png';
import step7Trofey from '../../assets/main/step7/trofey.png';
import step7Phone from '../../assets/main/step7/phone.svg';
import step7Tg from '../../assets/main/step7/tg.svg';
import step7Onemoney from '../../assets/main/step7/onemoney.png';
import step6Phone from '../../assets/main/step6/phone.png';
import step6Folder from '../../assets/main/step6/folder.png';
import step6Clock from '../../assets/main/step6/clock.png';
import step6Bell from '../../assets/main/step6/bell.png';
import step5Wb from '../../assets/main/step5/wb.svg';
import step5Crm from '../../assets/main/step5/crm.svg';
import step5Ozon from '../../assets/main/step5/ozon.svg';
import step5Bitrix from '../../assets/main/step5/bitrix.svg';
import step5Onec from '../../assets/main/step5/onec.svg';
import step5Mount from '../../assets/main/step5/mount.svg';
import step5Coinmarketcap from '../../assets/main/step5/coinmarketcap.svg';
import step5Gosuslugi from '../../assets/main/step5/gosuslugi.svg';
import step4Mark from '../../assets/main/step4/mark.svg';
import step4Car from '../../assets/main/step4/car.png';
import step4Hand from '../../assets/main/step4/hand.png';
import step3Youtube from '../../assets/main/step3/youtube.png';
import step3Mark from '../../assets/main/step3/mark.png';
import step3Clock from '../../assets/main/step3/clock.png';
import step3Folder from '../../assets/main/step3/folder.png';
import step2Store from '../../assets/main/step2/store.png';
import step2Paper from '../../assets/main/step2/paper.png';
import step2Chat from '../../assets/main/step2/chat.png';
import step2Phone from '../../assets/main/step2/phone.png';
import step2Microsoft from '../../assets/main/step2/microsoft.png';
import step2Google from '../../assets/main/step2/google.png';
import step1Wifi from '../../assets/main/step1/wifi.png';
import step1Note from '../../assets/main/step1/note.png';
import step1Card from '../../assets/main/step1/card.png';
import step1Phone from '../../assets/main/step1/phone.png';
import step1Bottom_ellipse from '../../assets/main/step1/bottom_ellipse.png';
import step1Top_ellipse from '../../assets/main/step1/top_ellipse.png';
import step1Clock from '../../assets/main/step1/clock.png';

const Main = () => {
    const {tg} = useTelegram();

    const allImages = [
        step8Hand, step7Wa, step7Money, step7Twomoney, step7Trofey, step7Phone, step7Tg, step7Onemoney,
        step6Phone, step6Folder, step6Clock, step6Bell,
        step5Wb, step5Crm, step5Ozon, step5Bitrix, step5Onec, step5Mount, step5Coinmarketcap, step5Gosuslugi,
        step4Mark, step4Car, step4Hand,
        step3Youtube, step3Mark, step3Clock, step3Folder,
        step2Store, step2Paper, step2Chat, step2Phone, step2Microsoft, step2Google,
        step1Wifi, step1Note, step1Card, step1Phone, step1Bottom_ellipse, step1Top_ellipse, step1Clock
    ];

    const imagesLoaded = usePreloadImages(allImages);
    const [currentPage, setCurrentPage] = useState(1);
    const [history, setHistory] = useState([1]);

    const goToStep = (page) => {
        setHistory([...history, page]);
        setCurrentPage(page);
    };

    useEffect(() => {
        const goBack = () => {
            const newHistory = history.slice(0, -1);
            setHistory(newHistory);
            setCurrentPage(newHistory[newHistory.length - 1]);
        };

        if (history.length > 1) {
            tg.BackButton.onClick(goBack);
            tg.BackButton.show();
        } else {
            tg.BackButton.offClick(goBack);
            tg.BackButton.hide();
        }
    }, [history]);

    useEffect(() => {
        return () => {
            tg.BackButton.hide();
        };
    }, []);

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
            <div style={{maxHeight: "calc(100svh)", height: "calc(100svh)"}}>
                {imagesLoaded ?
                    renderCurrentPage() :
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                        <CircularProgress/>
                    </div>
                }
            </div>
        </div>
    );
};

export default Main;