"use client"

import { SearchBar } from "../components/layout/search";
import RecomendedScroll from "../components/layout/recomenedeScroll";
import { Suspense, useState } from "react";
import ChipDrop from "../components/content/chipDropdown";
import { cardData1, cardData2, cardData3 } from "../components/content/cardDataVault";
import Link from "next/link";
import WeekRecomendedScroll from "../components/layout/weekRecomendedScroll";

export default function Podborki() {
    const [selectedItem1, setSelectedItem1] = useState("все сферы");
    const [selectedItem2, setSelectedItem2] = useState("авторы А-Я");
    return (
        <div className="w-full pt-[2rem] flex flex-col justify-center items-center">
            <div className='w-full max-w-[1400px] px-[1rem] desktop:px-[0rem] gap-[3rem] flex flex-col'>
                <div className="select-none">
                    <Suspense fallback={<div className="flex justify-center items-center h-[100px]">Загрузка...</div>}>
                        <SearchBar />
                    </Suspense>
                </div>
                <div className="flex flex-col gap-[16px] 690w:flex-row 690w:justify-between">
                    <Link href="/allAuthors">
                        <div className={`flex items-center px-[16px] pb-[2px] h-[30px] max-w-[120px] mt-[-1px] border-solid border-black border-[1px] bg-custom-white select-none`}>
                            <div className="Text text-[16px] leading-none whitespace-nowrap">все авторы</div>
                        </div>
                    </Link>
                    <div className="flex flex-row flex-wrap gap-[16px]">
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
            <WeekRecomendedScroll cardData={cardData1}
                bigHeader={'Подборка недели'}
                bigHeaderDesc={'Подборка недели: свежий взгляд от тех, кто нас вдохновляет.'}
            />
            <div className="AllRecsTextContainer gap-[12px] flex flex-col mt-[6rem] mb-[2rem] w-full max-w-[1400px] px-[1rem] desktop:px-[0rem]">
                <div className="Text text-[32px] leading-[36px] text-black font-bold">Все авторские подборки</div>
                <div className="Text text-[20px] leading-[24px]">Ищете, что почитать или посмотреть? Здесь все подборки от&#160;наших авторов.</div>
            </div>
            <RecomendedScroll cardData={cardData2}
                link={`/alenaKukushkina`}
                smallHeader={'Убедительная презентация — топ 10 книг по мнению Алёны Кукушкиной'}
                author={'Алёна Кукушкина, куратор креативных проектов, продюсер, консультант в области бизнес-коммуникации и искусства презентации'}
                description={` Убедительная презентация — это не только красивые слайды и чёткая речь, но и умение вести диалог, отвечать на вопросы, чувствовать аудиторию и адаптироваться к её запросам. Именно здесь пересекаются мастерство презентации и переговорные техники. Ведь каждая презентация — это, по сути, переговоры: вы “продаёте” идею, проект или продукт, а ваша задача — сделать так, чтобы аудитория не просто услышала, но и приняла вашу точку зрения. Поэтому глубокое понимание переговорных стратегий — это неотъемлемая часть успеха в коммуникации. Предлагаю вашему вниманию книги, которые сочетают глубокую теоретическую базу с практической применимостью. Каждая из них предлагает уникальный взгляд на переговоры, подкреплённый исследованиями, кейсами и стратегиями, которые можно использовать в реальной жизни.`}
            />
            <RecomendedScroll cardData={cardData3}
                link={`/marinaDruzhinina`}
                smallHeader={'Подборка дизайн студий от Марии Дружининой'}
                author={'Мария Дружинина. Член Союза Дизайнеров России. Ведущий графический дизайнер студии «Паратайп» '}
                description={`В современном мире дизайна важно быть в курсе последних трендов и вдохновения. Мария собрала подборку сайтов студий и дизайнеров, которые задают тон в индустрии и могут стать отличным источником идей и мотивации для студентов. `}
            />
        </div>
    )
}