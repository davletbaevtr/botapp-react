import React from 'react';
import {BLUE} from "../../../utils/colors";
import google from "../../../assets/main/step2/google.png";
import microsoft from "../../../assets/main/step2/microsoft.png";
import phone from "../../../assets/main/step2/phone.png";
import chat from "../../../assets/main/step2/chat.png";
import paper from "../../../assets/main/step2/paper.png";
import store from "../../../assets/main/step2/store.png";
import MyButton from "../../../components/UI/MyButton";
import Ellipses from "../../../components/UI/Ellipses";

const Step2 = ({goToStep}) => {
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
                    Что это такое?
                </div>
                <div style={{fontSize: 16, fontWeight: 400}}>
                    <div>
                        веб-приложение, взаимодействие
                    </div>

                    <div>
                        с которым происходит внутри Telegram,
                    </div>

                    <div>
                        <span style={{color: BLUE, fontWeight: 500}}>без перехода</span> в другие приложения
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
                        height={250}
                        width={'auto'}
                        style={{
                            objectFit: 'contain',
                            overflowClipMargin: 'content-box',
                            overflow: "clip",
                            zIndex: 2
                        }}
                        src={phone} alt={'phone'}
                    />
                </div>

                <img
                    width={70}
                    height={'auto'}
                    style={{position: "absolute", top: 150, left: 0, zIndex: 2}}
                    src={microsoft}
                    alt={'microsoft'}
                />
                <img
                    width={40}
                    height={'auto'}
                    style={{position: "absolute", top: 60, right: 0, zIndex: 2}}
                    src={paper}
                    alt={'paper'}
                />
                <img
                    width={50}
                    height={'auto'}
                    style={{position: "absolute", top: 75, left: 0, zIndex: 2}}
                    src={chat}
                    alt={'chat'}
                />
                <img
                    width={75}
                    height={'auto'}
                    style={{position: "absolute", top: 0, left: 18, zIndex: 2}}
                    src={store}
                    alt={'store'}
                />
                <img
                    width={80}
                    height={'auto'}
                    style={{position: "absolute", top: 168, right: 0, zIndex: 2}}
                    src={google}
                    alt={'google'}
                />
                <Ellipses/>

                <MyButton
                    style={{zIndex: 2, marginBottom: 10}}
                    onClick={() => goToStep(3)}
                >
                    Что может WebApp
                </MyButton>
            </div>
        </div>
    );
};

export default Step2;