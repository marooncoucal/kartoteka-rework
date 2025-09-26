"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BaseTag, TopTag } from "../content/tag";

export default function ArrowsLeftRight({width,gap,refScroll}) {

    // скролл карточек
    // const refScroll = useRef(null); // из прошлого файла
    const CARD_WIDTH = width;
    const CARD_GAP = gap;

    const scrollByCard = (direction) => {
        const el = refScroll.current;
        if (!el) return; // страховка, если рефа нет (карточки еще не отрендерились)
        const scrollAmount = CARD_WIDTH + CARD_GAP; // ширина карточки + отступ между карточками
        el.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
        // direction +- вправо или влево
    };

    useEffect(() => {
        const el = refScroll.current;
        if (!el) return; // страховка, если рефа нет (карточки еще не отрендерились)
        const onWheel = (e) => {
            if (e.deltaY === 0) return;
            e.preventDefault();
            el.scrollLeft += e.deltaY;
        };
        el.addEventListener("wheel", onWheel, { passive: false });
        return () => el.removeEventListener("wheel", onWheel);
    }, []);

    return (
        <div className="ArrowsContainer flex flex-row gap-[16px]">
            <div onClick={() => scrollByCard(-1)} className="arrowLeft cursor-pointer select-none flex justify-center items-center w-[36px] h-[36px] border-solid border-black border-[1px]">
                <Image
                    src="/icons/arrow_left.svg"
                    height={16}
                    width={16}
                    alt="arrow left icon"
                />
            </div>
            <div onClick={() => scrollByCard(1)} className="arrowRight cursor-pointer select-none flex justify-center items-center w-[36px] h-[36px] border-solid border-black border-[1px]">
                <Image
                    src="/icons/arrow_right.svg"
                    height={16}
                    width={16}
                    alt="arrow right icon"
                />
            </div>
        </div>
    )
}