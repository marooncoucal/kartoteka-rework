import Link from 'next/link';

export default function Error404() {
    return (
        <div className="w-[100%] h-[100%] pt-[200px] justify-center items-center flex">
            <div className="flex-col justify-center items-center gap-[10px] flex">
                <div className="text-black text-8xl font-semibold">404</div>
                <div className=" text-black text-2xl font-normal">страница не найдена</div>
                <Link href={'/'}>
                    <div className="flex items-center justify-center py-2 px-3 mt-8 rounded-md border-solid border-black border-[1px]">назад</div>
                </Link>
            </div>
        </div>
    )
}