import React from 'react';
import BlueText from "../../../components/UI/BlueText";
import money from '../../../assets/main/step7/money.png'
import trofey from '../../../assets/main/step7/trofey.png'
import onemoney from '../../../assets/main/step7/onemoney.png'
import twomoney from '../../../assets/main/step7/twomoney.png'
import tg from '../../../assets/main/step7/tg.svg'
import phone from '../../../assets/main/step7/phone.svg'
import wa from '../../../assets/main/step7/wa.svg'
import Ellipses from "../../../components/UI/Ellipses";
import {WHITE45} from "../../../utils/colors";

const Step7 = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                overflow: "hidden",
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
                <div style={{display: "flex", justifyContent: "center", marginTop: 15}}>
                    <div style={{
                        backgroundColor: WHITE45,
                        borderRadius: 14,
                        width: 56,
                        height: 56,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: '0 10px 0 10px'
                    }}>
                        <img src={tg} alt={'tg'}/>
                    </div>
                    <div style={{
                        backgroundColor: WHITE45,
                        borderRadius: 14,
                        width: 56,
                        height: 56,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: '0 10px 0 10px'
                    }}>
                        <img src={wa} alt={'wa'}/>
                    </div>
                    <div style={{
                        backgroundColor: WHITE45,
                        borderRadius: 14,
                        width: 56,
                        height: 56,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: '0 10px 0 10px'
                    }}>
                        <img src={phone} alt={'phone'}/>
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
                        height={310}
                        width={'auto'}
                        style={{
                            objectFit: 'contain',
                            overflowClipMargin: 'content-box',
                            overflow: "clip",
                            zIndex: 3
                        }}
                        src={trofey} alt={'trofey'}
                    />
                </div>

                <img
                    width={46}
                    height={'auto'}
                    style={{position: "absolute", top: 0, right: 0, zIndex: 2}}
                    src={onemoney}
                    alt={'onemoney'}
                />
                <img
                    width={100}
                    height={'auto'}
                    style={{position: "absolute", top: 5, left: 0, zIndex: 2}}
                    src={twomoney}
                    alt={'twomoney'}
                />
                <img
                    width={105}
                    height={'auto'}
                    style={{position: "absolute", top: 160, right: 0, zIndex: 2}}
                    src={money}
                    alt={'money'}
                />
                <Ellipses/>
            </div>
        </div>
    );
};

export default Step7;