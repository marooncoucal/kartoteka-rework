import Link from "next/link";
import { BaseTag, TopTag } from "../content/tag";
import { CMS_URL } from "@/config";
import Image from 'next/image';

export function CardList({ cards }) {

    const firstColumn = cards.filter((_, index) => index % 3 === 0);
    const secondColumn = cards.filter((_, index) => index % 3 === 1);
    const thirdColumn = cards.filter((_, index) => index % 3 === 2);

    return (
        <div className='Collection-container w-full'>
            <div className="Collection m-auto w-full grid grid-cols-1 2cols:grid-cols-2 3cols:grid-cols-3 gap-[20px] transition delay-150 duration-200 ease-in-out">
                <div>{firstColumn?.map(cardData => <CardListItem cardData={cardData} key={cardData.id} />)}</div>
                <div>{secondColumn?.map(cardData => <CardListItem cardData={cardData} key={cardData.id} />)}</div>
                <div>{thirdColumn?.map(cardData => <CardListItem cardData={cardData} key={cardData.id} />)}</div>
            </div>
        </div>
    )
}


export function CardListItem({ cardData }) {
    const card = cardData
    const thumb = card.thumb
    const tagsData = card.tags
    // const cardIndex = card.documentId
    // console.log(cardIndex)
    return (
        <div className="group Card w-full min-w-[320px]">
            <Link className="block" href={card.link ?? "#"} target="_blank">
                <div className="mb-[20px] flex flex-col overflow-hidden box-content">
                    <div className="flex flex-row pr-[50px]">
                        {
                            tagsData?.filter(tagData => {
                                const specialTags = ["для работы", "для вдохновения", "для обучения"];
                                return specialTags.includes(tagData.name);
                            }).map((tagData, idx) => (
                                <TopTag
                                    key={tagData.id}
                                    tagType={tagData.name}
                                    marginNegative={idx !== 0 ? "6XS:-ml-[54px] 425w:-ml-[0px] 690w:-ml-[54px] 820w:-ml-[0px]" : ""}
                                >
                                    {tagData.name}
                                </TopTag>
                            ))
                        }
                        {/* {
                            tagsData?.map(tagData => {
                                const tag = tagData
                                const specialTags = ["для работы", "для вдохновения", "для обучения"];
                                if (specialTags.includes(tag.name)) {
                                    return <TopTag key={tagData.id} tagType={tag.name}>{tag.name}</TopTag>;
                                }
                                return null;
                            })
                        } */}
                    </div>
                    <div
                        className="h-full h-min-[290px] h-max-[560px] overflow-hidden"
                        style={{ clipPath: "polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)" }}
                    >
                        {
                            thumb.mime.includes("video")
                                ? <video
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

// grid grid-cols-2 md:grid-cols-4

// const data = await fetch(CMS_URL + "/api/kartochkas?populate=tags,thumb", { cache: 'no-store' });
// no-store убрать
// const json = await data.json()
// const cards = json.data