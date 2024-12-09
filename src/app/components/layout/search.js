"use client"

import Link from 'next/link';
import { Tag } from '../content/tag';
import { ArrowSearch, Lucky } from '../content/icons';

import { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function SearchTags({ tags }) {
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
    const router1 = useRouter()
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
        <div className="SearchBarContainer w-full border-solid border-gray-300 border-b-[1px] min-h-[56px] flex items-start justify-between">
            <div className="Search-Tags-cont w-full gap-[16px] flex-col items-start ">
                <div className="Search-Links-cont w-full flex flex-row items-start gap-2 ">
                    <Link href={'/'}> <Lucky /> </Link>
                    <div className="Txt-Area-Link-cont w-full flex flex-col items-start gap-2 pb-[1rem]">
                        <textarea
                            className='TextArea w-full h-full font-custom font-medium text-xl  p-[10px] focus:outline-none active:outline-none resize-none placeholder:font-light placeholder:italic placeholder:text-gray-400'
                            placeholder={" Введите запрос или выберите тег"}
                            rows="1"
                            value={val}
                            onChange={handleChange}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    router1.push("/?q=" + val)
                                }
                            }}
                            ref={textAreaRef}
                        ></textarea>
                        <div className=''>
                            <SearchTags tags={tags} />
                        </div>
                        {/* <input contenteditable="true"
                            className="font-custom font-medium text-[16px] p-[10px] focus:outline-none
                            placeholder:font-light placeholder:italic placeholder:text-gray-400"
                            placeholder={" Введите запрос или выберите тег"}>
                        </input> */}
                    </div>
                    <Link href={'/?q=' + val}> <ArrowSearch /> </Link>
                </div>
            </div>
        </div>
    )
}

export function HeroSearch({ inputTags = [] }) {
    const [tags, setTags] = useState(inputTags)

    return (
        <div className='Hero w-full flex flex-col justify-center items-center pb-[6rem] md:pb-[7rem] lg:pb-[8rem]'>
            <div className='SearchBar-TagLines-cont w-full flex flex-col gap-[28px]'>
                <SearchBar tags={tags} />
                {
                    <div className='TagLines-var1 w-full flex flex-col gap-[32px] '>
                        <div className='w-full flex gap-8'>
                            <div className='font-custom font-bold pt-[4px]'>категория</div>
                            <div className='w-full flex flex-wrap gap-4'>
                                <Tag tags={tags} setTags={setTags}>для работы</Tag>
                                <Tag tags={tags} setTags={setTags}>для обучения</Tag>
                                <Tag tags={tags} setTags={setTags}>для вдохновения</Tag>
                            </div>
                        </div>
                        <div className='w-full pl-[50px] flex gap-8'>
                            <div className='font-custom font-bold pt-[4px]'>тип</div>
                            <div className='w-full flex flex-wrap gap-4'>
                                <Tag tags={tags} setTags={setTags}>события</Tag>
                                <Tag tags={tags} setTags={setTags}>картинка</Tag>
                                <Tag tags={tags} setTags={setTags}>текст</Tag>
                                <Tag tags={tags} setTags={setTags}>звук</Tag>
                                <Tag tags={tags} setTags={setTags}>видео</Tag>
                                <Tag tags={tags} setTags={setTags}>3D</Tag>
                                <Tag tags={tags} setTags={setTags}>код</Tag>
                                <Tag tags={tags} setTags={setTags}>инструмент</Tag>
                                <Tag tags={tags} setTags={setTags}>ПО</Tag>
                                <Tag tags={tags} setTags={setTags}>онлайн</Tag>
                            </div>
                        </div>
                    </div>
                }

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