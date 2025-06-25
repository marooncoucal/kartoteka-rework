"use client"

import { SearchBar } from "../components/layout/search";
import RecomendedScroll from "../components/layout/recomenedeScroll";
import { useState } from "react";
import ChipDrop from "../components/content/chipDropdown";
import { cardData1, cardData2 } from "../components/content/cardDataVault";

export default function Podborki() {
    const [selectedItem1, setSelectedItem1] = useState("все сферы");
    const [selectedItem2, setSelectedItem2] = useState("авторы А-Я");
    return (
        <div className="w-full pt-[2rem] flex flex-col justify-center items-center">
            <div className='w-full max-w-[1400px] px-[1rem] desktop:px-[0rem] gap-[3rem] flex flex-col'>
                <div className="select-none"><SearchBar /></div>
                <div className="flex flex-row justify-between">
                    <div className={`leading-none text-[16px] font-custom text-black bg-custom-white px-[16px] pb-[2px] h-[30px] items-center flex gap-[8px] border-solid border-black border-[1px] mt-[-1px] select-none`}>
                        <div className="Text text-[16px] leading-none whitespace-nowrap">все авторы</div>
                    </div>
                    <div className="flex flex-row gap-[16px]">
                        <ChipDrop items={['все сферы', 'графический дизайн', 'цифровой дизайн', 'моушен дизайн', 'гейм-дизайн', 'реклама', 'менеджемент', 'медиа комммуникации', 'дизайн среды', 'дизайн интерьера', 'дизайн костюма',]}
                            selectedItem={selectedItem1}
                            onChanged={setSelectedItem1}
                        >{selectedItem1}</ChipDrop>
                        <ChipDrop items={['авторы А-Я', 'авторы популярные', 'авторы новые']}
                            selectedItem={selectedItem2}
                            onChanged={setSelectedItem2}
                        >{selectedItem2}</ChipDrop>
                    </div>
                </div>
            </div>
            <RecomendedScroll cardData={cardData1}
                variant={2}
                bigHeader={'Подборка недели'}
                bigHeaderDesc={'Подборка недели: свежий взгляд от тех, кто нас вдохновляет.'}
            />
            <div className="AllRecsTextContainer flex flex-col gap-[16px] mt-[6rem] w-full max-w-[1400px] px-[1rem] desktop:px-[0rem]">
                <div className="Text text-[32px] text-black font-bold leading-none whitespace-nowrap">Все авторские подборки</div>
                <div className="Text text-[20px] leading-none">Ищете, что почитать или посмотреть? Здесь все подборки от&#160;наших авторов.</div>
            </div>
            <RecomendedScroll cardData={cardData2}
                smallHeader={'Топ 10 нейросетей для работы в креативной индустрии'}
                author={'Студия «Пиксель и Точка»'}
                description={'Подборка лучших быстрых решений для разработчиков и дизайнеров от студии веб-дизайна «Пиксель и Точка»Подборка лучших быстрых решений для разработчиков и дизайнеров от студии веб-дизайна «Пиксель и Точка»Подборка лучших быстрых решений для разработчиков и дизайнеров от студии веб-дизайна «Пиксель и Точка»'}
            />
        </div>
    )
}