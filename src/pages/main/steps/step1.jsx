import React from 'react';
import phone from '../../../assets/main/step1_icons/phone.png'
import card from '../../../assets/main/step1_icons/card.png'
import note from '../../../assets/main/step1_icons/note.png'
import clock from '../../../assets/main/step1_icons/clock.png'
import wifi from '../../../assets/main/step1_icons/wifi.png'
import MyButton from "../../../components/UI/MyButton";
import {useTelegram} from "../../../hooks/useTelegram";
import TgNickname from "../../../components/UI/TgNickname";
import {BLUE} from "../../../utils/colors";

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
                textAlign: "center"
            }}>
                {user?.username ? <TgNickname nickname={user.username}/> : <TgNickname nickname={'Norbee'}/>}
                <div style={{fontSize: 28, fontWeight: 600, marginBottom: 5}}>
                    Добро пожаловать!
                </div>
                <div style={{fontSize: 16, fontWeight: 400}}>
                    <div>
                        в <span style={{color: BLUE, fontWeight: 500}}>WebApps</span> - приложение
                    </div>
                    <div>
                        Внутри приложения
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
                        style={{
                            objectFit: 'contain',
                            overflowClipMargin: 'content-box',
                            overflow: "clip",
                        }}
                        src={phone} alt={'phone'}
                    />
                </div>

                <img
                    style={{position: "absolute", top: 160, left: 0}}
                    src={card}
                    alt={'card'}
                />
                <img
                    style={{position: "absolute", top: 25, left: 18}}
                    src={clock}
                    alt={'clock'}
                />
                <img
                    style={{position: "absolute", top: 0, right: 15}}
                    src={wifi}
                    alt={'wifi'}
                />
                <img
                    style={{position: "absolute", top: 70, right: 0}}
                    src={note}
                    alt={'note'}
                />

                <MyButton style={{marginTop: 10, zIndex: 2, marginBottom: 10}}>
                    Изучить WebApps
                </MyButton>
            </div>
        </div>
    );
};

export default Step1;