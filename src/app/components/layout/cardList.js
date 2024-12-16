import Link from "next/link";
import { BaseTag, TopTag } from "../content/tag";
import { CMS_URL } from "@/config";
import Image from 'next/image';

export function CardList({ cards }) {
    return (
        <div className='Collection-container w-full'>
            <div className="Collection m-auto w-full columns-3xs xl:columns-3 gap-[20px]">
                {
                    cards?.map(cardData => {
                        const card = cardData
                        console.log(cardData)
                        const thumb = card.thumb
                        const tagsData = card.tags
                        return (
                            <div className="group Card" key={card.id}>
                                <Link className="block" href={card.link ?? "#"} target="_blank">
                                    <div className="mb-[20px] flex flex-col overflow-hidden box-content">
                                        <div className="flex flex-row gap-[0px]">
                                            {
                                                tagsData?.map(tagData => {
                                                    const tag = tagData
                                                    const specialTags = ["для работы", "для вдохновения", "для обучения"];
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
                                            <Image
                                                src={CMS_URL + thumb.url}
                                                width={500}
                                                height={500}
                                                alt={card.title}
                                                className="object-cover h-full h-min-[290px] h-max-[560px] w-full group-hover:scale-[1.16] duration-300"
                                            />
                                        </div>
                                        <div className="p-[20px] bg-white flex flex-col gap-[16px]">
                                            <div className="flex flex-col gap-[10px]">
                                                <div className="font-custom text-black text-[22px] leading-none font-bold">{card.title} </div>
                                                <p className="font-custom font-light text-[20px] leading-snug text-dark-grey">{card.description}</p>
                                            </div>
                                            <div className="flex gap-[8px] flex-wrap">
                                                {
                                                    tagsData?.map(tagData => {
                                                        const tag = tagData
                                                        const specialTags = ["для работы", "для вдохновения", "для обучения"];
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