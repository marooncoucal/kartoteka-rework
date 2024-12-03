"use client"

import { Tag } from "../content/tag";
import { SearchBar } from "./searchbar";
import { useState } from 'react';


export function HeroSearch({ variant }) {
    const [tags, setTags] = useState([])
    return (
        <div className='Hero w-full
        flex flex-col justify-center items-center pb-[6rem] md:pb-[7rem] lg:pb-[8rem]'>
            <div className='SearchBar-TagLines-cont w-full 
            flex flex-col gap-[28px]'>

                <SearchBar tags={tags}></SearchBar>
                {
                    variant === 2 ? (
                        <div className='TagLines-var2 w-full 
                        flex flex-wrap gap-4 px-[2rem]
                        '>
                            <Tag tags={tags} setTags={setTags}>работа</Tag>
                            <Tag tags={tags} setTags={setTags}>обучение</Tag>
                            <Tag tags={tags} setTags={setTags}>вдохновение</Tag>
                            <Tag tags={tags} setTags={setTags}>картинка</Tag>
                            <Tag tags={tags} setTags={setTags}>текст</Tag>
                            <Tag tags={tags} setTags={setTags}>видео</Tag>
                            <Tag tags={tags} setTags={setTags}>код</Tag>
                            <Tag tags={tags} setTags={setTags}>инструмент</Tag>
                            <Tag tags={tags} setTags={setTags}>программы</Tag>
                            <Tag tags={tags} setTags={setTags}>события</Tag>
                        </div>
                    ) :
                        (
                            <div className='TagLines-var1 w-full
                            flex flex-col gap-[32px]
                            '>

                                <div className='w-full flex gap-8'>
                                    <div className='font-custom font-bold pt-[4px]'>почему</div>
                                    <div className='w-full flex flex-wrap gap-4'>
                                        <Tag tags={tags} setTags={setTags}>работа</Tag>
                                        <Tag tags={tags} setTags={setTags}>обучение</Tag>
                                        <Tag tags={tags} setTags={setTags}>вдохновение</Tag>
                                    </div>

                                </div>

                                <div className='w-full pl-7 flex gap-8'>
                                    <div className='font-custom font-bold pt-[4px]'>что</div>
                                    <div className='w-full flex flex-wrap gap-4'>
                                        <Tag tags={tags} setTags={setTags}>картинка</Tag>
                                        <Tag tags={tags} setTags={setTags}>текст</Tag>
                                        <Tag tags={tags} setTags={setTags}>видео</Tag>
                                        <Tag tags={tags} setTags={setTags}>код</Tag>
                                        <Tag tags={tags} setTags={setTags}>инструмент</Tag>
                                        <Tag tags={tags} setTags={setTags}>программы</Tag>
                                        <Tag tags={tags} setTags={setTags}>события</Tag>
                                    </div>
                                </div>

                            </div>
                        )}

            </div>
        </div>
    )
}