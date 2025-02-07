"use client"

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';


export function Tag({ children, clickable = true, tags, setTags, tagColor }) {
    // массив с тегами, ?. нашлось или нет, если что выкидывает undefined вместо ошибки
    let active = tags?.includes(children)

    let searchParams = useSearchParams()
    // если нашёл запрос q, то добавить q, иначе пустая строка
    let q = searchParams.get("q") ? "&q=" + searchParams.get("q") : ""
    let router = useRouter()

    let bgc = '';
    switch (tagColor) {
        case 'для вдохновения':
            bgc = 'bg-[#4C4CFF] text-white';
            break;
        case 'для работы':
            bgc = 'bg-[#FF5454] text-white';
            break;
        case 'для обучения':
            bgc = 'bg-[#00E086] text-white';
            break;
        default:
            bgc = 'bg-custom-white border-solid border-black border-[1px] text-black';
    }

    return (
        <div className={`
            leading-none text-[16px] font-custom
            px-[16px] pb-[2px] h-[30px]
            justify-center items-center flex 
            select-none cursor-pointer 
            ${active ? `bg-black gap-[10px] text-white` : `${bgc} gap-[0px] `}
        `} onClick={() => {
                //если можно кликнуть
                if (clickable) {
                    // если тега в массиве нет (не выбран -> не актив), то записать в основной
                    if (!active) { tags.push(children) }
                    // иначе удалить (ещё один клик)
                    else {
                        // находит номер элемента, и с него удаляет
                        tags.splice(tags.indexOf(children), 1)
                    }
                    setTags([...tags]) //обновляется массив

                    //если в основном массиве что-то есть, то отправить в запрос выбранные теги
                    // if (tags.length > 0) router.push("/search?tag=" + tags.join(",") + q)
                    // else router.push("/search?" + q) //иначе в роутер просто запрос

                    router.push("/?tag=" + tags.join(",") + q)

                }
            }}>
            <div className="Text text-[16px] leading-none">{children}</div>
            <div className="Cross flex justify-center items-center">
                {active && <Image
                    src="/icons/cross_desktop.svg"
                    height={14}
                    width={14}
                    alt="cross icon"
                />}
            </div>
        </div>
    )
}

export function BaseTag({ children }) {
    return (
        <div className="
        leading-none text-[16px] font-custom text-black
        px-[16px] pb-[2px] h-[30px]
        justify-center items-center flex gap-[0px] 
        select-none cursor-pointer 
        border-solid border-black border-[1px] 
        ">
            <div className="Text text-[16px] font-custom font-medium leading-none">{children}</div>
        </div>
    )
}

export function TopTag({ children, tagType, variant }) {
    let bgc = '';
    switch (tagType) {
        case 'для вдохновения':
            bgc = 'bg-[#4C4CFF] text-white';
            break;
        case 'для работы':
            bgc = 'bg-[#FF5454] text-white';
            break;
        case 'для обучения':
            bgc = 'bg-[#00E086] text-white';
            break;
        default:
            bgc = '';
    }
    return (
        <div>
            {
                variant === 2 ? (
                    <div className={`
                        pl-[16px] pr-[40px] pb-[2px] h-[30px] 
                        text-[16px] font-custom font-medium leading-none text-white
                        justify-center items-center flex gap-[0px]
                        ${bgc}`}>{children}</div>

                ) : (
                    <div className={`
                        pl-[16px] pr-[40px] pb-[2px] h-[30px] 
                        text-[16px] font-custom font-medium leading-none text-white
                        justify-center items-center flex gap-[0px]
                        ${bgc}`} style={{ clipPath: "polygon(0 0, calc(100% - 20%) 0, 100% 100%, 100% 100%, 0 100%)" }}>{children}</div>
                )
            }
        </div>
    )
}