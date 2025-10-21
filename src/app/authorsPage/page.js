import { Suspense } from "react";
import { SearchBar } from "../components/layout/search";
import Link from "next/link";
import Image from "next/image";
import { BaseTag } from "../components/content/tag";
import { cardData2 } from "../components/content/cardDataVault";
import { CMS_URL } from "@/config";
import AuthorRecomendedScroll from "../components/layout/authorRecomendedScroll";
import { RecomendedList } from "../components/layout/recomendedList";
import AuthorPageSlug from "../authorPage/[slug]/page";
// import { useRouter } from "next/navigation";

// CMS URL local - "http://localhost:1337"
// CMS URL server - "https://kartotekacms.ibnd.ru"
// local [documentId] - jklic5ivyu3fovxsw2ffm282
// server [documentId] - pdscdzfyq2ydxdog0eet5yad
const authorDocID = "pdscdzfyq2ydxdog0eet5yad";
const authorSlug = 'alenaKukushkina'

// one author testing
const authors1data = await fetch(
  CMS_URL +
    `/api/authors?filters[slug][$eq]=${authorSlug}&populate[avatar]=true&populate[designareas]=true`,
    // `/api/authors?filters[documentId][$eq]=${authorDocID}&populate[avatar]=true&populate[designareas]=true`,
  { cache: "no-store" }
);
const json1author = await authors1data.json();
const oneAuthorData = json1author.data[0];
const areasData = oneAuthorData.designareas; // comment when allAuthorsData?.map((author) => {...
const oneAuthorId = oneAuthorData.documentId;
const oneAuthorSlug = oneAuthorData.slug;
console.log(oneAuthorSlug)

// one author podborka testing
const podborkasData = await fetch(
  CMS_URL +
    `/api/podborkas?filters[authors][slug][$eq]=${oneAuthorSlug}&populate[authors][populate][avatar]=true&populate[kartochkas][populate][thumb]=true&populate[kartochkas][populate][tags]=true`,
    // `/api/podborkas?filters[authors][documentId][$eq]=${oneAuthorId}&populate[authors][populate][avatar]=true&populate[kartochkas][populate][thumb]=true&populate[kartochkas][populate][tags]=true`,
  { cache: "no-store" }
);
const json2 = await podborkasData.json();
const podborkas1 = json2.data;

// all authors fetch
const data = await fetch(
  CMS_URL + "/api/authors?populate[avatar]=true&populate[designareas]=true",
  { cache: "no-store" }
); // popultae for images avatar
const json = await data.json();
const allAuthorsData = json.data;
// console.log(allAuthorsData)

const currentAuthorId = oneAuthorData.documentId;
const dataPodborkas = await fetch(
  CMS_URL +
    `/api/podborkas?populate[authors][populate][avatar]=true&populate[kartochkas][populate][thumb]=true&populate[kartochkas][populate][tags]=true`,
  { cache: "no-store" }
);
const jsonPod = await dataPodborkas.json();
const podborkas = jsonPod.data;

// HELLO FUTURE ME
// я собиралась отфильтровать подборки по slug внутри allAuthorsData?.map((author) => {...
// но я подумала 
// 1) я выше уже делала фильтр внутри fetch 
// 2) может если перенести страницу в slug то не надо будет этого всего
// console.log(jsonPod.data[2].authors[0].slug)
// console.log(jsonPod.data[2].authors[1].slug)
let filteredPodborkas = [...podborkas]

// old local test
// const oneAuthorData = authorsData.find(card => card.id === 13); // id 11 12
// const cardData = cardDataAuthors.find(card => card.id === 1);

// export default function AuthorsPage() {
//   return (
//     <div className="w-full pt-[2rem] flex flex-col justify-center items-center">
//       <div className="TopContainer w-full max-w-[1400px] px-[1rem] desktop:px-[0rem] gap-[3rem] flex flex-col">
//         <div className="select-none">
//           <Suspense
//             fallback={
//               <div className="flex justify-center items-center h-[100px]">
//                 Загрузка...
//               </div>
//             }
//           >
//             <SearchBar />
//           </Suspense>
//         </div>
//         <div className="flex flex-col gap-[16px] 690w:flex-row 690w:justify-between">
//           <Link href="/allAuthors">
//             <div
//               className={`flex items-center justify-center gap-[4px] pb-[2px] h-[30px] px-[16px] max-w-[120px] mt-[-1px] border-solid border-black border-[1px] bg-custom-white select-none`}
//             >
//               <div className="mt-[1.6px]">
//                 <Image
//                   src="/icons/arrow_left.svg"
//                   height={12}
//                   width={12}
//                   alt="arrow left icon"
//                 />
//               </div>
//               <div className="Text text-[16px] leading-none whitespace-nowrap">
//                 обратно
//               </div>
//             </div>
//           </Link>
//         </div>
//       </div>
//       {/* <AuthorPageSlug /> */}
//       <div>
//         {allAuthorsData?.map((author) => {
//           // console.log(author)
//           const areasData = author.designareas
//           return (
//             <div className="AuthorPageContainer bg-pink-100 border border-2 border-red-300 border-solid my-2">

              
//               <div className="AuthorInfoContainer flex flex-col 820w:flex-row gap-[16px] 820w:gap-[64px] 3cols:gap-[128px] justify-between mt-[3rem] w-full max-w-[1400px] px-[1rem] desktop:px-[0rem]">
//                 <div className="flex flex-col gap-[8px]">
//                   <div className="ThumbContainer flex items-center h-[400px] w-full 3cols:max-w-[500px] aspect-[5/4] overflow-hidden">
//                     <Image
//                       src={CMS_URL + author.avatar.url}
//                       alt="Алена Кукушкина"
//                       width={500}
//                       height={400}
//                     />
//                   </div>
//                   <div className="CardInfoContainer flex flex-row gap-[20px]">
//                     {areasData?.map((area) => {
//                       // console.log(area)
//                       return <BaseTag>{area.name}</BaseTag>;
//                       // key prop in React map is set to the whole area object
//                       // converts to the string "[object Object]" - duplicate keys
//                     })}
//                   </div>
//                 </div>
//                 <div className="flex flex-col gap-[4px] w-full max-w-[766px]">
//                   <div className="Text text-[32px] text-black font-bold">
//                     {author.name}
//                   </div>
//                   <div className="Text text-[20px] leading-[24px]">
//                     {author.description}
//                   </div>
//                 </div>
//               </div>


//               <div className="AllRecsTextContainer flex flex-col gap-[4px] mt-[6rem] w-full max-w-[1400px] px-[1rem] desktop:px-[0rem]">
//                 <div className="Text text-[32px] text-black font-bold">
//                   Подборки автора
//                 </div>
//               </div>

//               <div> 
//                 {
//                  <RecomendedList recs={filteredPodborkas} />  
//                 // filteredPods?.map(pod => {
//                 //   return 
//                 // })
//                 }
//               </div>


//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

export default function AuthorsPage() {
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
      <div className='AuthorPageContainer '>
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
              {areasData?.map((area) => {
                // console.log(area)
                return <BaseTag key={area.id}>{area.name}</BaseTag>;
                // key prop in React map is set to the whole area object
                // converts to the string "[object Object]" - duplicate keys
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
        <div className="AllRecsTextContainer flex flex-col gap-[4px] mt-[6rem] w-full max-w-[1400px] px-[1rem] desktop:px-[0rem]">
          <div className="Text text-[32px] text-black font-bold">
            Подборки автора
          </div>
        </div>
        <RecomendedList recs={podborkas1} />
      </div>
    </div>
  );
}
