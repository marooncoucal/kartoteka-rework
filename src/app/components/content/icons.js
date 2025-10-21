import Image from "next/image";
import Link from "next/link";

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
  );
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
  );
}

export function Logo() {
  return (
    <div className="Search w-[50x] h-[50px] flex justify-center items-center">
      <Image
        src="/icons/logo_kartoteka.svg"
        height={49}
        width={49}
        alt="cross icon"
      />
    </div>
  );
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
  );
}

export function ArrowLeft() {
  return (
    <div className="mt-[1.6px] relative min-w-[12px] min-h-[12px]">
      <Image
        src="/icons/arrow_left.svg"
        fill
        alt="arrow left icon"
      />
    </div>
  );
}

export function ArrowRight() {
  return (
    <div className="mt-[1.6px] relative min-w-[12px] min-h-[12px]">
      <Image
        src="/icons/arrow_right.svg"
        fill
        alt="arrow right icon"
      />
    </div>
  );
}

export function ArrowDown() {
  return (
    <div className="mt-[4px] relative min-w-[14px] min-h-[14px]">
      <Image
        src="/icons/arrow_down.svg"
        fill
        alt="arrow down icon"
      />
    </div>
  );
}
