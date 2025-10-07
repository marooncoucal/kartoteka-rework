"use client";

import { useRef, useState } from "react";
import ArrowsLeftRight from "../content/arrowsLeftRight";
import { CardListScroll } from "../content/cardListHorizontalScroll";
import Link from "next/link";
import { BaseTag, TopTag } from "../content/tag";
import Image from "next/image";

export default function WeekRecomendedScroll({
  header,
  headerDesc,
  cardData,
}) {
  // скролл карточек
  const scroll_Cards_Ref = useRef(null);

  return (
    <div className="CenterRecsContainer w-full flex flex-col justify-center items-center">
      <div className="RecsContainer flex flex-col mt-[3rem] w-full max-w-[1400px]">
        <div className="NavRecsContainer flex flex-col gap-[8px] px-[1rem] desktop:px-[0rem]">
          <div className="Header text-[32px] text-black font-bold leading-none whitespace-nowrap">
            {header}
          </div>
          <div className="TextAndArrowsContainer flex flex-row justify-between items-end gap-[32px]">
            <div className="HeaderDesc align-bottom text-[20px] leading-[24px]">
              {headerDesc}
            </div>
            <ArrowsLeftRight width={453} gap={20} refScroll={scroll_Cards_Ref}/>
          </div>
        </div>
        <div
          ref={scroll_Cards_Ref}
          className="CardScrollRecs flex flex-row flex-nowrap gap-[20px] mt-[2rem] px-[1rem] desktop:px-[0rem] scrollbar-hide w-full overflow-x-auto"
        >
          <CardListScrollWeek cards={cardData} />
        </div>
      </div>
    </div>
  );
}

function CardListScrollWeek({ cards }) {
  return (
    <div className="Collection-container">
      <div className="Collection m-auto gap-[20px] flex -flex-row">
        {cards?.map((cardData) => {
          const card = cardData;
          const thumb = card.thumb;
          const tagsData = card.tags;
          return (
            <div
              className="groupCard 820w:w-[453px] 425w:w-[360px] w-[310px]"
              key={card.id}
            >
              <Link className="block" href={card.link ?? "#"} target="_blank">
                <div className="mb-[20px] flex flex-col overflow-hidden box-content">
                  <div className="TopTagsContainer flex flex-row pr-[50px]">
                    {tagsData
                      ?.filter((tag) => {
                        const specialTags = [
                          "для работы",
                          "для вдохновения",
                          "для обучения",
                        ];
                        return specialTags.includes(tag);
                      })
                      .map((tag, idx) => (
                        <TopTag
                          key={tag}
                          tagType={tag}
                          marginNegative={
                            idx !== 0
                              ? "6XS:-ml-[64px] 425w:-ml-[14px] 690w:-ml-[14px] 820w:-ml-[0px]"
                              : ""
                          }
                        >
                          {tag}
                        </TopTag>
                      ))}
                  </div>
                  <div
                    className="ThumbContainer h-full h-min-[290px] h-max-[560px] overflow-hidden"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)",
                    }}
                  >
                    <Image
                      src={thumb}
                      // src={CMS_URL + thumb.url}
                      width={500}
                      height={500}
                      alt={card.title}
                      className="object-cover h-full h-min-[290px] h-max-[560px] w-full group-hover:scale-[1.16] duration-300"
                    />
                  </div>
                  <div className="CardInfoContainer p-[20px] pb-[24px] bg-white flex flex-col gap-[20px]">
                    <div className="TitleDescContainer flex flex-col gap-[16px]">
                      <div className="Title font-custom text-black text-[22px] leading-none font-bold">
                        {card.title}{" "}
                      </div>
                      <p className="Description font-custom font-light text-[20px] leading-snug text-black">
                        {card.description}
                      </p>
                    </div>
                    <div className="TagsContainer flex gap-[12px] flex-wrap">
                      {tagsData?.map((tag) => {
                        const specialTags = [
                          "для работы",
                          "для вдохновения",
                          "для обучения",
                        ];
                        if (!specialTags.includes(tag)) {
                          return <BaseTag key={tag}>{tag}</BaseTag>;
                        }
                        // return null; //not render specialTags
                      })}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}