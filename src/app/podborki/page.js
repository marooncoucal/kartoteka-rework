// "use client";

import { HeroSearch, SearchBar } from "../components/layout/search";
import { Suspense } from "react";
// useState
import ChipDrop from "../components/content/chipDropdown";
import {cardData1} from "../components/content/cardDataVault";
import Link from "next/link";
import WeekRecomendedScroll from "../components/layout/weekRecomendedScroll";
import { CMS_URL } from "@/config";
import { DropDownCustom } from "../components/content/dropDownCustom";
import { RecomendedList } from "../components/layout/recomendedList";
import ButtonRect from "../components/content/atoms/buttonRect";

export default async function Podborki() {
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
        <HeroSearch />
        <div className="TopButtons flex flex-col gap-[16px] 690w:flex-row 690w:justify-between">
          <ButtonRect link={"/authorPage"} text={"все авторы"}/>
          {/* <div className="Dropdowns flex flex-row flex-wrap gap-[16px]">
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
              // selectedItem={selectedItem1}
              // onChanged={setSelectedItem1}
            >
               {selectedItem1} 
            </ChipDrop>
            <ChipDrop
              items={["авторы А-Я", "авторы популярные", "авторы новые"]}
              // selectedItem={selectedItem2}
              // onChanged={setSelectedItem2}
            >
              {selectedItem2} 
            </ChipDrop>
          </div> */}
        </div>
      </div>
      
      {/* <WeekRecomendedScroll
        cardData={cardData1}
        header={"Подборка недели"}
        headerDesc={
          "Подборка недели: свежий взгляд от тех, кто нас вдохновляет."
        }
      /> */}

      <div className="AllRecsTextContainer gap-[12px] flex flex-col mt-[3rem] mb-[2rem] w-full max-w-[1400px] px-[1rem] desktop:px-[0rem]">
        <div className="Text text-[32px] leading-[36px] text-black font-bold">
          Все авторские подборки
        </div>
        <div className="Text text-[20px] leading-[24px]">
          Ищете, что почитать или посмотреть? Здесь все подборки от&#160;наших
          авторов.
        </div>
      </div>
      <div className="w-full max-w-[1400px] px-[1rem] desktop:px-[0rem]">
        <RecomendedList recs={podborkasData} pgE={'authorPage/'}/>
      </div>


    </div>
  );
}