import { Suspense } from "react";
import { SearchBar } from "../components/layout/search";
import Link from "next/link";
import Image from "next/image";
import { BaseTag } from "../components/content/tag";
import { cardDataAuthors } from '../allAuthors/page';
import { cardData3 } from "../components/content/cardDataVault";
import AuthorRecomendedScroll from "../components/layout/authorRecomendedScroll";

export default function AuthorPageMarina() {
    const cardData = cardDataAuthors.find(card => card.id === 2);
    return (
        <div className="w-full pt-[2rem] flex flex-col justify-center items-center">
            <div className='TopContainer w-full max-w-[1400px] px-[1rem] desktop:px-[0rem] gap-[3rem] flex flex-col'>
                <div className="select-none">
                    <Suspense fallback={<div className="flex justify-center items-center h-[100px]">Загрузка...</div>}>
                        <SearchBar />
                    </Suspense>
                </div>
                <div className="flex flex-col gap-[16px] 690w:flex-row 690w:justify-between">
                    <Link href="/allAuthors">
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
            <div className="flex flex-col 820w:flex-row gap-[16px] 820w:gap-[64px] 3cols:gap-[128px] justify-between mt-[3rem] w-full max-w-[1400px] px-[1rem] desktop:px-[0rem] ">
                <div className="flex flex-col gap-[8px]">
                    <div className="ThumbContainer flex items-center h-[400px] w-full 3cols:max-w-[500px] aspect-[5/4] overflow-hidden">
                        <Image src={cardData.image} alt="Алена Кукушкина" width={500} height={400} />
                    </div>
                    <div className="CardInfoContainer flex flex-row gap-[20px]">
                        <BaseTag>{cardData.tags[0]}</BaseTag>
                        <BaseTag>{cardData.tags[1]}</BaseTag>
                    </div>
                </div>
                <div className="flex flex-col gap-[4px] w-full max-w-[766px]">
                    <div className="Text text-[32px] text-black font-bold">{cardData.title}</div>
                    <div className="Text text-[20px] leading-[24px]">{cardData.description}</div>
                </div>
            </div>
            <div className="AllRecsTextContainer flex flex-col gap-[4px] mt-[6rem] w-full max-w-[1400px] px-[1rem] desktop:px-[0rem]">
                <div className="Text text-[32px] text-black font-bold">Подборки автора</div>
            </div>
            {/* <AuthorRecomendedScroll cardData={cardData3}
                link={`/marinaDruzhinina`}
                header={'Подборка дизайн студий от Марии Дружининой'}
                author={'Мария Дружинина. Член Союза Дизайнеров России. Ведущий графический дизайнер студии «Паратайп» '}
                description={`В современном мире дизайна важно быть в курсе последних трендов и вдохновения. Мария собрала подборку сайтов студий и дизайнеров, которые задают тон в индустрии и могут стать отличным источником идей и мотивации для студентов. `}
            /> */}
        </div>
    );
}