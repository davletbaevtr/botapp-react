import React from 'react';
import BlueText from "../../../components/UI/BlueText";
import folder from "../../../assets/main/step6/folder.png";
import clock from "../../../assets/main/step6/clock.png";
import phone from "../../../assets/main/step6/phone.png";
import bell from "../../../assets/main/step6/bell.png";
import Ellipses from "../../../components/UI/Ellipses";
import MyButton from "../../../components/UI/MyButton";
import {WHITE} from "../../../utils/colors";

const Step6 = ({goToStep}) => {
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
                    Разработка приложения стала доступнее
                </div>
                <div style={{fontSize: 16, fontWeight: 400}}>
                    <div>
                        Разработка приложения в Telegram гораздо
                    </div>

                    <div>
                        <BlueText>дешевле</BlueText> классического приложения <BlueText>в 5 раз</BlueText>
                    </div>

                    <div>
                        и начинается <BlueText>от 100 000 р</BlueText>
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
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <img
                        height={210}
                        width={'auto'}
                        style={{
                            objectFit: 'contain',
                            overflowClipMargin: 'content-box',
                            overflow: "clip",
                            zIndex: 3
                        }}
                        src={phone} alt={'phone'}
                    />
                </div>

                <img
                    width={80}
                    height={'auto'}
                    style={{position: "absolute", top: 100, right: 10, zIndex: 2}}
                    src={clock}
                    alt={'clock'}
                />
                <img
                    width={70}
                    height={'auto'}
                    style={{position: "absolute", top: 35, left: 0, zIndex: 2}}
                    src={folder}
                    alt={'folder'}
                />
                <img
                    width={65}
                    height={'auto'}
                    style={{position: "absolute", top: 150, left: 45, zIndex: 2}}
                    src={bell}
                    alt={'bell'}
                />

                <Ellipses/>

                <div style={{display: "flex", flexDirection: "column"}}>
                    <MyButton
                        style={{zIndex: 2}}
                        onClick={() => goToStep(7)}
                    >
                        Хочу разработку
                    </MyButton>
                    <MyButton
                        style={{zIndex: 2, backgroundColor: 'rgba(255, 255, 255, 0)', color: WHITE}}
                        onClick={() => goToStep(8)}
                    >
                        Нужна ваша помощь
                    </MyButton>
                </div>
            </div>
        </div>
    );
};

export default Step6;