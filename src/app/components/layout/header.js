import Link from "next/link";
import { Logo, Lucky, SearchIcon } from "../content/icons";
import Image from "next/image";
import { Suspense } from "react";
import { SearchBar } from "./search";

export function Header() {
  return (
    <div className="SearchBarContainer w-full pt-[2rem] flex flex-col justify-center items-center">
      <div className="select-none w-full max-w-[1400px] px-[1rem] desktop:px-[0rem]">
        {/* если долго грузится */}
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
    </div>
  );
}

export function HeaderOld() {
  return (
    <header className="Header fixed flex items-center justify-center w-[100%] h-[56px] px-[10px] bg-white shadow">
      <div className="w-[100%] max-w-[1400px] h-[100%] justify-between items-center flex">
        <Link href={"/"}>
          {" "}
          <Logo />{" "}
        </Link>
        <div className="Icons flex gap-[4px]">
          <Link href={"/"}>
            {" "}
            <SearchIcon />{" "}
          </Link>
          <Link href={"/"}>
            {" "}
            <Lucky />{" "}
          </Link>
        </div>
      </div>
    </header>
  );
}
