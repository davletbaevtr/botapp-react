import React from 'react';
import folder from "../../../assets/main/step3/folder.png";
import clock from "../../../assets/main/step3/clock.png";
import mark from "../../../assets/main/step3/mark.png";
import youtube from "../../../assets/main/step3/youtube.png";
import MyButton from "../../../components/UI/MyButton";
import BlueText from "../../../components/UI/BlueText";
import Ellipses from "../../../components/UI/Ellipses";

const Step3 = ({goToStep}) => {
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
                    Возможности
                </div>
                <div style={{fontSize: 16, fontWeight: 400}}>
                    <div>
                        все, что делают все приложения, за счет
                    </div>

                    <div>
                        интеграции готовы <BlueText>заменить</BlueText> практически
                    </div>

                    <div>
                        любое <BlueText>приложение</BlueText> или <BlueText>сайт</BlueText>
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
                        height={265}
                        width={'auto'}
                        style={{
                            objectFit: 'contain',
                            overflowClipMargin: 'content-box',
                            overflow: "clip",
                            zIndex: 3
                        }}
                        src={folder} alt={'folder'}
                    />
                </div>

                <img
                    width={46}
                    height={'auto'}
                    style={{position: "absolute", top: 30, right: 65, zIndex: 2}}
                    src={mark}
                    alt={'mark'}
                />
                <img
                    width={90}
                    height={'auto'}
                    style={{position: "absolute", top: 5, left: 0, zIndex: 2}}
                    src={clock}
                    alt={'clock'}
                />
                <img
                    width={95}
                    height={'auto'}
                    style={{position: "absolute", top: 88, right: 0, zIndex: 2}}
                    src={youtube}
                    alt={'youtube'}
                />

                <Ellipses/>

                <MyButton
                    style={{zIndex: 2, marginBottom: 10}}
                    onClick={() => goToStep(4)}
                >
                    Подойдет мне WebApp?
                </MyButton>
            </div>
        </div>
    );
};

export default Step3;