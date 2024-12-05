import Link from "next/link";
import { BaseTag } from "../content/tag";
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
                                        <div className="flex flex-row">
                                            <div className="bg-teal-500 pl-4 pr-[40px] py-1 text-white" style={{ clipPath: "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)" }}>для обучения</div>
                                            <div className="bg-red-500 pl-4 pr-[40px] py-1 text-white" style={{ clipPath: "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)", transform: "translateX(-0px)" }}>для работы</div>
                                        </div>
                                        <div className="h-[260px] overflow-hidden" style={{ clipPath: "polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)" }}>
                                            <Image
                                                src={CMS_URL + thumb.url}
                                                width={500}
                                                height={500}
                                                alt={card.title}
                                                className="object-cover h-min-[100px] w-full h-full group-hover:scale-[1.16] duration-300"
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

// grid grid-cols-2 md:grid-cols-4

// const data = await fetch(CMS_URL + "/api/kartochkas?populate=tags,thumb", { cache: 'no-store' });
// no-store убрать
// const json = await data.json()
// const cards = json.data