import Link from 'next/link';
import ButtonRect from './components/content/atoms/buttonRect';

export default function Error404() {
    return (
        <div className="w-[100vw] h-[100vh] pb-[10rem] justify-center items-center flex flex-col gap-[24px]">
            <div className="flex-col justify-center items-center gap-[10px] flex">
                <div className="text-black text-8xl font-semibold">404</div>
                <div className=" text-black text-2xl font-normal">страница не найдена</div>

            </div>
            <ButtonRect link={'/'} text={'на главную'}/>
        </div>
    )
}