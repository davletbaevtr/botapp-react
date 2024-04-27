import React from 'react';
import ContactButton from "../../../components/UI/ContactButton";
import tg from "../../../assets/main/step7/tg.svg";
import wa from "../../../assets/main/step7/wa.svg";
import phone from "../../../assets/main/step7/phone.svg";
import hand from "../../../assets/main/step8/hand.png";
import Ellipses from "../../../components/UI/Ellipses";
import TgNickname from "../../../components/UI/TgNickname";
import {useTelegram} from "../../../hooks/useTelegram";
import BlueText from "../../../components/UI/BlueText";
import MyButton from "../../../components/UI/MyButton";
import {WHITE45} from "../../../utils/colors";

const Step8 = ({goToStep}) => {
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
                <div style={{fontSize: 28, fontWeight: 600}}>
                    Чем можем помочь?
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
                <div style={{display: "flex", marginBottom: 10}}>
                    <MyButton style={{color: "black", width: "100%", backgroundColor: WHITE45, textAlign: "center", marginRight: 5, paddingTop: 0, paddingBottom: 0}}>
                        <div>
                            Служба заботы <br/><BlueText>приветствует вас!</BlueText>
                        </div>
                    </MyButton>
                    <MyButton style={{width: "100%", backgroundColor: WHITE45, padding: 0, marginLeft: 5}}>
                        <img src={hand} alt={'hand'} width={130}/>
                    </MyButton>
                </div>
                <div style={{display: "flex", marginBottom: 10}}>
                    <MyButton style={{width: "100%", marginRight: 5, backgroundColor: WHITE45}} onClick={() => goToStep(2)}>
                        Что такое WebApp?
                    </MyButton>
                    <MyButton style={{width: "100%", marginLeft: 5, backgroundColor: WHITE45}}>
                        Я люблю Telegram
                    </MyButton>
                </div>
                <MyButton style={{backgroundColor: WHITE45, marginBottom: 10}} onClick={() => goToStep(4)}>
                    Для какого бизнеса WebApp?
                </MyButton>
                <div style={{display: "flex", marginBottom: 5}}>
                    <MyButton style={{width: "100%", marginRight: 5}} onClick={() => goToStep(7)}>
                        Хочу разработку!
                    </MyButton>
                    <MyButton style={{width: "100%", marginLeft: 5, backgroundColor: WHITE45}} onClick={() => goToStep(5)}>
                        Интеграции с CRM?
                    </MyButton>
                </div>
                <Ellipses/>
                <div style={{fontSize: 16, fontWeight: 600, textAlign: "center", color: "white", marginBottom: 5}}>
                    Есть вопросы? Свяжитесь с нами:
                </div>
                <div style={{display: "flex", justifyContent: "center", marginBottom: 40}}>
                    <ContactButton img={tg}/>
                    <ContactButton img={wa}/>
                    <ContactButton img={phone}/>
                </div>
            </div>
        </div>
    );
};

export default Step8;