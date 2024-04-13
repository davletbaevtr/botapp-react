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
import {CircularProgress} from "@mui/material";

const Main = () => {
    const [isLoading, setIsLoading] = useState(true);
    const preloadImages = (srcArray) => {
        let loadedImages = 0;
        const totalImages = srcArray.length;
        srcArray.forEach((src, index) => {
            const img = new Image();
            img.src = src;
            loadedImages++;
            if (loadedImages === totalImages) {
                setIsLoading(false);
            }
        });
    };

    useEffect(() => {
        const images = [
            '../../assets/main/step8/hand.png',
            '../../assets/main/step7/wa.svg',
            '../../assets/main/step7/twomoney.png',
            '../../assets/main/step7/trofey.png',
            '../../assets/main/step7/tg.svg',
            '../../assets/main/step7/phone.svg',
            '../../assets/main/step7/onemoney.png',
            '../../assets/main/step7/money.png',
            '../../assets/main/step6/phone.png',
            '../../assets/main/step6/folder.png',
            '../../assets/main/step6/clock.png',
            '../../assets/main/step6/bell.png',
            '../../assets/main/step5/wb.svg',
            '../../assets/main/step5/coinmarketcap.svg',
            '../../assets/main/step5/mount.svg',
            '../../assets/main/step5/gosuslugi.svg',
            '../../assets/main/step5/bitrix.svg',
            '../../assets/main/step5/onec.svg',
            '../../assets/main/step5/ozon.svg',
            '../../assets/main/step5/crm.svg',
            '../../assets/main/step4/mark.svg',
            '../../assets/main/step4/hand.png',
            '../../assets/main/step4/car.png',
            '../../assets/main/step3/youtube.png',
            '../../assets/main/step3/mark.png',
            '../../assets/main/step3/clock.png',
            '../../assets/main/step3/folder.png',
            '../../assets/main/step2/store.png',
            '../../assets/main/step2/phone.png',
            '../../assets/main/step2/microsoft.png',
            '../../assets/main/step2/google.png',
            '../../assets/main/step2/paper.png',
            '../../assets/main/step2/chat.png',
            '../../assets/main/step1/wifi.png',
            '../../assets/main/step1/clock.png',
            '../../assets/main/step1/card.png',
            '../../assets/main/step1/note.png',
            '../../assets/main/step1/phone.png',
            '../../assets/main/step1/bottom_ellipse.png',
            '../../assets/main/step1/top_ellipse.png'
        ];

        preloadImages(images);
    }, []);


    const {tg} = useTelegram();
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
            <div style={{maxHeight: "calc(100svh - 87px)", height: "calc(100svh - 87px)"}}>
                {isLoading ?
                    <div style={{height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <CircularProgress/>
                    </div> :
                    renderCurrentPage()
                }
            </div>
        </div>
    );
};

export default Main;