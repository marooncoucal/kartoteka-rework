import Link from "next/link";
import { BaseTag } from "../content/tag";
import Image from 'next/image';



export default function Card() {
    return (
        <Link href={''}>
            <div className="max-w-[100%] min-w-[170px] flex flex-col rounded-lg overflow-hidden border-2 border-gray-200 border-solid box-content">
                <div className="imgContainer bg-gray-100 min-h-[240px]"></div>
                <div className="txtCard p-5 bg-white flex flex-col gap-[16px]">

                    <div className="Heading text-black text-[20px] font-bold">
                        Lorem Ipsum
                    </div>
                    <div className="flex gap-[8px] flex-wrap">
                        <BaseTag>обучение</BaseTag>
                        <BaseTag>событие</BaseTag>
                        <BaseTag>событие</BaseTag>
                        <BaseTag>событие</BaseTag>
                        <BaseTag>событие</BaseTag>
                    </div>
                    <div className="text-neutral-600 text-[16px] font-normal ">
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    {/* <div class="px-[14px] py-[12px] rounded-lg justify-center items-center gap-3 flex bg-zinc-200">
                        <div class="Text text-black text-lg font-semibold  leading-[14px]">перейти</div>
                    </div> */}

                </div>
            </div>
        </Link>

    )
}

export function Card1() {

    return (
        <Link href={'https://www.awwwards.com/'}>
            <div className="
            max-w-[100%] h-full min-w-[170px] 
            flex flex-col 
            rounded-full overflow-hidden 
            border-2 border-gray-200 border-solid box-content">
                <div className="imgContainer 
                flex justify-center items-center 
                bg-gray-100 min-h-[240px]">
                    <Image
                        src="/cards/awards.png"
                        height={100}
                        width={240}
                    ></Image>
                </div>
                <div className="txtCard p-5 bg-white flex flex-col gap-[16px]">

                    <div className="Heading text-black text-[20px] font-bold">
                        Awwwards
                    </div>
                    <div className="flex gap-[8px] flex-wrap">
                        <BaseTag>вдохновение</BaseTag>
                        <BaseTag>веб-дизайн</BaseTag>
                        <BaseTag>сайт</BaseTag>
                    </div>
                    <div className="text-neutral-600 text-[16px] font-normal ">
                        <p className="">Сайт, публикующий интересные сайты, направлен на продвижение лучших инновационных разработок в вебе.</p>
                    </div>

                    {/* <div class="px-[14px] py-[12px] rounded-lg justify-center items-center gap-3 flex bg-zinc-200">
                        <div class="Text text-black text-lg font-semibold  leading-[14px]">перейти</div>
                    </div> */}

                </div>
            </div>
        </Link>
    )
}

export function Card2() {
    return (
        <Link href={'https://cantunsee.space/'}>
            <div className="max-w-[100%] h-full min-w-[170px] flex flex-col rounded-lg overflow-hidden border-2 border-gray-200 border-solid">
                <div className="imgContainer flex justify-center items-center bg-gray-100 min-h-[240px]">
                    <Image
                        src="/cards/unsee.png"
                        height={240}
                        width={240}
                    ></Image>
                </div>
                <div className="txtCard p-5 bg-white flex flex-col gap-[16px]">

                    <div className="Heading text-black text-[20px] font-bold">
                        Can't Unsee
                    </div>
                    <div className="flex gap-[8px] flex-wrap">
                        <BaseTag>обучение</BaseTag>
                        <BaseTag>игра</BaseTag>
                    </div>
                    <div className="text-neutral-600 text-[16px] font-normal ">
                        <p className="">Игра для дизайнеров для проверки знаний в дизайне интерфейсов</p>
                    </div>

                    {/* <div class="px-[14px] py-[12px] rounded-lg justify-center items-center gap-3 flex bg-zinc-200">
                        <div class="Text text-black text-lg font-semibold  leading-[14px]">перейти</div>
                    </div> */}

                </div>
            </div>
        </Link>
    )
}

export function Card3() {
    return (
        <Link href={'https://hydra.ojack.xyz/'}>
            <div className="max-w-[100%] h-full min-w-[170px] flex flex-col rounded-lg overflow-hidden border-2 border-gray-200 border-solid box-content">
                <div className="imgContainer flex justify-center items-center bg-gray-100 min-h-[240px]">
                    <Image
                        src="/cards/hydra.png"
                        height={240}
                        width={240}
                    ></Image>
                </div>
                <div className="txtCard p-5 bg-white flex flex-col gap-[16px]">

                    <div className="Heading text-black text-[20px] font-bold">
                        Hydra: Live Coding Visuals
                    </div>
                    <div className="flex gap-[8px] flex-wrap">
                        <BaseTag>обучение</BaseTag>
                        <BaseTag>код</BaseTag>
                        <BaseTag>видео</BaseTag>
                        <BaseTag>синтезатор</BaseTag>
                    </div>
                    <div className="text-neutral-600 text-[16px] font-normal ">
                        <p className="">Среда кодирования с возможностью изменения кода в реальном времени, которая запускается непосредственно в браузере.</p>
                    </div>

                    {/* <div class="px-[14px] py-[12px] rounded-lg justify-center items-center gap-3 flex bg-zinc-200">
                        <div class="Text text-black text-lg font-semibold  leading-[14px]">перейти</div>
                    </div> */}

                </div>
            </div>
        </Link>
    )
}

export function Card4() {
    return (
        <Link href={'https://www.wiley.com/en-gb/About+Face%3A+The+Essentials+of+Interaction+Design%2C+4th+Edition-p-9781118766583'}>
            <div className="max-w-[100%] h-full min-w-[170px] flex flex-col rounded-lg overflow-hidden border-2 border-gray-200 border-solid box-content">
                <div className="imgContainer flex justify-center items-center bg-gray-100 min-h-[240px]">
                    <Image
                        src="/cards/aboutface.png"
                        height={100}
                        width={180}
                    ></Image>
                </div>
                <div className="txtCard p-5 bg-white flex flex-col gap-[16px]">

                    <div className="Heading text-black text-[20px] font-bold">
                        Об интерфейсах: основы интерактивного дизайна
                    </div>
                    <div className="flex gap-[8px] flex-wrap">
                        <BaseTag>обучение</BaseTag>
                        <BaseTag>веб-дизайн</BaseTag>
                        <BaseTag>книга</BaseTag>
                    </div>
                    <div className="text-neutral-600 text-[16px] font-normal">
                        <p className="">Об интерфейсах» — это книга, которая вывела интерактивный дизайн в повседневный лексикон, продолжает лидировать в идеях и методах, актуальных для сегодняшних практиков дизайна и разработчиков.</p>
                    </div>

                    {/* <div class="px-[14px] py-[12px] rounded-lg justify-center items-center gap-3 flex bg-zinc-200">
                        <div class="Text text-black text-lg font-semibold  leading-[14px]">перейти</div>
                    </div> */}

                </div>
            </div>
        </Link>

    )
}

{/* <div className='Collection flex flex-col gap-[24px] px-[40px]'>
    <div className="grid grid-cols-1 
    md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 
    gap-[20px] m-auto">
        <Card1></Card1>
        <Card2></Card2>
        <Card3></Card3>
        <Card4></Card4>
        <Card></Card>
        <Card></Card>
    </div> 
</div> */}

/*

    <div className="flex flex-1 basis grow flex-wrap justify-center items-start gap-[20px] mt-[40px] px-[40px] mx-auto">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
    </div>


*/