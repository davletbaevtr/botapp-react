import React from 'react';
import BlueText from "../../../components/UI/BlueText";
import crm from '../../../assets/main/step5/crm.svg'
import gosuslugi from '../../../assets/main/step5/gosuslugi.svg'
import ozon from '../../../assets/main/step5/ozon.svg'
import bitrix from '../../../assets/main/step5/bitrix.svg'
import onec from '../../../assets/main/step5/onec.svg'
import mount from '../../../assets/main/step5/mount.svg'
import wb from '../../../assets/main/step5/wb.svg'
import coinmarketcap from '../../../assets/main/step5/coinmarketcap.svg'
import MyButton from "../../../components/UI/MyButton";
import {WHITE, WHITE45} from "../../../utils/colors";
import PartnerCard from "../../../components/UI/PartnerCard";

const Step5 = ({goToStep}) => {
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
                justifyContent: "center",
                height: "40%",
            }}>
                <div style={{fontSize: 28, fontWeight: 600, marginBottom: 5}}>
                    Все, что захотите!
                </div>
                <div style={{fontSize: 16, fontWeight: 400}}>
                    <div>
                        может <BlueText>автоматизировать</BlueText> любые
                    </div>

                    <div>
                        <BlueText>бизнес-процессы</BlueText> вашей компании
                    </div>
                </div>
            </div>

            <div style={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                position: "relative",
                paddingTop: 10,
                justifyContent: "space-between",
                height: "100%",
            }}>
                <div>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        overflow: "hidden",
                        marginBottom: 10
                    }}>
                        <PartnerCard img={crm} margin={'0 10px 0 0'}/>
                        <PartnerCard img={gosuslugi} margin={'0 10px 0 0'}/>
                        <PartnerCard img={onec} margin={'0 10px 0 0'}/>
                        <PartnerCard img={mount} margin={'0 10px 0 0'}/>
                    </div>
                    <div style={{display: "flex", justifyContent: "right", overflow: "hidden"}}>
                        <PartnerCard img={wb} margin={'0 0 0 10px'}/>
                        <PartnerCard img={bitrix} margin={'0 0 0 10px'}/>
                        <PartnerCard img={coinmarketcap} margin={'0 0 0 10px'}/>
                        <PartnerCard img={ozon} margin={'0 0 0 10px'}/>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <MyButton
                        style={{zIndex: 2, marginTop: 10}}
                        onClick={() => goToStep(6)}
                    >
                        И какая стоимость?
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

export default Step5;