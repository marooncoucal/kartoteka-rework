"use client"

import Image from "next/image";
import { HeroSearch, SearchBar } from "../components/layout/search";
import Link from "next/link";
import { BaseTag } from "../components/content/tag";
import { useEffect, useRef } from "react";

const cardData = [
    {
        id: 1,
        link: 'https://www.awwwards.com/',
        image: '/img/awards.png',
        title: 'Awwwards',
        text: 'Сайт, публикующий интересные сайты, направлен на продвижение лучших инновационных разработок в вебе',
        tags: ['веб-дизайн', 'сайт']
    },
    {
        id: 2,
        link: 'https://cantunsee.space/',
        image: '/img/unsee.png',
        title: `Can't Unsee`,
        text: 'Игра для дизайнеров для проверки знаний в дизайне интерфейсов',
        tags: ['веб-дизайн', 'игра']
    },
    {
        id: 3,
        link: 'https://hydra.ojack.xyz/',
        image: '/img/hydra.png',
        title: 'Hydra: Live Coding Visuals',
        text: 'Среда кодирования с возможностью изменения кода в реальном времени, которая запускается непосредственно в браузере.',
        tags: ['код', 'анимация', 'синтезатор', 'видео']
    },
    {
        id: 4,
        link: 'https://www.wiley.com/en-gb/About+Face%3A+The+Essentials+of+Interaction+Design%2C+4th+Edition-p-9781118766583',
        image: '/img/aboutface.png',
        title: 'Об интерфейсах: основы интерактивного дизайна',
        text: 'Книга про интерактивный дизайн, продолжает лидировать в идеях и методах для практиков дизайна и разработчиков.',
        tags: ['обучение', 'текст', 'книга', 'веб-дизайн']
    },
    {
        id: 5,
        link: 'https://deadsign.ru/workflow/webs_lost_soul/',
        image: '/img/space.png',
        title: 'Куда пропала душа веба?',
        text: 'Статья про тренды в вебе и поиск причин одинаковости сайтов',
        tags: ['обучение', 'текст', 'статья', 'веб-дизайн']
    },
    {
        id: 6,
        link: 'https://www.awwwards.com/',
        image: '/img/awards.png',
        title: 'Awwwards',
        text: 'Сайт, публикующий интересные сайты, направлен на продвижение лучших инновационных разработок в вебе',
        tags: ['веб-дизайн', 'сайт']
    },
    {
        id: 7,
        link: 'https://cantunsee.space/',
        image: '/img/unsee.png',
        title: `Can't Unsee`,
        text: 'Игра для дизайнеров для проверки знаний в дизайне интерфейсов',
        tags: ['веб-дизайн', 'игра']
    },
    {
        id: 8,
        link: 'https://hydra.ojack.xyz/',
        image: '/img/hydra.png',
        title: 'Hydra: Live Coding Visuals',
        text: 'Среда кодирования с возможностью изменения кода в реальном времени, которая запускается непосредственно в браузере.',
        tags: ['код', 'анимация', 'синтезатор', 'видео']
    },
    {
        id: 9,
        link: 'https://www.wiley.com/en-gb/About+Face%3A+The+Essentials+of+Interaction+Design%2C+4th+Edition-p-9781118766583',
        image: '/img/aboutface.png',
        title: 'Об интерфейсах: основы интерактивного дизайна',
        text: 'Книга про интерактивный дизайн, продолжает лидировать в идеях и методах для практиков дизайна и разработчиков.',
        tags: ['обучение', 'текст', 'книга', 'веб-дизайн']
    },
]

export default function Podborki() {

    const scrollRef = useRef(null);
    const CARD_WIDTH = 453;
    const CARD_GAP = 20;

    const scrollByCard = (direction) => {
        const el = scrollRef.current;
        if (!el) return;
        const scrollAmount = CARD_WIDTH + CARD_GAP;
        el.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
    };
    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        const onWheel = (e) => {
            if (e.deltaY === 0) return;
            e.preventDefault();
            el.scrollLeft += e.deltaY;
        };
        el.addEventListener("wheel", onWheel, { passive: false });
        return () => el.removeEventListener("wheel", onWheel);
    }, []);

    return (
        <div className="w-full pt-[2rem] flex flex-col justify-center items-center">
            <div className='w-full max-w-[1400px] px-[1rem] desktop:px-[0rem] gap-[3rem] flex flex-col'>
                <SearchBar />
                <div className="flex flex-row justify-between">
                    <Chip>все авторы</Chip>
                    <div className="flex flex-row gap-[16px]">
                        <Chip>сфера</Chip>
                        <Chip>авторы А-Я</Chip>
                    </div>
                </div>
                {/* <RecsWeekHeader /> */}
            </div>
            {/* <div className='Card-section w-full px-[1rem] desktop:px-[0rem] mt-[4rem] gap-[2rem] flex flex-col'> </div> */}
            <div className="RecsWeekHeader flex flex-col gap-[16px] sm:gap-[0px] mt-[4rem] w-full max-w-[1400px] px-[1rem] desktop:px-[0rem]">
                <div className="Text text-[32px] text-black font-bold leading-none whitespace-nowrap">Подборка недели</div>
                <div className="flex flex-row justify-between items-end gap-[8px]">
                    <div className="Text text-[16px] leading-none">Подборка недели&#160;&#8212; свежий взгляд от&#160;тех, кто&#160;нас&#160;вдохновляет.</div>
                    <div className="flex flex-row gap-[16px]">
                        <div onClick={() => scrollByCard(-1)} className="arrowLeft cursor-pointer flex justify-center items-center w-[36px] h-[36px] border-solid border-black border-[1px]">
                            <Image
                                src="/icons/arrow_left.svg"
                                height={16}
                                width={16}
                                alt="arrow left icon"
                            />
                        </div>
                        <div onClick={() => scrollByCard(1)} className="arrowRight cursor-pointer flex justify-center items-center w-[36px] h-[36px] border-solid border-black border-[1px]">
                            <Image
                                src="/icons/arrow_right.svg"
                                height={16}
                                width={16}
                                alt="arrow right icon"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div ref={scrollRef} className="CardScroll flex flex-row flex-nowrap gap-[20px] mt-[2rem] 
            w-full max-w-[1400px] px-[1rem] desktop:px-[0rem]
            scrollbar-hide w-full overflow-x-auto
            "
            >
                <CardList cards={cardData} />
            </div>
        </div>
    )
}


function RecsWeekHeader() {
    return (
        <div className="flex flex-col gap-[8px] sm:gap-[0px]">
            <div className="Text text-[32px] text-black font-bold leading-none whitespace-nowrap">Подборка недели</div>
            <div className="flex flex-row justify-between items-end">
                <div className="Text text-[16px] leading-none">Подборка недели&#160;&#8212; свежий взгляд от&#160;тех, кто&#160;нас&#160;вдохновляет.</div>
                <div className="flex flex-row gap-[16px]">
                    <div className="flex justify-center items-center w-[30px] h-[30px] border-solid border-black border-[1px]">
                        <Image
                            src="/icons/arrow_left.svg"
                            height={14}
                            width={14}
                            alt="arrow left icon"
                        />
                    </div>
                    <div className="flex justify-center items-center w-[30px] h-[30px] border-solid border-black border-[1px]">
                        <Image
                            src="/icons/arrow_right.svg"
                            height={14}
                            width={14}
                            alt="arrow right icon"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

function Chip({ children }) {
    return (
        <div className={`
                    leading-none text-[16px] font-custom text-black
                    px-[16px] pb-[2px] h-[30px]
                    justify-center items-center flex gap-[8px]
                    select-none cursor-pointer
                    border-solid border-black border-[1px]
                    `} >
            <div className="Text text-[16px] leading-none whitespace-nowrap">{children}</div>
            <div className="mt-[4px]">
                <Image
                    src="/icons/arrow_down.svg"
                    height={14}
                    width={14}
                    alt="arrow down icon"
                />
            </div>
        </div>
    )
}

function CardList({ cards }) {
    return (
        <div className='Collection-container'>
            <div className="Collection m-auto gap-[20px] flex -flex-row">
                {
                    cards?.map(cardData => {
                        const card = cardData
                        const thumb = card.image
                        const tagsData = card.tags
                        return (
                            <div className="groupCard w-[453px]" key={card.id}>
                                <Link className="block" href={card.link ?? "#"} target="_blank">
                                    <div className="mb-[20px] flex flex-col overflow-hidden box-content">
                                        <div className="h-[200px] overflow-hidden">
                                            <Image
                                                src={thumb}
                                                width={500}
                                                height={500}
                                                alt={card.title}
                                                className="object-cover h-min-[100px] w-full h-[200px] group-hover:scale-[1.1] duration-300"
                                            />
                                        </div>
                                        <div className="txtCard p-[16px] bg-white flex flex-col gap-[16px]">
                                            <div className="Heading font-custom text-black text-[20px] font-bold uppercase">
                                                {card.title}
                                            </div>
                                            <div className="flex gap-[8px] flex-wrap">
                                                {
                                                    tagsData?.map(tagData => {
                                                        const tag = tagData
                                                        return (
                                                            <BaseTag key={tagData.id}>{tag.name}</BaseTag>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className=" font-custom text-dark-grey text-[16px] font-medium">
                                                <p className="">{card.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}