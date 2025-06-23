// http://localhost:3000

import { CMS_URL } from "@/config";
import { CardList } from './components/layout/cardList';
import { HeroSearch } from './components/layout/search';

export default async function Page2({ params, searchParams }) {

  const resolvedSearchParams = await searchParams;

  const data = await fetch(CMS_URL + "/api/kartochkas?populate=thumb&populate=tags", { cache: 'no-store' }); //no-store потом убрать, popultae for images thumb
  const json = await data.json()
  const cards = json.data

  // const router = useRouter() // в онлклик роутер вставляет в поисковую строку фильтр запроса + запрос пользователя, который в юзСтэйте и валью= в инпуте

  //записывает в переменную тег после tag= из url ссылки
  // const searchTag = searchParams["tag"]
  const searchTag = resolvedSearchParams["tag"];
  //записывает в переменную запрос после search= из url ссылки
  // const search = searchParams["q"]
  const search = resolvedSearchParams["q"];

  //масив с карточками по запросу
  let filteredCards = [...cards]

  //для поиска по тегам
  if (searchTag) {
    filteredCards = [] //обнуляем массив
    let filteredCardsWithPriority = []
    for (let cardData of cards) { //для каждой карточки
      // фикс все теги карточки
      const tags = cardData.tags.map(tag => tag.name)
      let tagCount = 0
      searchTag.split(",").forEach(tag => {
        if (tags.includes(tag)) {
          tagCount++
        }
      });
      if (tagCount > 0) filteredCardsWithPriority.push({ card: cardData, priority: tagCount })
      // если в тегах есть тег из серчТэг, то карточка в массив фильтрованных 
    }
    filteredCardsWithPriority.sort((c1, c2) => c2.priority - c1.priority)
    filteredCards = filteredCardsWithPriority.map(c => c.card)

  }

  //для поиска по словам
  if (search) {
    filteredCards = [] //обнуляем массив
    for (let cardData of cards) { //для каждой карточки
      let found = false //сигнал о наличии запроса
      if ( //eсли запрос есть в title или description в карточке
        cardData.title.toLowerCase().includes(search.toLowerCase())
        || cardData.description.toLowerCase().includes(search.toLowerCase())
      ) { found = true } //то сигнал меняется на нашли
      const tags = cardData.tags.map(tag => tag.name) //массив тегов карточки
      let tagFound = searchTag ? false : true //тегФаунд по дефолту сигнала нет, но если он уже в серчТэг, то есть
      //если пришли новые теги в серчТэг, то разделить найденные теги запятой...
      searchTag?.split(",").forEach(
        // проход по каждому тегу серчТэг, если он совпадает с тегами карточки, то сигнал тегФаунд есть
        tag => { if (tags.includes(tag)) tagFound = true }
      );
      if (found && tagFound) filteredCards.push(cardData)
      // если есть и запрос и тег (тегФаунд), то карточка записывается
    }
  }

  filteredCards = [...new Set(filteredCards)] // убирает дубликаты

  return (
    <div className="w-full pt-[2rem] flex flex-col justify-center items-center">
      <div className='w-full max-w-[1400px] flex flex-col justify-center items-center px-[1rem] desktop:px-[0rem]'>
        <HeroSearch inputTags={searchTag ? searchTag?.split(",") : []} />
      </div>
      <div className='Card-section w-full max-w-[1400px] px-[1rem] desktop:px-[0rem]'>
        <CardList cards={filteredCards} />
      </div>
    </div>
  )
}