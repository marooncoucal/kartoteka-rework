"use client"

import Link from 'next/link';
import { Tag, TopTag } from '../content/tag';
import { ArrowSearch, Logo, Lucky, SearchIcon } from '../content/icons';

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
        <div className="SearchBarContainer w-full min-h-[50px] h-[50px] flex items-start justify-between gap-[12px] desktop:gap-[0px]">
            <div className='h-full desktop:translate-x-[-4rem] desktop:w-[0px]'>
                <Link href={'/?q=' + val}> <Logo /> </Link>
            </div>
            <div className="Search-Tags-cont h-[50px] w-full bg-white">
                <div className="Search-Links-cont w-full h-[50px] flex flex-row items-center pr-[8px]">
                    <div className="Txt-Area-Link-cont 
                        w-full h-[50px] px-[16px] flex items-center">
                        <textarea
                            className='TextArea w-full h-full font-custom font-medium text-[16px] leading-none focus:outline-none active:outline-none resize-none placeholder:font-light placeholder:text-gray-400 '
                            // бегущая строка с разными подсказками
                            placeholder={"картотека полезных ссылок"}
                            rows="1"
                            value={val ?? ""}
                            onChange={handleChange}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    router1.push("/?q=" + val)
                                }
                            }}
                            ref={textAreaRef}
                        ></textarea>
                    </div>
                    <Link href={'/?q=' + val}> <SearchIcon /> </Link>
                </div>
                {/* здесь были теги, которые добавлялись в строку после фильтрации */}
                {/* <div className=''>
                    <SearchTags tags={tags} />
                </div> */}
            </div>
        </div>
    )
}

export function HeroSearch({ inputTags = [] }) {
    const [tags, setTags] = useState(inputTags)

    return (
        <div className='Hero w-full flex flex-col justify-center items-center pb-[2rem] md:pb-[3rem] lg:pb-[4rem]'>
            <div className='SearchBar-TagLines-cont w-full flex flex-col gap-[28px]'>
                <SearchBar tags={tags} />
                {
                    <div className='TagLines-var1 w-full flex flex-col gap-[18px] '>
                        <div className='w-full flex gap-8'>
                            <div className='w-full flex flex-wrap gap-4'>
                                <Tag tags={tags} setTags={setTags} tagColor={`для работы`}>для работы</Tag>
                                <Tag tags={tags} setTags={setTags} tagColor={`для обучения`}>для обучения</Tag>
                                <Tag tags={tags} setTags={setTags} tagColor={`для вдохновения`}>для вдохновения</Tag>
                            </div>
                        </div>
                        <div className='w-full flex gap-8'>
                            <div className='w-full flex flex-wrap gap-4'>
                                <Tag tags={tags} setTags={setTags}>видео</Tag>
                                <Tag tags={tags} setTags={setTags}>код</Tag>
                                <Tag tags={tags} setTags={setTags}>авторы</Tag>
                                <Tag tags={tags} setTags={setTags}>3D</Tag>
                                <Tag tags={tags} setTags={setTags}>инструменты</Tag>
                                <Tag tags={tags} setTags={setTags}>изображения</Tag>
                                <Tag tags={tags} setTags={setTags}>события</Tag>
                                <Tag tags={tags} setTags={setTags}>звук</Tag>
                                <Tag tags={tags} setTags={setTags}>литература</Tag>
                                <Tag tags={tags} setTags={setTags}>медиа</Tag>

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