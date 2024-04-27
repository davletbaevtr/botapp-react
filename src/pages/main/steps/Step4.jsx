import React, {useEffect, useState} from 'react';
import BlueText from "../../../components/UI/BlueText";
import MyButton from "../../../components/UI/MyButton";
import Slider from "react-slick";
import {DEEP_BLUE, WHITE45} from "../../../utils/colors";
import car from '../../../assets/main/step4/car.png'
import hand from '../../../assets/main/step4/hand.png'
import MarkText from "../../../components/UI/MarkText";
import Ellipses from "../../../components/UI/Ellipses";

const Step4 = ({goToStep}) => {
    const [sliderHeight, setSliderHeight] = useState(160);
    const [top, setTop] = useState(12);

    const updateDimensions = () => {
        const height = window.innerHeight;
        const newSliderHeight = Math.min(217, Math.max(160, height * 0.3));
        const newTop = Math.max((newSliderHeight - 160) * 0.7, 12);
        setSliderHeight(newSliderHeight);
        setTop(newTop);
    };

    useEffect(() => {
        window.addEventListener('resize', updateDimensions);
        updateDimensions();
        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: false,
        adaptiveHeight: true,
        autoplay: false,
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                overflow: "auto",
            }}
        >
            <div style={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                alignItems: "center",
                marginTop: 10,
                textAlign: "center",
                height: "100%",
                justifyContent: "center"
            }}>
                <div style={{fontSize: 28, fontWeight: 600, marginBottom: 5}}>
                    Применим<br/>
                    для любых сфер
                </div>
                <div style={{fontSize: 16, fontWeight: 400}}>
                    <div>
                        WebApp применим практически
                    </div>

                    <div>
                        в любой сфере предоставления услуг,
                    </div>

                    <BlueText>
                        облегчает ведение вашего бизнеса,
                    </BlueText>
                    <div>
                        а также незаменим для вашего блога
                    </div>
                </div>
            </div>

            <div style={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                position: "relative",
                paddingTop: 10,
                justifyContent: "flex-end",
            }}>
                <Slider {...settings} style={{marginLeft: 15, zIndex: 1}}>
                    <div>
                        <div
                            style={{
                                width: "calc(100vw - 30px)",
                                display: "flex",
                                flexDirection: "column",
                                minHeight: sliderHeight,
                                padding: '15px 0 0 20px',
                                borderRadius: 10,
                                backgroundColor: WHITE45,
                                position: "relative",
                            }}
                        >
                            <div style={{fontSize: 20, marginBottom: 5}}>
                                <span style={{fontWeight: 600, color: DEEP_BLUE}}>Автосалоны</span>
                            </div>
                            <MarkText text={'Запись клиентов'}/>
                            <MarkText text={'Онлайн - консультации'}/>
                            <MarkText text={'Оплата услуги'}/>
                            <img
                                width={120}
                                height={'auto'}
                                src={car}
                                alt={'car'}
                                style={{position: "absolute", right: 15, top: top}}
                            />
                        </div>
                    </div>
                    <div>
                        <div
                            style={{
                                width: "calc(100vw - 30px)",
                                display: "flex",
                                flexDirection: "column",
                                minHeight: sliderHeight,
                                padding: '15px 0 0 20px',
                                borderRadius: 10,
                                backgroundColor: WHITE45,
                                position: "relative",
                            }}
                        >
                            <div style={{fontSize: 20}}>
                                <span style={{fontWeight: 600, color: DEEP_BLUE}}>Кафе, рестораны</span>
                            </div>
                            <MarkText text={'Запись клиентов'}/>
                            <MarkText text={'Онлайн - консультации'}/>
                            <MarkText text={'Оплата услуги'}/>
                            <img
                                width={120}
                                height={'auto'}
                                src={hand}
                                alt={'hand'}
                                style={{position: "absolute", right: 0, top: top}}
                            />
                        </div>
                    </div>
                    <div>
                        <div
                            style={{
                                width: "calc(100vw - 30px)",
                                display: "flex",
                                flexDirection: "column",
                                minHeight: sliderHeight,
                                padding: '15px 0 0 20px',
                                borderRadius: 10,
                                backgroundColor: WHITE45,
                                position: "relative",
                            }}
                        >
                            <div style={{fontSize: 20, marginBottom: 5}}>
                                <span style={{fontWeight: 600, color: DEEP_BLUE}}>Недвижимость</span>
                            </div>
                            <MarkText text={'Запись клиентов'}/>
                            <MarkText text={'Онлайн - консультации'}/>
                            <MarkText text={'Оплата услуги'}/>
                            <img
                                width={120}
                                height={'auto'}
                                src={car}
                                alt={'car'}
                                style={{position: "absolute", right: 15, top: top}}
                            />
                        </div>
                    </div>
                    <div>
                        <div
                            style={{
                                width: "calc(100vw - 30px)",
                                display: "flex",
                                flexDirection: "column",
                                minHeight: sliderHeight,
                                padding: '15px 0 0 20px',
                                borderRadius: 10,
                                backgroundColor: WHITE45,
                                position: "relative",
                            }}
                        >
                            <div style={{fontSize: 20, marginBottom: 5}}>
                                <span style={{fontWeight: 600, color: DEEP_BLUE}}>Бьюти - салоны</span>
                            </div>
                            <MarkText text={'Запись клиентов'}/>
                            <MarkText text={'Онлайн - консультации'}/>
                            <MarkText text={'Оплата услуги'}/>
                            <img
                                width={120}
                                height={'auto'}
                                src={car}
                                alt={'car'}
                                style={{position: "absolute", right: 15, top: top}}
                            />
                        </div>
                    </div>
                </Slider>

                <Ellipses/>

                <MyButton
                    style={{zIndex: 2, marginBottom: 40, marginTop: 35}}
                    onClick={() => goToStep(5)}
                >
                    Вау! а что еще?
                </MyButton>
            </div>
        </div>
    );
};

export default Step4;