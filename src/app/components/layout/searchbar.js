"use client"

import Image from 'next/image';
import Link from 'next/link';
import { Tag } from '../content/tag';
import { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
// import { Textarea } from "@material-tailwind/react";

function SearchField({ tags }) {

    return (
        <div className="flex flex-wrap gap-[12px]">
            {tags.map(tag => {
                return (<Tag clickable={false} key={tag}>{tag}</Tag>)
            })
            }
        </div>
    )
}

export function SearchBar({ tags }) {
    const params = useSearchParams()
    const router = useRouter()
    const textAreaRef = useRef(null);
    const [val, setVal] = useState(params.get("q"));
    const handleChange = (e) => {
        setVal(e.target.value);
    }

    useEffect(() => {
        textAreaRef.current.style.height = "auto";
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
    }, [val])

    return (
        <div className="SearchBarContainer w-full
        border-solid border-gray-300 border-b-[1px] 
        min-h-[56px]
        flex items-start justify-between">

            <div className="Search-Tags-cont w-full
            gap-[16px] flex-col items-start ">

                <div className="Search-Links-cont w-full
                flex flex-row items-start gap-2
                ">
                    <Link href={'/'}>
                        <div className="Random w-[40px] h-[40px] flex justify-center items-center">
                            <Image
                                src="/icons/random_search.svg"
                                height={24}
                                width={24}
                                alt="cross icon"
                            />
                        </div>
                    </Link>
                    <div className="Txt-Area-Link-cont w-full
                    flex flex-col items-start 
                    gap-2 pb-[1rem] ">
                        <textarea
                            className='TextArea w-full h-full
                            font-custom font-medium text-xl 
                            p-[10px]
                            focus:outline-none active:outline-none resize-none
                            placeholder:font-light placeholder:italic placeholder:text-gray-400'
                            placeholder={" Введите запрос или выберите тег"}
                            rows="1"
                            value={val}
                            onChange={handleChange}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    router.push("/?q=" + val)
                                }
                            }}
                            ref={textAreaRef}
                        ></textarea>
                        <div className=''>
                            <SearchField tags={tags}></SearchField>
                        </div>
                        {/* <input contenteditable="true"
                            className="font-custom font-medium text-[16px] p-[10px] focus:outline-none
                            placeholder:font-light placeholder:italic placeholder:text-gray-400"
                            placeholder={" Введите запрос или выберите тег"}>
                        </input> */}
                        {/* <Textarea></Textarea> */}
                    </div>

                    <Link href={'/?q=' + val}>
                        <div className="Arrow flex justify-center items-center">
                            <Image
                                src="/icons/arrow_right_short_icon.svg"
                                height={40}
                                width={40}
                                alt="cross icon"
                            />
                        </div>
                    </Link>
                </div>

                {/* <div className=''>
                    <SearchField tags={tags}></SearchField>
                </div> */}

            </div>



        </div>
    )
}

//_______FOR RESEARCH________

// Prevent Enter
// https://stackoverflow.com/questions/18779322/disable-new-line-in-textarea-when-pressed-enter

// $("TextArea").keydown(function (e) {
//     // Enter pressed
//     if (e.keyCode == 'Enter') {
//         //method to prevent from default behaviour
//         e.preventDefault();
//     }
// });



// _____WORKED______

// Auto Resize Text Area
// https://www.youtube.com/watch?v=gLpQ9_ExKec&t=2s
// https://github.com/codewgi/auto-resize-textarea/blob/main/src/App.js 