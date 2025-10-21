// "use client";

import { SearchBar } from "../components/layout/search";
import { Suspense } from "react";
// useState
import ChipDrop from "../components/content/chipDropdown";
import {cardData1, cardData2, cardData3, cardDataAuthors} from "../components/content/cardDataVault";
import Link from "next/link";
import WeekRecomendedScroll from "../components/layout/weekRecomendedScroll";
import AuthorRecomendedScroll from "../components/layout/authorRecomendedScroll";
import { CMS_URL } from "@/config";
import { DropDownCustom } from "../components/content/dropDownCustom";
import { RecomendedItem, RecomendedList } from "../components/layout/recomendedList";
import { CardListScroll } from "../components/content/cardListHorizontalScroll";
import Image from "next/image";
import { BaseTag, TopTag } from "../components/content/tag";

export default async function Podborki() {
  const p1data = await fetch(
    CMS_URL +
      "/api/podborkas?filters[documentId][$eq]=aowz5mvhhx4ql7r9rdovqr32&populate[authors][populate][avatar]=true&populate[kartochkas][populate][thumb]=true&populate[kartochkas][populate][tags]=true",
    { cache: "no-store" }
  );
  const jsonTest = await p1data.json();
  const podborka1Data = jsonTest.data;
  // const authorsData = podborka1Data[0].authors
  // console.log(podborka1Data[0].id) // cuz array, its box doesn't have - the element inside does => we specify the box from which tp get info
  // console.log(podborka1Data[0].authors)
  // console.log(podborka1Data[0].kartochkas)

  const data = await fetch(
    CMS_URL +
      "/api/podborkas?populate[kartochkas][populate][thumb]=true&populate[kartochkas][populate][tags]=true&populate[authors][populate][avatar]=true",
    { cache: "no-store" }
  );
  const json = await data.json();
  const podborkasData = json.data;

  // const [selectedItem1, setSelectedItem1] = useState("все сферы");
  // const [selectedItem2, setSelectedItem2] = useState("авторы А-Я");
  return (
    <div className="w-full pt-[2rem] flex flex-col justify-center items-center">
      <div className="w-full max-w-[1400px] px-[1rem] desktop:px-[0rem] gap-[3rem] flex flex-col">
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
          <Link href="/authorPage">
            <div
              className={`flex items-center px-[16px] pb-[2px] h-[30px] max-w-[120px] mt-[-1px] border-solid border-black border-[1px] bg-custom-white select-none`}
            >
              <div className="Text text-[16px] leading-none whitespace-nowrap">
                все авторы
              </div>
            </div>
          </Link>
          {/* <div className="flex flex-row flex-wrap gap-[16px]">
            <DropDownCustom
              label={"Направления"}
              defaultItem="все сферы"
              items={[
                "все сферы",
                "графический дизайн",
                "цифровой дизайн",
                "моушен дизайн",
                "гейм-дизайн",
                "реклама",
                "менеджемент",
                "медиа комммуникации",
                "дизайн среды",
                "дизайн интерьера",
                "дизайн костюма",
              ]}
            />
            <ChipDrop
              items={[
                "все сферы",
                "графический дизайн",
                "цифровой дизайн",
                "моушен дизайн",
                "гейм-дизайн",
                "реклама",
                "менеджемент",
                "медиа комммуникации",
                "дизайн среды",
                "дизайн интерьера",
                "дизайн костюма",
              ]}
              selectedItem={selectedItem1}
              onChanged={setSelectedItem1}
            >
              {selectedItem1}
            </ChipDrop>
            <ChipDrop
              items={["авторы А-Я", "авторы популярные", "авторы новые"]}
              selectedItem={selectedItem2}
              onChanged={setSelectedItem2}
            >
              {selectedItem2}
            </ChipDrop>
          </div> */}
        </div>
      </div>
      <WeekRecomendedScroll
        cardData={cardData1}
        header={"Подборка недели"}
        headerDesc={
          "Подборка недели: свежий взгляд от тех, кто нас вдохновляет."
        }
      />
      <div className="AllRecsTextContainer gap-[12px] flex flex-col mt-[6rem] mb-[2rem] w-full max-w-[1400px] px-[1rem] desktop:px-[0rem]">
        <div className="Text text-[32px] leading-[36px] text-black font-bold">
          Все авторские подборки
        </div>
        <div className="Text text-[20px] leading-[24px]">
          Ищете, что почитать или посмотреть? Здесь все подборки от&#160;наших
          авторов.
        </div>
      </div>

      {/* <div>{podborka1Data[0].name}</div>
      <div>{podborka1Data[0].authors[0].name}</div>
      <div>{podborka1Data[0].kartochkas[0].tags[0].name}</div> */}
      <RecomendedList recs={podborkasData} />
      {/* <RecomendedItem recsData={podborkasData[0]} /> */}
      {/* <CardListScroll cards={podborka1Data[0].kartochkas} /> */}
      {/* <RecomendedItem1 recsData={podborka1Data[0]}/> */}
      {/* <RecomendedItem1 recsData={podborkasData[0]}/> */}
      {/* <RecomendedItem1 recsData={podborkasData[1]}/> */}


    </div>
  );
}

function RecomendedList1({ recs }) {
  return (
    <div className="w-full">
      {recs?.map((rec) => (
        <RecomendedItem1 recsData={rec} />
      ))}
    </div>
  );
}

function RecomendedItem1({ recsData }) {
  // открывашка описания к подборке
  // const [openDescription, setOpenDescription] = useState(false);
  // скролл карточек
  // const scroll_Cards_Ref = useRef(null);

  const rec = recsData;
  const header = rec.name;
  const description = rec.description;
  // const authors = rec.authors.name;
  const authorsData = rec.authors;
  const kartockasData = rec.kartochkas;
  // console.log(kartockasData[0].thumb)
  return (
    <div className="CenterRecsContainer w-full flex flex-col justify-center items-center">
      <div className="RecsContainer flex flex-col gap-[16px] mt-[3rem] desktop:mt-[6rem] w-full max-w-[1400px]">
        <div className="RecsHeaderContainer flex flex-col gap-[16px] px-[1rem] desktop:px-[0rem]">
          <div className="TopRecsContainer flex flex-col gap-[8px]">
            <div className="TextAndArrowsContainer flex flex-row justify-between items-start gap-[32px]">
              <div className="header text-[22px] text-black font-bold leading-none">
                {header}
              </div>
              {/* <ArrowsLeftRight
                width={453}
                gap={20}
                // refScroll={scroll_Cards_Ref}
              /> */}
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <div className="AuthorContainer flex items-center gap-[16px]">
              <div className="text-black font-bold text-[18px] whitespace-nowrap">
                Авторы подборки:
              </div>
              <div className="flex gap-[16px]">
                {authorsData?.map((author) => {
                  // return console.log(author.avatar.url)
                  return (
                    <div className="flex items-center gap-[4px]">
                      <div className="bg-gray-400 w-[48px] h-[48px] rounded-full overflow-hidden">
                        <Image
                          src={CMS_URL + author.avatar.url}
                          width={500}
                          height={500}
                          alt={author.name}
                          className="object-cover h-full h-min-[290px] h-max-[560px] w-full"
                        />
                      </div>
                      <Link key={author.id} href={author.link ?? "#"}>
                        <div
                          key={author.id}
                          className="Author whitespace-nowrap text-black text-[18px] leading-[22px] underline"
                        >
                          {author.name}
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
              {/* <Link href={linkPage ?? "#"}>
                <div className="Author text-black text-[18px] leading-[22px] underline">
                  authors
                </div>
              </Link> */}
            </div>
            {/* <div onClick={() => setOpenDescription(!openDescription)}> */}
            <div>
              {/* {openDescription ? ( */}
              <div className="Description text-black text-[18px] font-light">
                {description}
              </div>
              {/* ) : (
                <div className="Description text-black text-[18px] font-light line-clamp-4">
                  {description}
                </div>
              )} */}
            </div>
          </div>
        </div>
        <div
          // ref={scroll_Cards_Ref}
          className="CardScroll flex flex-row flex-nowrap gap-[20px] mt-[2rem] px-[1rem] desktop:px-[0rem] scrollbar-hide overflow-x-auto"
        >
          <CardListScroll1 cards={kartockasData} />
        </div>
      </div>
    </div>
  );
}

function CardListScroll1({ cards }) {
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
                        return specialTags.includes(tag.name);
                      })
                      .map((tag, idx) => (
                        <TopTag
                          key={tag.id}
                          tagType={tag.name}
                          marginNegative={
                            idx !== 0
                              ? "6XS:-ml-[64px] 425w:-ml-[14px] 690w:-ml-[14px] 820w:-ml-[0px]"
                              : ""
                          }
                        >
                          {tag.name}
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
                      src={CMS_URL + thumb.url}
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
                        if (!specialTags.includes(tag.name)) {
                          return <BaseTag key={tag.id}>{tag.name}</BaseTag>;
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

function WeekRecomendedScroll1({ recData }) {
  // скролл карточек
  // const scroll_Cards_Ref = useRef(null);

  const rec = recData;
  const header = rec.name;
  const headerDesc = rec.description;
  const kartockasData = rec.kartochkas;
  // console.log(kartockasData[0].thumb)

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
            {/* <ArrowsLeftRight width={453} gap={20} refScroll={scroll_Cards_Ref}/> */}
          </div>
        </div>
        <div
          // ref={scroll_Cards_Ref}
          className="CardScrollRecs flex flex-row flex-nowrap gap-[20px] mt-[2rem] px-[1rem] desktop:px-[0rem] scrollbar-hide w-full overflow-x-auto"
        >
          <CardListScroll cards={kartockasData} />
        </div>
      </div>
    </div>
  );
}