import Image from 'next/image';

export function Lucky() {
    return (
        <div className="Random w-[40px] h-[40px] flex justify-center items-center">
            <Image
                src="/icons/random_search.svg"
                height={24}
                width={24}
                alt="cross icon"
            />
        </div>
    )
}

export function ArrowSearch() {
    return (
        <div className="Arrow flex justify-center items-center">
            <Image
                src="/icons/arrow_right_short_icon.svg"
                height={40}
                width={40}
                alt="cross icon"
            />
        </div>
    )
}

export function Logo() {
    return (
        <div className="Search w-[40px] h-[40px] flex justify-center items-center">
            <Image
                src="/icons/logo_kartoteka.svg"
                height={36}
                width={36}
                alt="cross icon"
            />
        </div>
    )
}

export function SearchIcon() {
    return (
        <div className="Search w-[40px] h-[40px] flex justify-center items-center">
            <Image
                src="/icons/search_icon.svg"
                height={24}
                width={24}
                alt="cross icon"
            />
        </div>
    )
}