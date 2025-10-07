"use client";

import { useRef, useState } from "react";
import ArrowsLeftRight from "../content/arrowsLeftRight";
import { CardListScroll } from "../content/cardListHorizontalScroll";

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
          <CardListScroll cards={cardData} />
        </div>
      </div>
    </div>
  );
}
