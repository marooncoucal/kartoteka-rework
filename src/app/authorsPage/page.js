import { Suspense } from "react";
import { SearchBar } from "../components/layout/search";
import Link from "next/link";
import Image from "next/image";
import { BaseTag } from "../components/content/tag";
import { cardData2 } from "../components/content/cardDataVault";

import { CMS_URL } from "@/config";
import AuthorRecomendedScroll from "../components/layout/authorRecomendedScroll";
import { RecomendedList } from "../components/layout/recomendedList";

export default async function AuthorPage() {

    // one author testing
  const authors1data = await fetch(
    CMS_URL +
      "/api/authors?filters[documentId][$eq]=pdscdzfyq2ydxdog0eet5yad&populate[avatar]=true&populate[designareas]=true",
    { cache: "no-store" }
  );
  const json1author = await authors1data.json();
  // console.log(json1author.data[0])
  const oneAuthorData = json1author.data[0];
  // console.log(oneAuthorData.designareas);
  const areasData = oneAuthorData.designareas
//   console.log(areasData);
  const oneAuthorId = oneAuthorData.documentId
  console.log(oneAuthorData.documentId);
//   l59fpyrpy4pf51d5dim2oz58

  const podborkasData = await fetch( CMS_URL + `/api/podborkas?filters[authors][documentId][$eq]=${oneAuthorId}&populate[authors][populate][avatar]=true&populate[kartochkas][populate][thumb]=true&populate[kartochkas][populate][tags]=true`, { cache: "no-store" } );
  const json = await podborkasData.json();
  const podborkas = json.data;

//   console.log(podborkas)

//   const data = await fetch(
//     CMS_URL + "/api/authors?populate=avatar&populate=designareas",
//     { cache: "no-store" }
//   ); // popultae for images avatar
//   const json = await data.json();
//   const authorsData = json.data;
//   // console.log(authorsData)

  // const oneAuthorData = authorsData.find(card => card.id === 13); // id 11 12
  // const cardData = cardDataAuthors.find(card => card.id === 1);

  return (
    <div className="w-full pt-[2rem] flex flex-col justify-center items-center">
      <div className="TopContainer w-full max-w-[1400px] px-[1rem] desktop:px-[0rem] gap-[3rem] flex flex-col">
        <div className="select-none">
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-[100px]">
                Загрузка...
              </div>
            }
          >
            <SearchBar />
          </Suspense>
        </div>
        <div className="flex flex-col gap-[16px] 690w:flex-row 690w:justify-between">
          <Link href="/allAuthors">
            <div
              className={`flex items-center justify-center gap-[4px] pb-[2px] h-[30px] px-[16px] max-w-[120px] mt-[-1px] border-solid border-black border-[1px] bg-custom-white select-none`}
            >
              <div className="mt-[1.6px]">
                <Image
                  src="/icons/arrow_left.svg"
                  height={12}
                  width={12}
                  alt="arrow left icon"
                />
              </div>
              <div className="Text text-[16px] leading-none whitespace-nowrap">
                обратно
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col 820w:flex-row gap-[16px] 820w:gap-[64px] 3cols:gap-[128px] justify-between mt-[3rem] w-full max-w-[1400px] px-[1rem] desktop:px-[0rem]">
        <div className="flex flex-col gap-[8px]">
          <div className="ThumbContainer flex items-center h-[400px] w-full 3cols:max-w-[500px] aspect-[5/4] overflow-hidden">
            {/* <Image src={cardData.image} alt="Алена Кукушкина" width={500} height={400} /> */}
            <Image
              src={CMS_URL + oneAuthorData.avatar.url}
              alt="Алена Кукушкина"
              width={500}
              height={400}
            />
          </div>
          <div className="CardInfoContainer flex flex-row gap-[20px]">
            {
                areasData?.map(area => {
                    // console.log(area)
                        return <BaseTag key={area.id}>{area.name}</BaseTag>;  
                        // key prop in React map is set to the whole area object
                        // converts to the string "[object Object]" - duplicate keys
                })
            }
            {/* <BaseTag>{cardData.tags[0]}</BaseTag> */}
            {/* <BaseTag>{cardData.tags[1]}</BaseTag> */}
          </div>
        </div>
        <div className="flex flex-col gap-[4px] w-full max-w-[766px]">
          <div className="Text text-[32px] text-black font-bold">
            {oneAuthorData.name}
          </div>
          <div className="Text text-[20px] leading-[24px]">
            {oneAuthorData.description}
          </div>
        </div>
      </div>
      <div className="AllRecsTextContainer flex flex-col gap-[4px] mt-[6rem] w-full max-w-[1400px] px-[1rem] desktop:px-[0rem]">
        <div className="Text text-[32px] text-black font-bold">
          Подборки автора
        </div>
      </div>
      <RecomendedList recs={podborkas} />
      {/* <AuthorRecomendedScroll cardData={cardData2}
                link={`/alenaKukushkina`}
                header={'Убедительная презентация — топ 10 книг по мнению Алёны Кукушкиной'}
                author={'Алёна Кукушкина, куратор креативных проектов, продюсер, консультант в области бизнес-коммуникации и искусства презентации'}
                description={`Убедительная презентация — это не только красивые слайды и чёткая речь, но и умение вести диалог, отвечать на вопросы, чувствовать аудиторию и адаптироваться к её запросам. Именно здесь пересекаются мастерство презентации и переговорные техники. Ведь каждая презентация — это, по сути, переговоры: вы “продаёте” идею, проект или продукт, а ваша задача — сделать так, чтобы аудитория не просто услышала, но и приняла вашу точку зрения. Поэтому глубокое понимание переговорных стратегий — это неотъемлемая часть успеха в коммуникации. Предлагаю вашему вниманию книги, которые сочетают глубокую теоретическую базу с практической применимостью. Каждая из них предлагает уникальный взгляд на переговоры, подкреплённый исследованиями, кейсами и стратегиями, которые можно использовать в реальной жизни.`}
            /> */}
    </div>
  );
}