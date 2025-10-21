import ButtonRect from "@/app/components/content/atoms/buttonRect";
import { BaseTag } from "@/app/components/content/tag";
import { RecomendedList } from "@/app/components/layout/recomendedList";
import { HeroSearch } from "@/app/components/layout/search";
import { CMS_URL } from "@/config";
import Image from "next/image";


export default async function AuthorsPageSlug({params}) {
const authorSlug = (await params).slug

// one author
const authors1data = await fetch(
  CMS_URL +
    `/api/authors?filters[slug][$eq]=${authorSlug}&populate[avatar]=true&populate[designareas]=true`,
  { cache: "no-store" }
);
const json1author = await authors1data.json();
const oneAuthorData = json1author.data[0];
const areasData = oneAuthorData.designareas;
const oneAuthorSlug = oneAuthorData.slug;

// one author podborka
const podborkasData = await fetch(
  CMS_URL +
    `/api/podborkas?filters[authors][slug][$eq]=${oneAuthorSlug}&populate[authors][populate][avatar]=true&populate[kartochkas][populate][thumb]=true&populate[kartochkas][populate][tags]=true`,
  { cache: "no-store" }
);
const json2 = await podborkasData.json();
const podborkas1 = json2.data;

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="TopContainer w-full max-w-[1400px] pt-[2rem] px-[1rem] desktop:px-[0rem] gap-[3rem] flex flex-col">
        <HeroSearch />
        <ButtonRect link={'/authorPage'} text={'обратно'} arrowLeft={true} />
      </div>
      <div className='AuthorPageContainer w-full max-w-[1400px] px-[1rem] desktop:px-[0rem]'>
        <div className="flex flex-col 820w:flex-row gap-[16px] 820w:gap-[64px] 3cols:gap-[128px] justify-between mt-[3rem] w-full max-w-[1400px]">
          <div className="flex flex-col gap-[8px]">
            <div className="ThumbContainer flex items-center h-[400px] w-full 3cols:max-w-[500px] aspect-[5/4] overflow-hidden">
              <Image
                src={CMS_URL + oneAuthorData.avatar.url}
                alt="Алена Кукушкина"
                width={500}
                height={400}
              />
            </div>
            <div className="CardInfoContainer flex flex-row gap-[20px]">
              {areasData?.map((area) => {
                return <BaseTag key={area.id}>{area.name}</BaseTag>;
              })}
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
        <div className="AllRecsTextContainer flex flex-col gap-[4px] mt-[6rem] w-full max-w-[1400px]">
          <div className="Text text-[32px] text-black font-bold">
            Подборки автора
          </div>
        </div>
        <RecomendedList recs={podborkas1} />
      </div>
    </div>
  );
}