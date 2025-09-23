"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BaseTag, TopTag } from "../content/tag";

export function CardListScroll({ cards }) {
    return (
        <div className='Collection-container'>
            <div className="Collection m-auto gap-[20px] flex -flex-row">
                {
                    cards?.map(cardData => {
                        const card = cardData
                        const thumb = card.image
                        const tagsData = card.tags
                        return (
                            <div className="groupCard 820w:w-[453px] 425w:w-[360px] w-[310px]" key={card.id}>
                                <Link className="block" href={card.link ?? "#"} target="_blank">
                                    <div className="mb-[20px] flex flex-col overflow-hidden box-content">
                                        <div className="TopTagsContainer flex flex-row pr-[50px]">
                                            {
                                                tagsData?.filter(tagData => {
                                                    const specialTags = ["для работы", "для вдохновения", "для обучения"];
                                                    return specialTags.includes(tagData);
                                                }).map((tagData, idx) => (
                                                    <TopTag
                                                        key={tagData}
                                                        tagType={tagData}
                                                        marginNegative={idx !== 0 ? "6XS:-ml-[64px] 425w:-ml-[14px] 690w:-ml-[14px] 820w:-ml-[0px]" : ""}
                                                    >
                                                        {tagData}
                                                    </TopTag>
                                                ))
                                            }
                                        </div>
                                        <div className="ThumbContainer h-full h-min-[290px] h-max-[560px] overflow-hidden"
                                            style={{ clipPath: "polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)" }}
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
        </div>
    )
}