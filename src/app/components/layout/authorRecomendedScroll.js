"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import ArrowsLeftRight from "../content/arrowsLeftRight";
import { CardListScroll } from "../content/cardListHorizontalScroll";
import { CMS_URL } from "@/config";

export default function AuthorRecomendedScroll({
  header,
  author,
  authorsData,
  description,
  link,
  cardData,
}) {

  // открывашка описания к подборке
  const [openDescription, setOpenDescription] = useState(false);

  // скролл карточек
  const scroll_Cards_Ref = useRef(null);

  return (
    <div className="CenterRecsContainer w-full flex flex-col justify-center items-center">
      <div className="RecsContainer flex flex-col gap-[16px] mt-[3rem] desktop:mt-[6rem] w-full max-w-[1400px]">
        <div className="RecsHeaderContainer flex flex-col gap-[16px] px-[1rem] desktop:px-[0rem]">
          <div className="TopRecsContainer flex flex-col gap-[8px]">
            <div className="TextAndArrowsContainer flex flex-row justify-between items-start gap-[32px]">
              <div className="header text-[22px] text-black font-bold leading-none">
                {header}
              </div>
              <ArrowsLeftRight
                width={453}
                gap={20}
                refScroll={scroll_Cards_Ref}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <div className="AuthorsContainer flex flex-row gap-[6px]">
              <div className="text-black font-bold text-[18px] whitespace-nowrap">
                Автор подборки:
              </div>
              {/* <div className="flex gap-[8px]">
                {
                  authorsData?.map(author => {
                    return(
                      <Link key={author.id} href={author.link ?? "#"}>
                        <div key={author.id} className="Author whitespace-nowrap text-black text-[18px] leading-[22px] underline">
                          {author.title}
                        </div>
                      </Link>
                    )
                  })
                }
              </div> */}
              <Link href={link ?? "#"}>
                <div className="Author text-black text-[18px] leading-[22px] underline">
                  {author}
                </div>
              </Link>
            </div>
            <div onClick={() => setOpenDescription(!openDescription)}>
              {openDescription ? (
                <div className="Description text-black text-[18px] font-light">
                  {description}
                </div>
              ) : (
                <div className="Description text-black text-[18px] font-light line-clamp-4">
                  {description}
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          ref={scroll_Cards_Ref}
          className="CardScroll flex flex-row flex-nowrap gap-[20px] mt-[2rem] px-[1rem] desktop:px-[0rem] scrollbar-hide overflow-x-auto"
        >
          <CardListScroll cards={cardData} />
        </div>
      </div>
    </div>
  );
}

// <AuthorRecomendedScroll cardData={cardData2}
//         link={`/alenaKukushkina`}
//         header={'Убедительная презентация — топ 10 книг по мнению Алёны Кукушкиной'}
//         author={'Алёна Кукушкина, куратор креативных проектов, продюсер, консультант в области бизнес-коммуникации и искусства презентации'}
//         description={`Убедительная презентация — это не только красивые слайды и чёткая речь, но и умение вести диалог, отвечать на вопросы, чувствовать аудиторию и адаптироваться к её запросам. Именно здесь пересекаются мастерство презентации и переговорные техники. Ведь каждая презентация — это, по сути, переговоры: вы “продаёте” идею, проект или продукт, а ваша задача — сделать так, чтобы аудитория не просто услышала, но и приняла вашу точку зрения. Поэтому глубокое понимание переговорных стратегий — это неотъемлемая часть успеха в коммуникации. Предлагаю вашему вниманию книги, которые сочетают глубокую теоретическую базу с практической применимостью. Каждая из них предлагает уникальный взгляд на переговоры, подкреплённый исследованиями, кейсами и стратегиями, которые можно использовать в реальной жизни.`}
//     /> 