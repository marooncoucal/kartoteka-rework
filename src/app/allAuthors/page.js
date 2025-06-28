import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { SearchBar } from "../components/layout/search";
import { BaseTag, TopTag } from "../components/content/tag";

export const cardDataAuthors = [
    {
        id: 1,
        link: '/alenaKukushkina',
        image: '/img/alenaKukushkina/portrait2.jpg',
        title: `Алена Кукушкина`,
        description: 'Алёна Кукушкина, куратор креативных проектов, продюсер, консультант в области бизнес-коммуникации и искусства презентации, автор курсов «Публичные выступления», «Визуальный сторителлинг», «Управление в сфере современного искусства» в Институте бизнеса и дизайна B&D.',
        tags: [`моушен-дизайн`, `продюсирование`]
    },
    {
        id: 2,
        link: '/marinaDruzhinina',
        image: '/img/druzhinina/portrait1.jpg',
        title: `Мария Дружинина`,
        description: 'Преподаватель дисциплин «Шрифт», «Типографика». Графический дизайнер и иллюстратор. Член Союза Дизайнеров России. Ведущий графический дизайнер студии «Паратайп».',
        tags: [`графический дизайн`, `иллюстрация`]
    },
]

export default function AllAuthorsPage() {
    return (
        <div className="w-full pt-[2rem] flex flex-col justify-center items-center">
            <div className='TopContainer w-full max-w-[1400px] px-[1rem] desktop:px-[0rem] gap-[3rem] flex flex-col'>
                <div className="select-none">
                    <Suspense fallback={<div className="flex justify-center items-center h-[100px]">Загрузка...</div>}>
                        <SearchBar />
                    </Suspense>
                </div>
                <div className="flex flex-col gap-[16px] 690w:flex-row 690w:justify-between">
                    <Link href="/podborki">
                        <div className={`flex items-center justify-center gap-[4px] pb-[2px] h-[30px] px-[16px] max-w-[120px] mt-[-1px] border-solid border-black border-[1px] bg-custom-white select-none`}>
                            <div className="mt-[1.6px]">
                                <Image
                                    src="/icons/arrow_left.svg"
                                    height={12}
                                    width={12}
                                    alt="arrow left icon"
                                />
                            </div>
                            <div className="Text text-[16px] leading-none whitespace-nowrap">обратно</div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="AllRecsTextContainer flex flex-col gap-[4px] mt-[3rem] w-full max-w-[1400px] px-[1rem] desktop:px-[0rem]">
                <div className="Text text-[32px] text-black font-bold">Авторы</div>
                <div className="Text text-[20px] leading-[24px]"> Все авторы подборок&#160;– от&#160;профессионалов до&#160;студий</div>
            </div>
            <div className="Collection-container mt-[3rem] w-full max-w-[1400px] px-[1rem] desktop:px-[0rem] ">
                <CardListAuthors cards={cardDataAuthors} />
            </div>
        </div>
    )
}

function CardListAuthors({ cards }) {
    return (
        <div className='flex flex-row flex-wrap gap-[20px] columns-3xs md:columns-md'>
            {
                cards?.map(cardData => {
                    const card = cardData
                    const thumb = card.image
                    const tagsData = card.tags
                    return (
                        <div className="groupCard min-w-[320px] w-full 690w:flex-1 690w:max-w-[400px]" key={card.id}>
                            <Link className="block" href={card.link ?? "#"} >
                                <div className="mb-[20px] flex flex-col overflow-hidden box-content w-full">
                                    {/* <div className="TopTagsContainer flex flex-row pr-[50px]">
                                            {
                                                tagsData?.filter(tagData => {
                                                    const specialTags = ["для работы", "для вдохновения", "для обучения"];
                                                    return specialTags.includes(tagData);
                                                }).map((tagData, idx) => (
                                                    <TopTag
                                                        key={tagData}
                                                        tagType={tagData}
                                                        marginNegative={idx !== 0 ? "6XS:-ml-[54px] 425w:-ml-[0px] 690w:-ml-[54px] 820w:-ml-[0px]" : ""}
                                                    >
                                                        {tagData}
                                                    </TopTag>
                                                ))
                                            }
                                        </div> */}
                                    <div className="ThumbContainer h-full h-min-[290px] h-max-[400px] aspect-square overflow-hidden"
                                    // style={{ clipPath: "polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)" }}
                                    >
                                        <Image
                                            src={thumb}
                                            width={500}
                                            height={500}
                                            alt={card.title}
                                            className="object-cover h-full h-min-[290px] h-max-[560px] w-full group-hover:scale-[1.16] duration-300"
                                        />
                                    </div>
                                    <div className="CardInfoContainer p-[20px] pb-[24px] bg-white flex flex-col gap-[20px]">
                                        <div className="TitleDescContainer flex flex-col gap-[16px]">
                                            <div className="Title font-custom text-black text-[22px] leading-none font-bold">{card.title} </div>
                                            <p className="Description font-custom font-light text-[20px] leading-snug text-black">{card.description}</p>
                                        </div>
                                        <div className="TagsContainer flex gap-[12px] flex-wrap">
                                            {
                                                tagsData?.map(tag => {
                                                    const specialTags = ["для работы", "для вдохновения", "для обучения"];
                                                    if (!specialTags.includes(tag)) {
                                                        return <BaseTag key={tag}>{tag}</BaseTag>;
                                                    }
                                                    return null;
                                                })
                                            }
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
    )
}