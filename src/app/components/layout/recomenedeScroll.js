"use client"

import Link from "next/link";
import { useRef, useState } from "react";
import ArrowsLeftRight from "../content/arrowsLeftRight";
import { CardListScroll } from "../content/cardListHorizontalScroll";

export default function RecomendedScroll({ variant, bigHeader, bigHeaderDesc, smallHeader, author, description, link, cardData }) {

    // открывашка описания к подборке
    const [openDescription, setOpenDescription] = useState(false);

    // скролл карточек
    const scroll_Cards_Ref = useRef(null);

    return (
        <div className="w-full flex flex-col justify-center items-center">
            {
                variant === 2 ? (
                    <div className="flex flex-col mt-[3rem] w-full max-w-[1400px]">
                        <div className="RecsHeaderContainer flex flex-col gap-[16px] px-[1rem] desktop:px-[0rem]">
                            <div className="TopRecsContainer flex flex-col gap-[8px]">
                                <div className="BigHeader text-[32px] text-black font-bold leading-none whitespace-nowrap">{bigHeader}</div>
                                <div className="TextAndArrowsContainer flex flex-row justify-between items-end gap-[32px]">
                                    {/* <div className="SmallHeader text-[22px] text-black font-bold leading-none">{smallHeader}</div> */}
                                    <div className="BigHeaderDesc align-bottom text-[20px] leading-[24px]">{bigHeaderDesc}</div>
                                    <ArrowsLeftRight width={453} gap={20} refScroll={scroll_Cards_Ref}/>
                                </div>
                            </div>
                            {/* <div className="AuthorDescContainer flex flex-col gap-[8px]">
                                    <div className="AuthorContainer flex flex-row gap-[6px]">
                                //         <div className="text-black font-bold text-[18px] whitespace-nowrap">Автор подборки:</div>
                                //         <div className="Author text-black text-[18px] underline">{author}</div>
                                    </div>
                                    <div className="Description text-black text-[18px] font-light">{description}</div>
                                </div> */}
                        </div>
                        <div ref={scroll_Cards_Ref} className="CardScroll flex flex-row flex-nowrap gap-[20px] mt-[2rem] px-[1rem] desktop:px-[0rem] scrollbar-hide w-full overflow-x-auto">
                            <CardListScroll cards={cardData} />
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col gap-[16px] mt-[3rem] desktop:mt-[6rem] w-full max-w-[1400px]">
                        <div className="RecsHeaderContainer flex flex-col gap-[16px] px-[1rem] desktop:px-[0rem]">
                            <div className="TopRecsContainer flex flex-col gap-[8px]">
                                <div className="BigHeader text-[32px] text-black font-bold leading-none whitespace-nowrap">{bigHeader}</div>
                                <div className="TextAndArrowsContainer flex flex-row justify-between items-start gap-[32px]">
                                    <div className="SmallHeader text-[22px] text-black font-bold leading-none">{smallHeader}</div>
                                    {/* <div className="BigHeaderDesc align-bottom text-[20px] leading-none">{bigHeaderDesc}</div> */}
                                    <ArrowsLeftRight width={453} gap={20} refScroll={scroll_Cards_Ref}/>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[8px]">
                                <div className="AuthorContainer flex flex-row gap-[6px]">
                                    <div className="text-black font-bold text-[18px] whitespace-nowrap">Автор подборки:</div>
                                    <Link href={link ?? "#"}>
                                        <div className="Author text-black text-[18px] leading-[22px] underline">{author}</div>
                                    </Link>
                                </div>
                                <div onClick={() => setOpenDescription(!openDescription)}>
                                    {
                                        openDescription ? (
                                            <div className="Description text-black text-[18px] font-light">{description}</div>
                                        ) : (
                                            <div className="Description text-black text-[18px] font-light line-clamp-4">{description}</div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <div ref={scroll_Cards_Ref} className="CardScroll flex flex-row flex-nowrap gap-[20px] mt-[2rem] px-[1rem] desktop:px-[0rem] scrollbar-hide overflow-x-auto">
                            <CardListScroll cards={cardData} />
                        </div>
                    </div>
                )

            }
        </div>
    )
}