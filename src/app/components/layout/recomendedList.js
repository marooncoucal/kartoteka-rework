"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import ArrowsLeftRight from "../content/arrowsLeftRight";
import { CardListScroll } from "../content/cardListHorizontalScroll";
import { CMS_URL } from "@/config";
import Image from "next/image";

export function RecomendedList({ recs }) {
  return (
  <div className="w-full">
    {
      recs?.map(rec => <RecomendedItem recsData={rec} key={rec.documentId}/>)
    }
  </div>
  )
}

export function RecomendedItem({ recsData }) {
  // открывашка описания к подборке
  const [openDescription, setOpenDescription] = useState(false);
  // скролл карточек
  const scroll_Cards_Ref = useRef(null);

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
              <ArrowsLeftRight
                width={453}
                gap={20}
                refScroll={scroll_Cards_Ref}
              />
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
                    <div key={author.id} className="flex items-center gap-[4px]">
                      <div className="bg-gray-400 w-[48px] h-[48px] rounded-full overflow-hidden">
                        <Image
                          src={CMS_URL + author.avatar.url}
                          width={500}
                          height={500}
                          alt={author.name}
                          className="object-cover h-full h-min-[290px] h-max-[560px] w-full"
                        />
                      </div>
                      <Link href={author.link ?? "#"}>
                        <div className="Author whitespace-nowrap text-black text-[18px] leading-[22px] underline">
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
            <div onClick={() => setOpenDescription(!openDescription)}>
            {/* <div> */}
              {openDescription ? (
              <div className="Description text-black text-[18px] font-light">
                {description}
              </div>
              ) : (
                <div className="Description text-black text-[18px] font-light line-clamp-2">
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
          <CardListScroll cards={kartockasData} />
        </div>
      </div>
    </div>
  );
}

// export function RecomendedItem({ recsData }) {
//   // открывашка описания к подборке
//   const [openDescription, setOpenDescription] = useState(false);
//   // скролл карточек
//   const scroll_Cards_Ref = useRef(null);

//   const rec = recsData;
//   const header = rec.name;
//   const description = rec.description;
//   // const authors = rec.authors.name;
//   const authorsData = rec.authors;
//   const kartockasData = rec.kartochkas;
//   // console.log(kartockasData[0].thumb)
//   return (
//     <div className="CenterRecsContainer w-full flex flex-col justify-center items-center">
//       <div className="RecsContainer flex flex-col gap-[16px] mt-[3rem] desktop:mt-[6rem] w-full max-w-[1400px]">
//         <div className="RecsHeaderContainer flex flex-col gap-[16px] px-[1rem] desktop:px-[0rem]">
//           <div className="TopRecsContainer flex flex-col gap-[8px]">
//             <div className="TextAndArrowsContainer flex flex-row justify-between items-start gap-[32px]">
//               <div className="header text-[22px] text-black font-bold leading-none">
//                 {header}
//               </div>
//               <ArrowsLeftRight
//                 width={453}
//                 gap={20}
//                 refScroll={scroll_Cards_Ref}
//               />
//             </div>
//           </div>
//           <div className="flex flex-col gap-[8px]">
//             <div className="AuthorContainer flex flex-row gap-[6px]">
//               <div className="text-black font-bold text-[18px] whitespace-nowrap">
//                 Авторы подборки:
//               </div>
//               <div className="flex gap-[8px]">
//                 {
//                   authorsData?.map(author => {
//                     return(
//                       <Link key={author.id} href={author.link ?? "#"}>
//                         <div key={author.id} className="Author whitespace-nowrap text-black text-[18px] leading-[22px] underline">
//                           {author.name}
//                         </div>
//                       </Link>
//                     )
//                   })
//                 }
//               </div>
//               {/* <Link href={linkPage ?? "#"}>
//                 <div className="Author text-black text-[18px] leading-[22px] underline">
//                   authors
//                 </div>
//               </Link> */}
//             </div>
//             <div onClick={() => setOpenDescription(!openDescription)}>
//               {openDescription ? (
//                 <div className="Description text-black text-[18px] font-light">
//                   {description}
//                 </div>
//               ) : (
//                 <div className="Description text-black text-[18px] font-light line-clamp-4">
//                   {description}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//         <div
//           ref={scroll_Cards_Ref}
//           className="CardScroll flex flex-row flex-nowrap gap-[20px] mt-[2rem] px-[1rem] desktop:px-[0rem] scrollbar-hide overflow-x-auto"
//         >
//           <CardListScroll cards={kartockasData} />
//         </div>
//       </div>
//     </div>
//   );
// }

