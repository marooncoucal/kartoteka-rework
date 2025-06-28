"use client"

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ChipDrop({ children, clickable = true, items, selectedItem, onChanged }) {
    const [open, setOpen] = useState(false);
    const dropRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropRef.current && !dropRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);
    const handleMainClick = () => setOpen((prev) => !prev);
    const handleDropdownToggle = (item) => {
        onChanged(item);
        // setOpen(false);
    };
    return (
        <div className='relative' ref={dropRef}>
            <div className={`
                    leading-none text-[16px] font-custom text-black
                    px-[16px] pb-[2px] h-[30px]
                    justify-between items-center flex gap-[8px]
                    select-none cursor-pointer
                    border-solid border-black border-[1px]
                    `}
                onClick={handleMainClick}
            >
                <div className="Text text-[16px] leading-none whitespace-nowrap">{children}</div>
                <div className="mt-[4px]">
                    <Image
                        src="/icons/arrow_down.svg"
                        height={14}
                        width={14}
                        alt="arrow down icon"
                    />
                </div>
            </div>
            {open && (
                <div className="absolute left-0 top-full z-10 mt-2 min-w-full 690w:right-0 690w:left-auto">
                    {items?.map((item) => (
                        <div key={item} onClick={() => handleDropdownToggle(item)}>
                            <div className={
                                `
                                    leading-none text-[16px] font-custom text-black
                                    px-[16px] pb-[2px] h-[30px]
                                    items-center flex gap-[8px]
                                    select-none cursor-pointer
                                    border-solid border-black border-[1px]
                                    mt-[-1px]
                                    ${item === selectedItem ? `bg-black` : `bg-custom-white`}
                                `
                            }>
                                <span className={item === selectedItem
                                    ? "Text text-[16px] leading-none whitespace-nowrap font-bold text-white"
                                    : "Text text-[16px] leading-none whitespace-nowrap"}>{item}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}