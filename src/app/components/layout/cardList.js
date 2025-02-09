import Link from "next/link";
import { BaseTag, TopTag } from "../content/tag";
import { CMS_URL } from "@/config";
import Image from 'next/image';

export function CardList({ cards }) {
    return (
        <div className='Collection-container w-full'>
            <div className="Collection m-auto w-full columns-sm gap-[20px] transition delay-150 duration-200 ease-in-out">
                {
                    cards?.map(cardData => {
                        const card = cardData
                        console.log(cardData)
                        const thumb = card.thumb
                        const tagsData = card.tags
                        return (
                            <div className="group Card w-full min-w-[320px]" key={card.id}>
                                <Link className="block" href={card.link ?? "#"} target="_blank">
                                    <div className="mb-[20px] flex flex-col overflow-hidden box-content">
                                        <div className="flex flex-row gap-[0px]">
                                            {
                                                tagsData?.map(tagData => {
                                                    const tag = tagData
                                                    const specialTags = ["работа", "вдохновение", "обучение"];
                                                    if (specialTags.includes(tag.name)) {
                                                        return <TopTag key={tagData.id} tagType={tag.name}>{tag.name}</TopTag>;
                                                    }
                                                    return null;
                                                })
                                            }
                                        </div>
                                        <div
                                            className="h-full h-min-[290px] h-max-[560px] overflow-hidden"
                                            style={{ clipPath: "polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)" }}
                                        >
                                            {
                                                thumb.mime.includes("video") ? <video
                                                    src={CMS_URL + thumb.url}
                                                    className="object-cover h-full h-min-[290px] h-max-[560px] w-full group-hover:scale-[1.16] duration-300"
                                                    playsInline
                                                    autoPlay
                                                    muted
                                                    loop
                                                />
                                                    :
                                                    <Image
                                                        src={CMS_URL + thumb.url}
                                                        width={500}
                                                        height={500}
                                                        alt={card.title}
                                                        className="object-cover h-full h-min-[290px] h-max-[560px] w-full group-hover:scale-[1.16] duration-300"
                                                    />
                                            }

                                        </div>
                                        <div className="p-[20px] pb-[24px] bg-white flex flex-col gap-[20px]">
                                            <div className="flex flex-col gap-[16px]">
                                                <div className="font-custom text-black text-[22px] leading-none font-bold">{card.title} </div>
                                                <p className="font-custom font-light text-[20px] leading-snug text-black">{card.description}</p>
                                            </div>
                                            <div className="flex gap-[12px] flex-wrap">
                                                {
                                                    tagsData?.map(tagData => {
                                                        const tag = tagData
                                                        const specialTags = ["работа", "вдохновение", "обучение"];
                                                        if (!specialTags.includes(tag.name)) {
                                                            return <BaseTag key={tagData.id}>{tag.name}</BaseTag>;
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

// grid grid-cols-2 md:grid-cols-4

// const data = await fetch(CMS_URL + "/api/kartochkas?populate=tags,thumb", { cache: 'no-store' });
// no-store убрать
// const json = await data.json()
// const cards = json.data