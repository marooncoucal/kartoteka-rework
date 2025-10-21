import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { HeroSearch, SearchBar } from "../components/layout/search";
import { BaseTag, TopTag } from "../components/content/tag";

import { CMS_URL, Page_Url } from "@/config";
import ButtonRect from "../components/content/atoms/buttonRect";

const data = await fetch(CMS_URL + "/api/authors?populate[avatar]=true&populate[designareas]=true", { cache: 'no-store' });
const json = await data.json()
const authorsData = json.data

export default async function AllAuthorsPage() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className='TopContainer w-full max-w-[1400px] pt-[2rem] px-[1rem] desktop:px-[0rem] gap-[3rem] flex flex-col'>
                <HeroSearch />
                <ButtonRect link={'/podborki'} text={'обратно'} arrowLeft={true} />
            </div>
            <div className="AllRecsTextContainer flex flex-col gap-[4px] mt-[3rem] w-full max-w-[1400px] px-[1rem] desktop:px-[0rem]">
                <div className="Text text-[32px] leading-[36px] text-black font-bold">Авторы</div>
                <div className="Text text-[20px] leading-[24px]">Все авторы подборок&#160;– от&#160;профессионалов до&#160;студий</div>
            </div>
            <div className="Collection-container mt-[3rem] w-full max-w-[1400px] px-[1rem] desktop:px-[0rem] ">
                <CardListAuthors cards={authorsData} />
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
                    const areasData = card.designareas
                    // const cardLink = Page_Url + '/authorPage/' + card.slug
                    return (
                        <div className="groupCard min-w-[320px] w-full 690w:flex-1 690w:max-w-[400px]" key={card.id}>
                            <Link className="block" href={'authorPage/' + card.slug ?? "#"} passHref={true}>
                                <div className="mb-[20px] flex flex-col overflow-hidden box-content w-full">
                                    <div className="AvatarContainer h-full h-min-[290px] h-max-[400px] aspect-square overflow-hidden">
                                        <Image
                                            src={CMS_URL + cardData.avatar.url} 
                                            width={500}
                                            height={500}
                                            alt={card.name}
                                            className="object-cover h-full h-min-[290px] h-max-[560px] w-full group-hover:scale-[1.16] duration-300"
                                        />
                                    </div>
                                    <div className="CardInfoContainer p-[20px] pb-[24px] bg-white flex flex-col gap-[20px]">
                                        <div className="TitleDescContainer flex flex-col gap-[16px]">
                                            <div className="Title font-custom text-black text-[22px] leading-none font-bold">{card.name}</div>
                                            <p className="Description font-custom font-light text-[20px] leading-snug text-black">{card.description}</p>
                                        </div>
                                        <div className="TagsContainer flex gap-[12px] flex-wrap">
                                            {
                                                areasData?.map(area => {
                                                    return <BaseTag key={area.id}>{area.name}</BaseTag>;  
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