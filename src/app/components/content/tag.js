"use client"

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';


export function Tag({ children, clickable = true, tags, setTags }) {
    // массив с тегами, ?. нашлось или нет, если что выкидывает undefined вместо ошибки
    let active = tags?.includes(children)

    let searchParams = useSearchParams()
    //если нашёл q, то добавить q, иначе пустая строка
    let q = searchParams.get("q") ? "&q=" + searchParams.get("q") : ""
    let router = useRouter()

    return (
        <div className={`
            leading-none text-[14px] font-custom
            px-[12px] py-[6px] justify-center items-center flex 
            select-none cursor-pointer 
            ${active ? "bg-black gap-[12px] text-white" : "border-solid border-black border-[1px] gap-[0px] text-black"}
        `} onClick={() => {
                if (clickable) { //если можно кликнуть
                    if (!active) { // если тега в массиве нет
                        tags.push(children) // то записать в основной
                    } else { // иначе удалить (ещё один клик)
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
            <div className="Text text-[16px] font-custom font-bold leading-none">{children}</div>
            <div className="Cross flex justify-center items-center">
                {active && <Image
                    src="/icons/cross_desktop.svg"
                    height={10}
                    width={10}
                    alt="cross icon"
                />}
            </div>
        </div>
    )
}

export function BaseTag({ children }) {
    return (
        <div className="
        px-[12px] py-[6px]
        justify-center items-center flex select-none
        border-solid border-black border-[1px] gap-[0px] text-black
        ">
            <div className="Text text-[16px] font-custom font-medium leading-none">{children}</div>
        </div>
    )
}

export function TopTag({ children, tagType }) {
    let bgc = '';
    switch (tagType) {
        case 'для вдохновения':
            bgc = 'bg-blue-500';
            break;
        case 'для работы':
            bgc = 'bg-red-500';
            break;
        case 'для обучения':
            bgc = 'bg-teal-500';
            break;
        default:
            bgc = '';
    }
    return (
        <div className={`pl-4 pr-[40px] py-1 text-white ${bgc}`} style={{ clipPath: "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)" }}>{children}</div>
    )
}