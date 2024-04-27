import React from 'react';
import phone from '../../../assets/main/step1/phone.png'
import card from '../../../assets/main/step1/card.png'
import note from '../../../assets/main/step1/note.png'
import clock from '../../../assets/main/step1/clock.png'
import wifi from '../../../assets/main/step1/wifi.png'
import MyButton from "../../../components/UI/MyButton";
import {useTelegram} from "../../../hooks/useTelegram";
import TgNickname from "../../../components/UI/TgNickname";
import {BLUE} from "../../../utils/colors";
import Ellipses from "../../../components/UI/Ellipses";

const Step1 = ({goToStep}) => {
    const {user} = useTelegram();
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
                {user?.username ? <TgNickname nickname={user.username}/> : <TgNickname nickname={'Norbee'}/>}
                <div style={{fontSize: 28, fontWeight: 600, marginBottom: 5}}>
                    Добро пожаловать!
                </div>
                <div style={{fontSize: 16, fontWeight: 400}}>
                    <div>
                        в <span style={{color: BLUE, fontWeight: 500}}>WebApp</span> - приложение
                    </div>
                    <div>
                        внутри приложения
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
                        height={239}
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
                    width={118}
                    height={'auto'}
                    style={{position: "absolute", top: 160, left: 0, zIndex: 2}}
                    src={card}
                    alt={'card'}
                />
                <img
                    width={75}
                    height={'auto'}
                    style={{position: "absolute", top: 25, left: 18, zIndex: 2}}
                    src={clock}
                    alt={'clock'}
                />
                <img
                    width={107}
                    height={'auto'}
                    style={{position: "absolute", top: 0, right: 15, zIndex: 2}}
                    src={wifi}
                    alt={'wifi'}
                />
                <img
                    width={80}
                    height={'auto'}
                    style={{position: "absolute", top: 75, right: 0, zIndex: 2}}
                    src={note}
                    alt={'note'}
                />
                <Ellipses/>

                <MyButton
                    style={{marginTop: 30, zIndex: 2, marginBottom: 40}}
                    onClick={() => goToStep(2)}
                >
                    Изучить WebApp
                </MyButton>
            </div>
        </div>
    );
};

export default Step1;